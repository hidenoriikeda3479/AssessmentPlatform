import Header from '../components/Header'
import Footer from '../components/Footer'

// 全ページ共通のレイアウトコンポーネント
export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    // 縦にヘッダー・メイン・フッターを並べ、画面高さに応じてメイン領域が伸縮
    <div className="d-flex flex-column min-vh-100">
      <Header /> {/* ヘッダー表示 */}
      <main className="container my-5 flex-grow-1">{children}</main> {/* メインコンテンツ領域 */}
      <Footer /> {/* フッター表示 */}
    </div>
  )
}
