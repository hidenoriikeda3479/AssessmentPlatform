// 結果画面。スコアと再挑戦ボタンを表示
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../app/store'
import { reset } from '../features/quiz/quizSlice'
import questions from '../data/questions.json'
import { useNavigate } from 'react-router-dom'

export default function ResultPage() {
    const answers = useSelector((state: RootState) => state.quiz.answers)
    const category = useSelector((state: RootState) => state.quiz.category)
    const dispatch = useDispatch()
    const navigate = useNavigate()

  // 正解数をカウント
  const filtered = questions.filter(q => q.category === category).slice(0, answers.length)
  const score = answers.reduce((acc, ans, idx) => {
    return filtered[idx]?.correctAnswer === ans ? acc + 1 : acc
  }, 0)

  return (
    <div>
      <h2>診断結果</h2>
      <p>{score} / {filtered.length} 正解</p>
      <button onClick={() => {
        dispatch(reset())
        navigate('/')
      }}>トップに戻る</button>
    </div>
  )
}
