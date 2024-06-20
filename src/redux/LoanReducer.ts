// Part 1
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

// Part 2
export interface Loan {
  id: string
  loanSize: number
  interestRate: number
  collateralValue: number
  isApprove: boolean
}
export interface LoanInitialState {
  loanLists: Loan[]
}
const initialState: LoanInitialState = {
  loanLists: [
    {
      id: uuidv4(),
      loanSize: 10,
      interestRate: 10,
      collateralValue: 10,
      isApprove: true,
    },
  ],
}
// Part 3
export const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    addLoan: (state, action: PayloadAction<Loan>) => {
      state.loanLists.push({ ...action.payload, isApprove: false })
    },
    approveLoan: (
      state,
      action: PayloadAction<{ id: string; isApprove: boolean }>,
    ) => {
      state.loanLists.map((item) => {
        if (item.id === action.payload.id) {
          item.isApprove = action.payload.isApprove
        }
      })
    },
  },
})

// Part 4
export const { addLoan, approveLoan } = loanSlice.actions
export default loanSlice.reducer
