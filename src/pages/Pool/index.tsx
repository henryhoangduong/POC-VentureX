import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { styled } from 'styled-components'

export const Pool: FC = () => {
  const loanList = useSelector((state: RootState) => state.loan.loanLists)
  return (
    <LoanListWrapper>
      {loanList.length > 0 ? (
        loanList.map(
          (loan) =>
            loan.isApprove && (
              <LoanItem key={loan.id}>
                <div>Loan Size: {loan.loanSize}</div>
                <div>Interest Rate: {loan.interestRate}%</div>
                <div>Collateral Value: {loan.collateralValue}</div>
              </LoanItem>
            ),
        )
      ) : (
        <div>No loans available</div>
      )}
    </LoanListWrapper>
  )
}

const LoanListWrapper = styled.div`
  margin-top: 20px;
`

const LoanItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`
