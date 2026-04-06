require('dotenv').config();

const bcrypt = require('bcrypt');
const prisma = require('../src/config/prisma');

async function waitForDatabase(maxRetries = 5, delay = 2000) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            // Try a simple query instead of $connect()
            await prisma.$queryRaw`SELECT 1`;
            console.log('✅ Database connection established');
            return;
        } catch (error) {
            console.log(`⏳ Waiting for database... Attempt ${i + 1}/${maxRetries}`);
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }
    throw new Error('❌ Could not connect to database after maximum retries');
}

const categories = [
    {
        name: 'Cà phê',
        status: 'active',
    },
    {
        name: 'Trà',
        status: 'active',
    },
    {
        name: 'Đồ uống đá xay',
        status: 'active',
    },
    {
        name: 'Bánh ngọt',
        status: 'active',
    },
];

const users = [
    {
        name: 'Quản trị chính',
        email: 'admin@thezoocoffee.vn',
        password: 'admin123', // Plain password, will be hashed
        role: 'admin',
    },
];

const inventoryItems = [
    {
        name: 'Hạt cà phê Arabica',
        unit: 'kg',
        quantity: '50.00',
        min_quantity: '5.00',
        cost_price: '200000.00',
        supplier_name: 'Café House',
        status: 'available',
    },
    {
        name: 'Sữa tươi',
        unit: 'l',
        quantity: '100.00',
        min_quantity: '10.00',
        cost_price: '22000.00',
        supplier_name: 'Vinamilk',
        status: 'available',
    },
    {
        name: 'Đường',
        unit: 'kg',
        quantity: '80.00',
        min_quantity: '10.00',
        cost_price: '15000.00',
        supplier_name: 'Cường Đạt',
        status: 'available',
    },
    {
        name: 'Bột cacao',
        unit: 'kg',
        quantity: '40.00',
        min_quantity: '5.00',
        cost_price: '120000.00',
        supplier_name: 'Nestle',
        status: 'available',
    },
    {
        name: 'Bột matcha',
        unit: 'kg',
        quantity: '20.00',
        min_quantity: '3.00',
        cost_price: '180000.00',
        supplier_name: 'Uji',
        status: 'available',
    },
];

const productItems = [
    {
        name: 'Espresso',
        price: '45.00',
        description: 'Cà phê Espresso đậm đà, nồng nàn.',
        sku: 'ESP001',
        status: 'available',
        categoryName: 'Cà phê',
    },
    {
        name: 'Cappuccino',
        price: '68.00',
        description: 'Sữa bọt mịn kết hợp cà phê Espresso.',
        sku: 'CAP001',
        status: 'available',
        categoryName: 'Cà phê',
    },
    {
        name: 'Mocha',
        price: '75.00',
        description: 'Espresso pha với cacao và sữa tươi.',
        sku: 'MOC001',
        status: 'available',
        categoryName: 'Cà phê',
    },
    {
        name: 'Matcha Latte',
        price: '78.00',
        description: 'Matcha Nhật Bản hòa quyện sữa tươi.',
        sku: 'MTL001',
        status: 'available',
        categoryName: 'Trà',
    },
];

const recipeDefinitions = [
    {
        productSku: 'ESP001',
        items: [
            { inventoryName: 'Hạt cà phê Arabica', quantity: '0.02' },
            { inventoryName: 'Đường', quantity: '0.01' },
        ],
    },
    {
        productSku: 'CAP001',
        items: [
            { inventoryName: 'Hạt cà phê Arabica', quantity: '0.02' },
            { inventoryName: 'Sữa tươi', quantity: '0.12' },
            { inventoryName: 'Đường', quantity: '0.01' },
        ],
    },
    {
        productSku: 'MOC001',
        items: [
            { inventoryName: 'Hạt cà phê Arabica', quantity: '0.02' },
            { inventoryName: 'Sữa tươi', quantity: '0.12' },
            { inventoryName: 'Bột cacao', quantity: '0.02' },
            { inventoryName: 'Đường', quantity: '0.01' },
        ],
    },
    {
        productSku: 'MTL001',
        items: [
            { inventoryName: 'Bột matcha', quantity: '0.01' },
            { inventoryName: 'Sữa tươi', quantity: '0.15' },
            { inventoryName: 'Đường', quantity: '0.01' },
        ],
    },
];

