# 1. Tạo project mới
npm create vite@latest quiz-app -- --template react
cd quiz-app

# 2. Cài dependency
npm install
npm install @hello-pangea/dnd

# (nếu dùng tailwind)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
## or
install taiwind by: https://tailwindcss.com/docs/installation/using-vite

# 3. Chạy dev server
npm run dev

