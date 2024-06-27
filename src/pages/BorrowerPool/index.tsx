import type { FC } from 'react'
import styled from 'styled-components'
export const BorrowerPool: FC = () => {
  return (
    <Container>
      <Header>Borrower Pool</Header>
      <Amount>0$</Amount>
      <Button disabled={true}>Extract to borrower wallet</Button>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
`
const Header = styled.p`
  font-weight: bold;
  font-size: 10px;
`

const Amount = styled.div`
  font-weight: bold;
  font-size: 50px;
`
const Button = styled.button`
  margin-top: 20px;
  font-size: 10px;
  width: 30%;
  color: white;
  background-color: #1d69ff;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    border: none;
  }
`