async function upsertInventory(item) {
    const existing = await prisma.inventory.findFirst({
        where: { name: item.name },
    });

    if (existing) {
        return prisma.inventory.update({
            where: { id: existing.id },
            data: item,
        });
    }

    return prisma.inventory.create({ data: item });
}

async function upsertCategory(item) {
    const existing = await prisma.categories.findFirst({
        where: { name: item.name },
    });

    if (existing) {
        return prisma.categories.update({
            where: { id: existing.id },
            data: item,
        });
    }

    return prisma.categories.create({ data: item });
}

async function upsertUser(item) {
    const existing = await prisma.users.findFirst({
        where: { email: item.email },
    });

    const hashedPassword = await bcrypt.hash(item.password, 10);

    const userData = {
        name: item.name,
        email: item.email,
        password_hash: hashedPassword,
        role: item.role,
    };

    if (existing) {
        return prisma.users.update({
            where: { id: existing.id },
            data: userData,
        });
    }

    return prisma.users.create({ data: userData });
}

async function upsertProduct(item) {
    return prisma.products.upsert({
        where: { sku: item.sku },
        update: item,
        create: item,
    });
}

async function main() {
    console.log('🔄 Connecting to database...');
    await waitForDatabase();

    console.log('🌱 Seeding categories data...');
    const categoryMap = {};

    for (const item of categories) {
        const record = await upsertCategory(item);
        categoryMap[record.name] = record;
        console.log(`  - Category seeded: ${record.name}`);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay
    }

    console.log('👥 Seeding users data...');
    const userMap = {};

    for (const item of users) {
        const record = await upsertUser(item);
        userMap[record.email] = record;
        console.log(`  - User seeded: ${record.name} (${record.email})`);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay
    }

    console.log('📦 Seeding inventory data...');
    const inventoryMap = {};

    for (const item of inventoryItems) {
        const record = await upsertInventory(item);
        inventoryMap[record.name] = record;
        console.log(`  - Inventory seeded: ${record.name}`);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay
    }

    console.log('🛍️  Seeding product data...');
    const productMap = {};

    for (const item of productItems) {
        const category = categoryMap[item.categoryName];
        if (!category) {
            throw new Error(`Không tìm thấy category với tên ${item.categoryName}`);
        }

        const productData = {
            ...item,
            category_id: category.id,
        };
        delete productData.categoryName;

        const record = await upsertProduct(productData);
        productMap[record.sku] = record;
        console.log(`  - Product seeded: ${record.name}`);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay
    }

    const recipeProductIds = Object.values(productMap).map((product) => product.id);
    await prisma.recipes.deleteMany({
        where: {
            product_id: { in: recipeProductIds },
        },
    });
    await new Promise((resolve) => setTimeout(resolve, 200)); // Delay after delete

    console.log('🍳 Seeding recipe data...');

    for (const recipeDefinition of recipeDefinitions) {
        const product = productMap[recipeDefinition.productSku];
        if (!product) {
            throw new Error(`Không tìm thấy product với SKU ${recipeDefinition.productSku}`);
        }

        for (const item of recipeDefinition.items) {
            const inventory = inventoryMap[item.inventoryName];
            if (!inventory) {
                throw new Error(`Không tìm thấy inventory với tên ${item.inventoryName}`);
            }

            await prisma.recipes.create({
                data: {
                    product_id: product.id,
                    inventory_id: inventory.id,
                    quantity_used: item.quantity,
                },
            });
            console.log(`  - Recipe added: ${product.name} → ${inventory.name} ${item.quantity}`);
            await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay
        }
    }

    console.log('🎉 Seed completed successfully.');
}

main()
    .catch((error) => {
        console.error('Seed error:', error.message || error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
