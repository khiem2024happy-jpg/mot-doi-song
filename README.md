# Một Đời Sống — Website v1.0

Blog tiểu luận xây dựng bằng Next.js App Router, TypeScript, Tailwind CSS, MDX, GitHub và Vercel.

## Khởi chạy

Yêu cầu Node.js 22+, npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Mở http://localhost:3000.

## Kiểm tra

```bash
npm run lint
npm run typecheck
npm run build
```

## Nội dung

Mỗi bài là `content/posts/<slug>.mdx`, có frontmatter `title`, `description`, `date` (YYYY-MM-DD), `status`, `category`, `tags`, `featured`. Chỉ bài `status: published` mới hiển thị. Tệp mẫu hiện có **chưa phải bài luận hoàn chỉnh**: hãy thay thế hoặc đặt `status: draft` trước khi ra mắt công khai.

Danh mục hợp lệ: `theo-duoi`, `mat-mat`, `noi-tam`, `binh-thuong`, `su-ton-tai`, `nghe-thuat-song`.

## Đưa lên GitHub

1. Tạo repository tên `mot-doi-song` trên GitHub (không thêm README nếu sẽ đẩy toàn bộ dự án bằng Git).
2. Từ thư mục dự án:

```bash
git init
git add .
git commit -m "Initial blog v1"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mot-doi-song.git
git push -u origin main
```

Thay `YOUR_USERNAME` bằng tài khoản của bạn. GitHub có thể yêu cầu đăng nhập bằng trình duyệt hoặc credential manager; không gửi token cho ChatGPT.

## Triển khai Vercel

1. Vào https://vercel.com/new, import repository GitHub.
2. Framework Next.js được nhận diện tự động. Deploy.
3. Trong Project Settings → Environment Variables, thêm `NEXT_PUBLIC_SITE_URL` với URL production thực tế, rồi redeploy.
4. Khi gắn tên miền riêng, cập nhật biến môi trường và redeploy để sitemap/canonical/RSS dùng tên miền đúng.

## Quy trình xuất bản

- Tạo nhánh `article/<slug>` từ `main`.
- Thêm/sửa MDX, tạo Pull Request vào `main`.
- Kiểm tra GitHub Actions và Vercel Preview, đọc và duyệt nội dung.
- Chủ blog merge sau khi chấp thuận; Vercel tự triển khai production.

**Lưu ý:** Không tự merge Pull Request. Tính năng bảo vệ nhánh tùy điều kiện GitHub. Với repository private, kiểm tra khả năng sử dụng branch protection/rulesets trong gói của bạn. Quy trình duyệt của chủ blog vẫn phải được tuân thủ.

## Lưu ý kỹ thuật

- Bản đầu dùng MDX tin cậy trong repository; không nhận MDX tùy ý từ người dùng bên ngoài.
- Bản đầu không có CMS, database, đăng nhập, tìm kiếm hay newsletter.
- Giao diện không tải ảnh từ nguồn bên ngoài, nhằm giảm phụ thuộc và tránh vấn đề bản quyền.
- Sau `npm install`, commit `package-lock.json` để GitHub Actions có thể dùng `npm ci`.
