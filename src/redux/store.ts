import { configureStore } from '@reduxjs/toolkit'
import LoanReducer from './LoanReducer'
import SystemPoolReducer from './SystemPoolReducer'
export const store = configureStore({
  reducer: {
    loan: LoanReducer,
    systemPool: SystemPoolReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
