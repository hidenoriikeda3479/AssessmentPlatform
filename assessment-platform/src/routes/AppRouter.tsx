import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import QuizPage from '../pages/QuizPage'
import ResultPage from '../pages/ResultPage'
import DefaultLayout from '../layout/DefaultLayout'

// 全ページに共通レイアウトを適用する関数
const withLayout = (component: React.ReactElement) => (
  <DefaultLayout>{component}</DefaultLayout>
)

export default function AppRouter() {
  return (
    // ルーティングのルートを /AssessmentPlatform に設定
    <BrowserRouter basename="/AssessmentPlatform">
      <Routes>
        {/* ホームページルート */}
        <Route path="/" element={withLayout(<HomePage />)} />
        {/* クイズページルート */}
        <Route path="/quiz" element={withLayout(<QuizPage />)} />
        {/* 結果ページルート */}
        <Route path="/result" element={withLayout(<ResultPage />)} />
      </Routes>
    </BrowserRouter>
  )
}
