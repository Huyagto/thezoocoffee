# The Zoo Coffee

## Tổng quan

Repo gồm 3 phần chính:

- `server`: backend API chạy ở `http://localhost:5000`
- `client`: giao diện khách hàng chạy ở `http://localhost:3000`
- `admin`: giao diện quản trị chạy ở `http://localhost:3001`

Flow hiện tại của dự án:

- MySQL chạy bằng `WampServer`
- Prisma dùng để generate client và đồng bộ schema
- Redis là tùy chọn
  - nếu có `REDIS_URL` hợp lệ thì backend dùng Redis thật
  - nếu không có Redis thì backend tự fallback sang memory cache để chạy local
- Không còn dùng Docker

## Yêu cầu

- Node.js `20+`
- npm
- Git
- WampServer

## Cài đặt nhanh

### 1. Clone repo

```bash
git clone https://github.com/Huyagto/thezoocoffee.git
cd thezoocoffee
```

### 2. Chuẩn bị MySQL bằng WampServer

1. Mở `WampServer`
2. Bật dịch vụ MySQL
3. Đảm bảo MySQL đang chạy ở `127.0.0.1:3306`
4. Tạo database `thezoocoffee`

Bạn có thể kiểm tra nhanh kết nối MySQL:

```bash
cd server
npm install
npm run db:check-wamp
```

### 3. Tạo file môi trường cho backend

```bash
cd server
copy .env.example .env
```

Cấu hình tối thiểu trong `server/.env`:

```env
PORT=5000
CLIENT_URL="http://localhost:3000"
ADMIN_URL="http://localhost:3001"
DATABASE_URL="mysql://root:@127.0.0.1:3306/thezoocoffee"
```

Nếu MySQL của Wamp có mật khẩu cho `root`, thay lại cho đúng máy của bạn:

```env
DATABASE_URL="mysql://root:mat_khau_cua_ban@127.0.0.1:3306/thezoocoffee"
```

Nếu muốn dùng Redis thật thay vì memory fallback, thêm:

```env
REDIS_URL="redis://127.0.0.1:6379"
```

Hoặc dùng Redis Cloud theo URL của bạn.

### 4. Cài dependencies

```bash
cd server
npm install

cd ../client
npm install

cd ../admin
npm install
```

### 5. Đồng bộ Prisma

```bash
cd server
npx prisma generate
npx prisma db push
```

Nếu sau này repo có migration hoàn chỉnh và bạn muốn áp migration thay vì `db push`:

```bash
cd server
npx prisma migrate deploy
```

### 6. Seed dữ liệu mẫu

```bash
cd server
npm run seed
```

Seed hiện có:

- danh mục
- sản phẩm
- nguyên liệu và công thức
- tài khoản mẫu
- coupon mẫu
- đơn hàng mẫu để đánh giá best seller

### 7. Chạy backend

```bash
cd server
npm run dev
```

### 8. Chạy client

```bash
cd client
npm run dev
```

### 9. Chạy admin

```bash
cd admin
npm run dev
```

## URL mặc định

- Client: `http://localhost:3000`
- Admin: `http://localhost:3001`
- Backend: `http://localhost:5000`
- MySQL WampServer: `127.0.0.1:3306`

## Kiểm tra nhanh

Sau khi chạy xong, bạn có thể kiểm tra:

- `http://localhost:3000`
- `http://localhost:3001`
- `http://localhost:5000/api/products`

## Ghi chú quan trọng

- Sau khi đổi `server/.env`, hãy restart backend
- Một số tính năng như OTP/reset password có thể dùng Redis hoặc memory fallback
- Nếu đổi mật khẩu thành công, người dùng sẽ bị đăng xuất và phải đăng nhập lại
- Checkout hiện yêu cầu người dùng cập nhật đủ họ tên, số điện thoại và địa chỉ trong tài khoản trước khi thanh toán

## Kiến trúc API

Backend chia route theo 3 nhóm:

- `public/shared`
  - ví dụ: `/api/products`, `/api/categories`, callback payment
- `user`
  - ví dụ: `/api/user/cart`, `/api/user/orders`, `/api/user/payments`
- `admin`
  - ví dụ: `/api/admin/products`, `/api/admin/orders`, `/api/admin/users`

## Một số lệnh hữu ích

Kiểm tra MySQL Wamp:

```bash
cd server
npm run db:check-wamp
```

Validate Prisma schema:

```bash
cd server
npm run prisma -- validate
```

Generate Prisma client:

```bash
cd server
npx prisma generate
```

Push schema lên database:

```bash
cd server
npx prisma db push
```

Seed lại dữ liệu:

```bash
cd server
npm run seed
```

## Dừng hệ thống

- Dừng `server`, `client`, `admin`: nhấn `Ctrl + C` ở từng terminal
- Dừng MySQL: tắt trong WampServer nếu cần
