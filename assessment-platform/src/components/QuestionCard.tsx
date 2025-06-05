// 単一のクイズ問題を表示するコンポーネント
interface Props {
    question: string                   // 質問文
    options: string[]                  // 選択肢
    onSelect: (index: number) => void  // 回答選択時の処理
  }
  
  export default function QuestionCard({ question, options, onSelect }: Props) {
    return (
      <div>
        <p>{question}</p>
        <ul>
          {options.map((opt, idx) => (
            <li key={idx}>
              {/* 回答ボタンを選択肢ごとに表示 */}
              <button onClick={() => onSelect(idx)}>{opt}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  