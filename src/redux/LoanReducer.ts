// Part 1
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

// Part 2
export interface Loan {
  id: string
  loanSize: number
  interestRate: number
  collateralValue: number
  isApproveAdmin: boolean
  isApproveBorrower: boolean
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
      isApproveAdmin: false,
      isApproveBorrower: false,
    },
  ],
}
// Part 3
export const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    addLoan: (state, action: PayloadAction<Loan>) => {
      state.loanLists.push({
        ...action.payload,
        isApproveAdmin: false,
        isApproveBorrower: false,
      })
    },
    approveLoanAdmin: (
      state,
      action: PayloadAction<{ id: string; isApproveAdmin: boolean }>,
    ) => {
      state.loanLists.map((item) => {
        if (item.id === action.payload.id) {
          item.isApproveAdmin = action.payload.isApproveAdmin
        }
      })
    },
    approveLoanBorrower: (
      state,
      action: PayloadAction<{ id: string; isApproveBorrower: boolean }>,
    ) => {
      state.loanLists.map((item) => {
        if (item.id === action.payload.id) {
          item.isApproveBorrower = action.payload.isApproveBorrower
        }
      })
    },
  },
})

// Part 4
export const { addLoan, approveLoanAdmin, approveLoanBorrower } =
  loanSlice.actions
export default loanSlice.reducer
