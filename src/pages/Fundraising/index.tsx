import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { styled } from 'styled-components'

export const Fundraising: FC = () => {
  const loanList = useSelector((state: RootState) => state.loan.loanLists)
  console.log(loanList)
  return (
    <LoanListWrapper>
      {loanList.length > 0 ? (
        loanList.map((loan) =>
          loan.isApproveAdmin && loan.isApproveBorrower ? (
            <LoanItem key={loan.id}>
              <div>Loan Size: {loan.loanSize}</div>
              <div>Interest Rate: {loan.interestRate}%</div>
              <div>Collateral Value: {loan.collateralValue}</div>
            </LoanItem>
          ) : null,
        )
      ) : (
        <div>No loans available</div>
      )}
    </LoanListWrapper>
  )
}

const LoanListWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`

const LoanItem = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background: white;
  border-radius: 10px;
  width: 20%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
