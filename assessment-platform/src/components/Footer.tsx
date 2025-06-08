// アプリ全体で共通のフッターコンポーネント
export default function Footer() {
  return (
    // ダークテーマの固定フッター
    <footer className="bg-dark text-white mt-auto py-3">
      <div className="container text-center small">
        &copy; 2025 InsightHub. All rights reserved.
      </div>
    </footer>
  )
}
