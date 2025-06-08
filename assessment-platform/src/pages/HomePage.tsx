import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setCategory, reset } from '../features/quiz/quizSlice'
import categories from '../data/categories.json'
import '../styles/pages/HomePage.css'

// カテゴリ情報の型定義
interface Category {
  id: string
  label: string
  description: string
  questionCount: number
}

export default function HomePage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [categoryList, setCategoryList] = useState<Category[]>([])

  // 初期化処理：状態リセットとカテゴリデータ設定
  useEffect(() => {
    dispatch(reset())
    setCategoryList(categories)
  }, [dispatch])

  // 冗長なカテゴリ設定（上と重複）※片方でOK
  useEffect(() => {
    setCategoryList(categories)
  }, [])

  // カテゴリ選択時に状態設定＋画面遷移
  const startQuiz = (category: string) => {
    dispatch(setCategory(category))
    navigate('/quiz')
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3 elegant-title">診断・評価プラットフォーム</h1>
      <p className="text-center text-muted mb-5">カテゴリを選んで、あなたの知識や性格をチェックしてみよう。</p>

      {/* カテゴリ一覧カードを表示 */}
      <div className="row justify-content-center g-4">
        {categoryList.map((cat) => (
          <div key={cat.id} className="col-md-4">
            <div
              className="card category-card h-100"
              onClick={() => startQuiz(cat.id)}
            >
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{cat.label}</h5>
                <p className="card-text">{cat.description}</p>
                <p className="question-count">全{cat.questionCount}問</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
