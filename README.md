# The Zoo Coffee

## Nhanh

```bash
git clone <repo-url>
cd TheZooCoffee
cd server
docker compose up --build
```

Sau khi xong, mở:

- Khách hàng: http://localhost:3000
- Admin: http://localhost:3001
- Backend API: http://localhost:5000

## Cần có

- Node.js 20+
- Docker Desktop
- Git

## Cách chạy nếu không dùng Docker full

1. `cd server`
2. `copy .env.example .env` và sửa `DATABASE_URL`
3. `npm install`
4. `npm run seed`
5. `npm run dev`

Frontend:

```bash
cd client
npm install
npm run dev
```

Admin:

```bash
cd admin
npm install
npm run dev
```

## Ports

- Backend: `5000`
- Client: `3000`
- Admin: `3001`
- MySQL: `13306`
- Redis: `16379`

## Lưu ý

- Docker Compose hiện gồm `mysql`, `redis`, `server`
- `server` sẽ chạy `npm run seed && npm start`
- Backend mặc định dùng `http://localhost:5000/api`
- Admin cần tài khoản có `role=admin`

## Dừng

```bash
docker compose down
```

- Kiểm tra `client/.env.local` nếu đổi API URL.
- Kiểm tra `docker ps` để xem MySQL/Redis có hoạt động.
- Nếu vẫn lỗi schema, chạy `npm run prisma -- generate` trong `server`.

Neu login khong duoc, kiem tra theo thu tu:

1. Docker da chay chua:

```bash
docker ps
```

2. Backend da chay chua:

```text
http://localhost:5000/api/user/login
```

3. Frontend da chay chua:

```text
http://localhost:3000
```

4. Admin frontend neu can:

```text
http://localhost:3001
```

5. File `server/.env` da dung `PORT=5000` va `CLIENT_URL=http://localhost:3000` chua

6. Neu loi Google login, kiem tra lai redirect URI trong Google Cloud Console

## 13. Dung he thong

Dung frontend/backend bang `Ctrl + C` trong tung terminal.
Dung MySQL + Redis container:

```bash
cd server
docker compose down
```

Neu muon xoa ca volume database local:

```bash
docker compose down -v
```
