// ページ遷移のルーティング設定
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import QuizPage from '../pages/QuizPage'
import ResultPage from '../pages/ResultPage'

export default function AppRouter() {
  return (
    <BrowserRouter basename="/AssessmentPlatform">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  )
}
