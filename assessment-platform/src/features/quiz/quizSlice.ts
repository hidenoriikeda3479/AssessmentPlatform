// クイズの状態（現在の問題、回答履歴）を管理
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface QuizState {
  currentIndex: number      // 今表示中の問題番号
  answers: number[]         // 各問題の回答（インデックスで記録）
  category: string | null   // カテゴリ
}

// 初期状態
const initialState: QuizState = {
    currentIndex: 0,
    answers: [],
    category: null
  }

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
      // 回答処理（インデックスで記録し、次の問題へ）
      answer: (state, action: PayloadAction<number>) => {
        state.answers[state.currentIndex] = action.payload
        state.currentIndex++
      },
      // クイズ状態を初期化
      reset: () => initialState,
      setCategory: (state, action: PayloadAction<string>) => {
        state.category = action.payload
      }
    }
  })

export const { answer, reset, setCategory } = quizSlice.actions
export default quizSlice.reducer
