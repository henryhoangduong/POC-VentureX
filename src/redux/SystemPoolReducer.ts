import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export interface SystemPool {
  id: string
  amount: number
}

export interface SystemPoolList {
  systemPoolList: SystemPool[]
}

// const initialState: SystemPoolList = {
//   systemPoolList: [
//     {
//       id: uuidv4(),
//       amount: 0,
//     },
//   ],
// }

const initialState: SystemPool = {
  id: uuidv4(),
  amount: 0,
}

const systemPoolSlice = createSlice({
  name: 'systemPool',
  initialState,
  reducers: {
    setAmount: (
      state,
      action: PayloadAction<{ id: string; amount: number }>,
    ) => {
      const { id, amount } = action.payload
      state.amount = amount
    },
  },
})

export const { setAmount } = systemPoolSlice.actions
export default systemPoolSlice.reducer
