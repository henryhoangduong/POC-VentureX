import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import styled from 'styled-components'

// Define styled components
const Container = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 16px 0;
  background-color: #f9f9f9;
`

const IdText = styled.p`
  font-size: 14px;
  color: #555;
`

const AmountText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`

export const SystemPool: FC = () => {
  const systemPool = useSelector((state: RootState) => state.systemPool)

  return (
    <>
      <Container key={systemPool.id}>
        <IdText>ID: {systemPool.id}</IdText>
        <AmountText>Amount: ${systemPool.amount}</AmountText>
      </Container>
    </>
  )
}
