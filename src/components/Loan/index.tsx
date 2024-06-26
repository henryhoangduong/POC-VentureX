import { FC } from 'react'
import { styled } from 'styled-components'

interface LoanProps {
  loanSize: number
  interestRate: number
  collateralValue: number
  id: string
}

export const Loan: FC<LoanProps> = ({
  loanSize,
  interestRate,
  collateralValue,
  id,
}) => {
  return (
    <LoanItem key={id}>
      <div>Loan Size: {loanSize}</div>
      <div>Interest Rate: {interestRate}%</div>
      <div>Collateral Value: {collateralValue}</div>
    </LoanItem>
  )
}

const LoanItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`
