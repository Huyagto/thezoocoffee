# The Zoo Coffee

## Tổng Quan

- `client`: giao diện khách hàng, chạy ở `http://localhost:3000`
- `admin`: giao diện quản trị, chạy ở `http://localhost:3001`
- `server`: backend API, chạy ở `http://localhost:5000`

## Yêu Cầu

- Node.js `20+`
- npm
- Git
- MySQL hoặc MariaDB

Nếu bạn muốn chạy backend theo đúng cấu hình local hiện tại của repo, database mặc định là:

```env
DATABASE_URL="mysql://prisma:123456@127.0.0.1:13306/thezoocoffee"
```

## Chạy Trên Máy Mới

### 1. Clone repo

```bash
git clone https://github.com/Huyagto/thezoocoffee.git
cd thezoocoffee
```

### 2. Cài package

```bash
cd server && npm install
cd ../client && npm install
cd ../admin && npm install
```

### 3. Tạo file môi trường

Tối thiểu cần:

- `server/.env`
- `admin/.env.local` nếu bạn có cấu hình riêng cho admin
- `client/.env.local` nếu bạn có cấu hình riêng cho client

Nếu repo có file `.env.example` thì copy từ đó trước rồi sửa lại.

Ví dụ ở backend:

```bash
cd server
copy .env.example .env
```

Sau đó kiểm tra lại các biến quan trọng:

- `DATABASE_URL`
- `PORT=5000`
- `CLIENT_URL=http://localhost:3000`

### 4. Chuẩn bị database

Nếu bạn đã có MySQL local đúng cổng `13306`:

```bash
cd server
npx prisma generate
npx prisma db push
```

Nếu database local của project chưa chạy và bạn đang dùng script local trong repo:

```bash
cd server
npm run db:start-local
```

Sau đó chạy tiếp:

```bash
npx prisma generate
npx prisma db push
```

### 5. Seed dữ liệu

```bash
cd server
npm run seed
```

### 6. Chạy từng app

Backend:

```bash
cd server
npm run dev
```

Client:

```bash
cd client
npm run dev
```

Admin:

```bash
cd admin
npm run dev
```

## URL Mặc Định

- Client: `http://localhost:3000`
- Admin: `http://localhost:3001`
- Backend: `http://localhost:5000`

## Kiểm Tra Nhanh

Sau khi chạy xong, bạn có thể kiểm tra:

- client mở được `http://localhost:3000`
- admin mở được `http://localhost:3001`
- backend phản hồi ở `http://localhost:5000/api/products`

## Lưu Ý Kiến Trúc API

Backend hiện chia route theo 3 nhóm:

- `public/shared`: ví dụ `/api/products`, `/api/categories`, callback payment
- `user`: ví dụ `/api/user/cart`, `/api/user/orders`, `/api/user/payments`
- `admin`: ví dụ `/api/admin/products`, `/api/admin/orders`, `/api/admin/users`

## Một Lệnh Thiếu Thường Gặp

Nếu Prisma lỗi schema:

```bash
cd server
npm run prisma -- validate
npx prisma generate
```

Nếu backend lỗi do database chưa lên:

```bash
cd server
npm run db:start-local
```

Nếu cần seed lại dữ liệu:

```bash
cd server
npm run seed
```
