# The Zoo Coffee

## Tổng quan

- `server`: backend API chạy ở `http://localhost:5000`
- `client`: giao diện khách hàng chạy ở `http://localhost:3000`
- `admin`: giao diện quản trị chạy ở `http://localhost:3001`

Repo này hiện chạy theo flow:

- MySQL từ WampServer
- Prisma để migrate, generate client và thao tác schema
- `server`, `client`, `admin` chạy local trên máy

## Yêu cầu

- Node.js `20+`
- npm
- Git
- WampServer

## Cách chạy

### 1. Clone repo

```bash
git clone https://github.com/Huyagto/thezoocoffee.git
cd thezoocoffee
```

### 2. Chuẩn bị MySQL bằng WampServer

1. Mở WampServer
2. Bật dịch vụ MySQL
3. Bảo đảm MySQL đang lắng nghe ở `127.0.0.1:3306`
4. Tạo database `thezoocoffee`

Bạn có thể kiểm tra nhanh MySQL bằng script:

```bash
cd server
npm run db:check-wamp
```

### 3. Chuẩn bị môi trường cho backend

```bash
cd server
copy .env.example .env
```

Thiết lập ít nhất các biến sau trong `server/.env`:

```env
PORT=5000
CLIENT_URL="http://localhost:3000"
DATABASE_URL="mysql://root:your_password@127.0.0.1:3306/thezoocoffee"
```

Nếu bạn đăng nhập MySQL bằng tài khoản khác của WampServer thì thay `root` và `your_password` theo máy của bạn.

### 4. Cập nhật schema Prisma

```bash
cd server
npx prisma generate
npx prisma db push
```

Nếu dự án đã có migrations và bạn muốn áp migration thay vì `db push`:

```bash
cd server
npx prisma migrate deploy
```

### 5. Seed dữ liệu

```bash
cd server
npm run seed
```

### 6. Chạy backend

```bash
cd server
npm install
npm run dev
```

### 7. Chạy client

```bash
cd client
npm install
npm run dev
```

### 8. Chạy admin

```bash
cd admin
npm install
npm run dev
```

## URL mặc định

- Client: `http://localhost:3000`
- Admin: `http://localhost:3001`
- Backend: `http://localhost:5000`
- MySQL WampServer: `127.0.0.1:3306`

## Kiểm tra nhanh

Sau khi chạy xong, kiểm tra:

- `http://localhost:3000`
- `http://localhost:3001`
- `http://localhost:5000/api/products`

## Kiến trúc API

Backend chia route theo 3 nhóm:

- `public/shared`
  - ví dụ: `/api/products`, `/api/categories`, callback payment
- `user`
  - ví dụ: `/api/user/cart`, `/api/user/orders`, `/api/user/payments`
- `admin`
  - ví dụ: `/api/admin/products`, `/api/admin/orders`, `/api/admin/users`

## Dừng hệ thống

- Dừng `client`, `admin`, `server`: nhấn `Ctrl + C` ở từng terminal
- Dừng MySQL: tắt trong WampServer nếu cần

## Một số lệnh hữu ích

Validate Prisma:

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
