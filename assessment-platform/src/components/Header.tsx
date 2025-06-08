import { Link } from 'react-router-dom';
import logo from '../assets/mm-logo.png';

// アプリ共通のヘッダーコンポーネント
export default function Header() {
  return (
    // ナビゲーションバー（ダークテーマ・シャドウ付き）
    <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* ロゴとタイトルを含むホームリンク */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div className="d-flex align-items-center">
            {/* ロゴ画像表示 */}
            <img src={logo} alt="Logo" className="img-fluid me-2" width="32" height="32" />
          </div>
          <span className="fw-bold">InsightHub</span>
        </Link>
      </div>
    </header>
  );
}
