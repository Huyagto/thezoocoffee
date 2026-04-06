# The Zoo Coffee

## Tổng Quan

- `server`: backend API, chạy ở `http://localhost:5000`
- `client`: giao diện khách hàng, chạy ở `http://localhost:3000`
- `admin`: giao diện quản trị, chạy ở `http://localhost:3001`

Repo này nên chạy theo flow:

- backend + MySQL + Redis bằng Docker
- `client` và `admin` chạy local ngoài máy

## Yêu Cầu

- Node.js `20+`
- npm
- Git
- Docker Desktop

## Cách Chạy Khuyên Dùng

### 1. Clone repo

```bash
git clone https://github.com/Huyagto/thezoocoffee.git
cd thezoocoffee
```

### 2. Chuẩn bị file môi trường cho backend

```bash
cd server
copy .env.example .env
```

Sau đó kiểm tra lại ít nhất các biến này trong `server/.env`:

```env
PORT=5000
CLIENT_URL="http://localhost:3000"
DATABASE_URL="mysql://prisma:123456@127.0.0.1:13306/thezoocoffee"
```

Lưu ý:

- khi backend chạy trong Docker, `docker-compose.yml` sẽ tự override `DATABASE_URL` sang host nội bộ container là `mysql:3306`
- nên bạn vẫn có thể giữ `.env` local theo `127.0.0.1:13306`

### 3. Chạy backend + database bằng Docker

```bash
cd server
docker compose up --build
```

Compose hiện sẽ chạy:

- MySQL: `localhost:13306`
- Redis: `localhost:16379`
- Backend API: `localhost:5000`

Backend container hiện sẽ tự:

- đợi database khởi động
- seed dữ liệu
- start server

### 4. Chạy client ngoài máy

```bash
cd client
npm install
npm run dev
```

Mở:

- `http://localhost:3000`

### 5. Chạy admin ngoài máy

```bash
cd admin
npm install
npm run dev
```

Mở:

- `http://localhost:3001`

## URL Mặc Định

- Client: `http://localhost:3000`
- Admin: `http://localhost:3001`
- Backend: `http://localhost:5000`
- MySQL: `localhost:13306`
- Redis: `localhost:16379`

## Kiểm Tra Nhanh

Sau khi chạy xong, kiểm tra:

- `http://localhost:3000`
- `http://localhost:3001`
- `http://localhost:5000/api/products`

## Kiến Trúc API

Backend hiện chia route theo 3 nhóm:

- `public/shared`
  - ví dụ: `/api/products`, `/api/categories`, callback payment
- `user`
  - ví dụ: `/api/user/cart`, `/api/user/orders`, `/api/user/payments`
- `admin`
  - ví dụ: `/api/admin/products`, `/api/admin/orders`, `/api/admin/users`

## Dừng Hệ Thống

Dừng `client` hoặc `admin`:

- nhấn `Ctrl + C` ở từng terminal

Dừng backend + database Docker:

```bash
cd server
docker compose down
```

Nếu muốn xóa luôn volume database local:

```bash
cd server
docker compose down -v
```

## Một Số Lệnh Hữu Ích

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

Seed lại dữ liệu:

```bash
cd server
npm run seed
```
