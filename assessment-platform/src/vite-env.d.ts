/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages のリポジトリ名と一致させる
export default defineConfig({
  base: '/quiz-app/',  // ← ここにリポジトリ名（末尾スラッシュ付き）
  plugins: [react()],
})
