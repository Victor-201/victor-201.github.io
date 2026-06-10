# Assets Guide — Đường dẫn file ảnh/media

## 1. Ảnh & media đang dùng (có file thật)

| File | Path | Dùng ở đâu |
|------|------|------------|
| Profile photo | `/assets/me.jpg` | `src/app/pages/AboutPage.tsx:251` |
| Nyan Cat GIF | `/assets/nyan-cat.gif` | `src/components/nyan-cat.tsx:95` |
| Favicon | `/favicon.ico` | `index.html:6` |
| OG Image | `/assets/seo/og-image.png` | `src/data/config.ts:34` |
| Spline 3D Keyboard | `/assets/skills_keyboard.spline` | `src/components/animated-background.tsx:460` |
| Spline 3D 404 | `/assets/404.spline` | `src/app/pages/NotFoundPage.tsx:11` |
| Sound press | `/assets/keycap-sounds/press.mp3` | `src/components/realtime/hooks/use-sounds.ts:17` |
| Sound release | `/assets/keycap-sounds/release.mp3` | `src/components/realtime/hooks/use-sounds.ts:22` |

## 2. Nav-link previews

| File | Path | Dùng ở đâu |
|------|------|------------|
| Home | `/assets/nav-link-previews/landing.png` | `src/components/header/config.ts:7` |
| Skills | `/assets/nav-link-previews/skills.png` | `src/components/header/config.ts:17` |
| Projects | `/assets/nav-link-previews/projects.png` | `src/components/header/config.ts:22` |
| Contact | `/assets/nav-link-previews/contact.png` | `src/components/header/config.ts:37` |

**Thiếu (cần tạo):**
- `/assets/nav-link-previews/about.png` — config.ts:12
- `/assets/nav-link-previews/blog.png` — config.ts:32

## 3. Project screenshots — `ProjectsPage.tsx` (Splide carousel)

Đường dẫn gốc: `/assets/projects-screenshots/`

### Có file thật
| Project | File |
|---------|------|
| Ghost Chat | `ghostchat/1.png` → `4.png` |
| JRA | `jra/1.png` |

### Cần sửa tên file (code trỏ `1.png`… nhưng file thật có tên khác)
| Project | Code trỏ | File thật trên đĩa |
|---------|----------|-------------------|
| Coding Ducks | `codingducks/1.png`…`5.png` | `codingducks/landing.png`, `users.png`, `problems.png`, … |
| Coupon Luxury | `couponluxury/1.png`…`5.png` | `couponluxury/landing.png`, `stores.png`, `store.png`, … |

## 4. Project screenshots — `projects.tsx` (data layer)

Các project dùng `src` + `screenshots[]`, base path `/assets/projects-screenshots/`.

### Có file thật
| Project ID | `src` |
|------------|-------|
| `the-booking-desk` | Chưa khai báo trong code (có thư mục trên đĩa) |
| `codingducks` | Chưa khai báo trong code (có thư mục trên đĩa) |
| `ghostchat` | Chưa khai báo trong code (có thư mục trên đĩa) |
| `couponluxury` | Chưa khai báo trong code (có thư mục trên đĩa) |

### Thiếu thư mục hoàn toàn (cần tạo + add ảnh)
| Project ID | `src` trong code |
|------------|------------------|
| `ev-charging` | `/assets/projects-screenshots/ev-charging/landing.png` |
| `studyhub` | `/assets/projects-screenshots/studyhub/landing.png` |
| `customer-debt` | `/assets/projects-screenshots/customer-debt/landing.png` |
| `social-network` | `/assets/projects-screenshots/social-network/landing.png` |
| `web-video-translator` | `/assets/projects-screenshots/web-video-translator/landing.png` |
| `drowsiness-alert` | `/assets/projects-screenshots/drowsiness-alert/landing.png` |

## 5. File không dùng đến (có trên đĩa nhưng code không trỏ)

| File | Lý do |
|------|-------|
| `public/vite.svg` | Mặc định Vite, không dùng |
| `public/assets/untitled3.spline` | Spline scene không dùng |
| `public/assets/temp/skills_keyboard.spline` | Temp copy, không dùng |
| `public/assets/projects-screenshots/logo-dark.svg` | Logo, không dùng |
| `public/assets/projects-screenshots/logo-dark.webp` | Logo, không dùng |
| `public/assets/projects-screenshots/portfolio/*` (5 PNG) | Screenshots portfolio, không dùng |
| `public/assets/projects-screenshots/the-booking-desk/*` (7 files) | Screenshots booking desk, không dùng |
| `src/assets/react.svg` | Mặc định, không dùng |

## 6. External URL

| URL | Dùng ở đâu |
|-----|------------|
| `https://cdn.simpleicons.org/{icon}/{color}` | `src/data/constants.ts:242` — skill icons |
