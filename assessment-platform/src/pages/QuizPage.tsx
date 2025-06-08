import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import { answer } from '../features/quiz/quizSlice'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import allQuestions from '../data/questions.json'
import categories from '../data/categories.json'
import '../styles/pages/QuizPage.css'

// 質問データの型
interface Question {
  id: number
  category: string
  question: string
  options: string[]
  correctAnswer: number
}

// カテゴリデータの型
interface Category {
  id: string
  label: string
  description: string
  questionCount: number
}

export default function QuizPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const index = useSelector((state: RootState) => state.quiz.currentIndex)
  const categoryId = useSelector((state: RootState) => state.quiz.category)

  const [quiz, setQuiz] = useState<Question[]>([])
  const [categoryLabel, setCategoryLabel] = useState<string>('')

  // カテゴリ未選択ならホームへ戻す。選択済みなら問題を取得・整形
  useEffect(() => {
    if (!categoryId) {
      navigate('/')
      return
    }

    const catData: Category | undefined = categories.find(c => c.id === categoryId)
    const limit = catData?.questionCount ?? 10

    if (catData) {
      setCategoryLabel(catData.label)
    }

    // カテゴリに一致する問題をランダムに抽出
    const filtered = allQuestions.filter(q => q.category === categoryId)
    const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, limit)
    setQuiz(shuffled)
  }, [categoryId, navigate])

  // 問題未読み込み時の表示
  if (quiz.length === 0) return <p className="text-center mt-5">読み込み中...</p>

  // 全問回答済みなら結果ページへ遷移
  if (index >= quiz.length) {
    navigate('/result')
    return null
  }

  return (
    <div className="quiz-container container py-5">
      {/* カテゴリ名の表示 */}
      <div className="mb-2 text-start">
        <span className="category-label">{categoryLabel}</span>
      </div>

      {/* 現在の問題番号表示 */}
      <div className="mb-3 text-start">
        <span className="question-count">問題 {index + 1} / {quiz.length}</span>
      </div>

      {/* 指示文表示 */}
      <div className="mb-4 text-start">
        <span className="lead-instruction">次の文章を読んで問いに答えなさい。</span>
      </div>
      
      <div className="row d-flex align-items-stretch">
        {/* 問題文表示エリア */}
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="question-box border rounded shadow-sm bg-white w-100 p-4 d-flex flex-column justify-content-start">
            <p className="question-text m-0">{quiz[index].question}</p>
          </div>
        </div>

        {/* 選択肢表示エリア */}
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="options-box bg-light p-4 rounded shadow-sm w-100">
            {quiz[index].options.map((option, i) => (
              
              // 回答選択時に回答を保存
              <div key={i} className="option-item p-3 mb-3 bg-white rounded border" onClick={() => dispatch(answer(i))} >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
