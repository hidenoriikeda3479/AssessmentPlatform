// エントリーポイント。Reduxとルーティングをアプリに統合
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux'
import { store } from './app/store'

// React アプリをルート要素にマウントし、Redux ストアを提供
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}> {/* グローバル状態管理を提供 */}
    <AppRouter /> {/* ルーティング構成を描画 */}
  </Provider>
)
