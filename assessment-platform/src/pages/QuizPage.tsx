import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import { answer } from '../features/quiz/quizSlice'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import allQuestions from '../data/questions.json'
import categories from '../data/categories.json'

interface Question {
    id: number
    category: string
    question: string
    options: string[]
    correctAnswer: number
  }

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

  // シャッフル済みの問題リスト（useState管理）
  const [quiz, setQuiz] = useState<Question[]>([])

  // 初回マウント時にカテゴリごとに問題数を抽出
  useEffect(() => {
    if (!categoryId) {
      navigate('/')
      return
    }

    // カテゴリごとの出題数を取得
    const catData: Category | undefined = categories.find(c => c.id === categoryId)
    const limit = catData?.questionCount ?? 10

    const filtered = allQuestions.filter(q => q.category === categoryId)
    const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, limit)
    setQuiz(shuffled)
  }, [categoryId, navigate])

  // 読み込み中に表示
  if (quiz.length === 0) return <p>読み込み中...</p>

  // 全問終了後は結果ページへ遷移
  if (index >= quiz.length) {
    navigate('/result')
    return null
  }

  return (
    <div>
      <h2>問題 {index + 1}</h2>
      <QuestionCard
        question={quiz[index].question}
        options={quiz[index].options}
        onSelect={(i) => dispatch(answer(i))}
      />
    </div>
  )
}
