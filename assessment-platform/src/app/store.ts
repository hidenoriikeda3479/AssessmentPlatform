// Reduxストアの設定ファイル
import { configureStore } from '@reduxjs/toolkit'
import quizReducer from '../features/quiz/quizSlice'

// ストアを生成
export const store = configureStore({
  reducer: {
    quiz: quizReducer // クイズ用の状態管理を登録
  }
})

// 型エイリアス（型補完・型安全用）
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
