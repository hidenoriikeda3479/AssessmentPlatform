import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setCategory } from '../features/quiz/quizSlice'
import categories from '../data/categories.json'

interface Category {
  id: string
  label: string
  description: string
}

export default function HomePage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [categoryList, setCategoryList] = useState<Category[]>([])

  useEffect(() => {
    // JSONをステートに格納
    setCategoryList(categories)
  }, [])

  const startQuiz = (category: string) => {
    dispatch(setCategory(category))
    navigate('/quiz')
  }

  return (
    <div>
      <h1>診断・評価プラットフォーム</h1>
      <p>カテゴリを選択してください</p>

      {/* カテゴリ一覧を表示 */}
      {categoryList.map((cat) => (
        <div key={cat.id} style={{ marginBottom: '1rem' }}>
          <h3>{cat.label}</h3>
          <p>{cat.description}</p>
          <button onClick={() => startQuiz(cat.id)}>このカテゴリで診断</button>
        </div>
      ))}
    </div>
  )
}
