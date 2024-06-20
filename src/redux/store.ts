import { configureStore } from '@reduxjs/toolkit'
import LoanReducer from './LoanReducer'
export const store = configureStore({
  reducer: {
    loan: LoanReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
