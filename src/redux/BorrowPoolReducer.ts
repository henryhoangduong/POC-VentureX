import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export interface BorrowPool {
  id: string
  amount: number
}

const initialState: BorrowPool = {
  id: uuidv4(),
  amount: 0,
}

const borowPoolSlice = createSlice({
  name: 'borrowPool',
  initialState,
  reducers: {
    setAmount: (
      state,
      action: PayloadAction<{ id: string; amount: number }>,
    ) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, amount } = action.payload
      state.amount = amount
    },
  },
})

export const { setAmount } = borowPoolSlice.actions
export default borowPoolSlice.reducer
