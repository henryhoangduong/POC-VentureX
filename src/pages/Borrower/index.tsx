import { FC } from 'react'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { approveLoanBorrower } from '../../redux/LoanReducer'
import { toast } from 'react-toastify'
import { Loan } from '../../components/Loan'
import { Balance } from './Balance'
export const Borrower: FC = () => {
  const notify = () => toast('Loan approved by borrower and is in fundraising')
  const loanList = useSelector((state: RootState) => state.loan.loanLists)
  const dispatch = useDispatch()
  const handleClick = (id: string) => {
    dispatch(approveLoanBorrower({ id: id, isApproveBorrower: true }))
    notify()
  }
  return (
    <BorrowerWrapper>
      <Balance />
      <LoanListWrapper>
        {loanList.length > 0 ? (
          loanList.map((loan) => (
            <LoanItem key={loan.id}>
              <Loan
                id={loan.id}
                loanSize={loan.loanSize}
                collateralValue={loan.collateralValue}
                interestRate={loan.interestRate}
              />
              {!loan.isApproveBorrower && loan.isApproveAdmin ? (
                <button
                  onClick={() => {
                    handleClick(loan.id)
                  }}
                >
                  Approve
                </button>
              ) : loan.isApproveBorrower && loan.isApproveAdmin ? (
                <p>Fund raising</p>
              ) : (
                <p>Wait for Dao admin</p>
              )}
            </LoanItem>
          ))
        ) : (
          <div>No loans available</div>
        )}
      </LoanListWrapper>
    </BorrowerWrapper>
  )
}
const BorrowerWrapper = styled.div`
  position: relative;
  height: 100%;
`

const LoanListWrapper = styled.div`
  margin-top: 20px;
  display: flex;
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
