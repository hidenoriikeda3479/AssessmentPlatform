import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../app/store'
import { reset } from '../features/quiz/quizSlice'
import questions from '../data/questions.json'
import { useNavigate } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import '../styles/pages/ResultPage.css'

// グラフ描画用の要素を登録
ChartJS.register(ArcElement, Tooltip, Legend)

export default function ResultPage() {
  const answers = useSelector((state: RootState) => state.quiz.answers)
  const category = useSelector((state: RootState) => state.quiz.category)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // 回答数に合わせてカテゴリ内の問題を取得
  const filtered = questions.filter(q => q.category === category).slice(0, answers.length)

  // 正解数を集計
  const score = answers.reduce((acc, ans, idx) => {
    return filtered[idx]?.correctAnswer === ans ? acc + 1 : acc
  }, 0)

  // 正解率（%）を算出
  const percentage = Math.round((score / filtered.length) * 100)

  // ドーナツチャート用データ
  const chartData = {
    labels: ['正解', '不正解'],
    datasets: [
      {
        data: [score, filtered.length - score],
        backgroundColor: ['#1A237E', '#B0BEC5'],
        borderWidth: 1,
      },
    ],
  }

  // 「トップに戻る」クリック時の処理
  const handleBack = () => {
    
    // ステート初期化
    dispatch(reset())

    // ホームへ遷移
    navigate('/')
  }

  return (
    <div className="result-container d-flex flex-column justify-content-center align-items-center text-center">
      {/* タイトル */}
      <h2 className="result-title mb-4">診断結果</h2>

      {/* グラフとスコア表示 */}
      <div className="chart-box mb-4">
        <Doughnut data={chartData} />
        <p className="score-text mt-3">{score} / {filtered.length} 正解（正解率：{percentage}%）</p>
      </div>

      {/* トップへ戻るリンク */}
      <p className="back-link" onClick={handleBack}>← トップに戻る</p>
    </div>
  )
}
