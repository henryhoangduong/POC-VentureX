import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setAmount } from '../../../redux/SystemPoolReducer'
import { SystemPool } from '../../../components/SystemPool'
import styled from 'styled-components'
import { toast } from 'react-toastify'
export const Lender1: FC = () => {
  const notify = () => toast('added to system pool')
  const dispatch = useDispatch()
  const systemPool = useSelector((state: RootState) => state.systemPool)
  const [amount, setAmountState] = useState<number>(0)
  const [selectedPoolId, setSelectedPoolId] = useState<string>('')

  const handleAddMoney = (id: string, amount: number) => {
    dispatch(setAmount({ id, amount }))
    setAmountState(0)
    notify()
  }

  return (
    <Container>
      <SystemPoolContainer key={systemPool.id}>
        <SystemPool id={systemPool.id} amount={systemPool.amount} />
        <InputContainer>
          <Label htmlFor={`money-${systemPool.id}`}>Add money</Label>
          <Input
            id={`money-${systemPool.id}`}
            name="money"
            type="text"
            value={selectedPoolId === systemPool.id ? amount : ''}
            onChange={(e) => {
              setAmountState(
                Number(e.target.value) ? Number(e.target.value) : 0,
              )
              setSelectedPoolId(systemPool.id)
            }}
          />
          <Button
            onClick={() => handleAddMoney(systemPool.id, amount)}
            disabled={selectedPoolId !== systemPool.id || amount <= 0}
          >
            Add
          </Button>
        </InputContainer>
      </SystemPoolContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
`

const SystemPoolContainer = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`

const Label = styled.label`
  font-size: 14px;
  color: #555;
`

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`
