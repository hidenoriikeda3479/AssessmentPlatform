import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite の設定ファイル
export default defineConfig({
  // デプロイ先のサブディレクトリ設定（例: GitHub Pages 用）
  base: '/AssessmentPlatform/',
  
  // React プラグインを適用
  plugins: [react()]
})
