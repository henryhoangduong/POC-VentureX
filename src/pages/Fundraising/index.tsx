import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { styled } from 'styled-components'
import { Loan } from '../../components/Loan'

export const Fundraising: FC = () => {
  const loanList = useSelector((state: RootState) => state.loan.loanLists)
  return (
    <LoanListWrapper>
      {loanList.map((loan) =>
        loan.isApproveAdmin && loan.isApproveBorrower ? (
          <LoanItem key={loan.id}>
            <Loan
              key={loan.id}
              id={loan.id}
              loanSize={loan.loanSize}
              collateralValue={loan.collateralValue}
              interestRate={loan.interestRate}
            />
          </LoanItem>
        ) : null,
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
