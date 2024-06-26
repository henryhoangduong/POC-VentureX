import type { FC } from 'react'
import styled from 'styled-components'

interface Props {
  id: string
  amount: number
}

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

export const SystemPool: FC<Props> = ({ id, amount }) => {
  return (
    <Container>
      <IdText>ID: {id}</IdText>
      <AmountText>Amount: ${amount}</AmountText>
    </Container>
  )
}
