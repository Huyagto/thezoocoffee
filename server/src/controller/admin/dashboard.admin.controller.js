const prisma = require('../../config/prisma');
const { OK } = require('../../core/success.response');

function isSameDay(dateValue) {
    if (!dateValue) {
        return false;
    }

    const inputDate = new Date(dateValue);
    const now = new Date();

    return (
        inputDate.getFullYear() === now.getFullYear() &&
        inputDate.getMonth() === now.getMonth() &&
        inputDate.getDate() === now.getDate()
    );
}

class DashboardAdminController {
    async getDashboard(req, res) {
        const [categories, products, inventoryItems, orders, users] = await Promise.all([
            prisma.categories.findMany({
                select: {
                    id: true,
                    name: true,
                    status: true,
                },
            }),
            prisma.products.findMany({
                select: {
                    id: true,
                    name: true,
                    status: true,
                    price: true,
                    created_at: true,
                },
            }),
            prisma.inventory.findMany({
                select: {
                    id: true,
                    name: true,
                    status: true,
                    quantity: true,
                },
            }),
            prisma.orders.findMany({
                orderBy: {
                    created_at: 'desc',
                },
                take: 5,
                select: {
                    id: true,
                    order_code: true,
                    total_amount: true,
                    order_status: true,
                    payment_status: true,
                    created_at: true,
                    users: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                },
            }),
            prisma.users.findMany({
                select: {
                    id: true,
                    role: true,
                },
            }),
        ]);

        const todayRevenue = orders.reduce((total, order) => {
            if (!isSameDay(order.created_at) || order.payment_status !== 'paid') {
                return total;
            }

            return total + Number(order.total_amount || 0);
        }, 0);

        const pendingOrders = orders.filter((order) =>
            ['pending', 'confirmed', 'preparing', 'shipping'].includes(order.order_status)
        ).length;

        const activeCategories = categories.filter((category) => category.status === 'active').length;
        const availableInventory = inventoryItems.filter((item) => item.status === 'available').length;

        new OK({
            message: 'Lấy dữ liệu dashboard thành công',
            metadata: {
                stats: {
                    todayRevenue,
                    pendingOrders,
                    totalOrders: orders.length,
                    totalProducts: products.length,
                    activeCategories,
                    totalUsers: users.length,
                    adminUsers: users.filter((user) => user.role === 'admin').length,
                    customerUsers: users.filter((user) => user.role !== 'admin').length,
                    availableInventory,
                    outOfStockInventory: inventoryItems.filter((item) => item.status === 'out_of_stock').length,
                    outOfStockProducts: products.filter((item) => item.status === 'out_of_stock').length,
                    discontinuedProducts: products.filter((item) => item.status === 'discontinued').length,
                    inactiveCategories: categories.filter((item) => item.status === 'inactive').length,
                },
                recentOrders: orders.map((order) => ({
                    ...order,
                    user: order.users,
                })),
            },
        }).send(res);
    }
}

module.exports = new DashboardAdminController();
