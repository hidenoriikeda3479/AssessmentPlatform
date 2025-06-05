// エントリーポイント。Reduxとルーティングをバインド
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)