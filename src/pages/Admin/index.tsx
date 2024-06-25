import { FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { styled } from 'styled-components'
import { approveLoanAdmin } from '../../redux/LoanReducer'
import { toast } from 'react-toastify'

export const Admin: FC = () => {
  const notify = () => toast('Loan approved by admin')
  const loanList = useSelector((state: RootState) => state.loan.loanLists)
  const dispatch = useDispatch()
  const handleClick = (id: string) => {
    dispatch(approveLoanAdmin({ id: id, isApproveAdmin: true }))
    notify()
  }
  return (
    <LoanListWrapper>
      {loanList.length > 0 ? (
        loanList.map((loan) => (
          <LoanItem key={loan.id}>
            <div>Loan Size: {loan.loanSize}</div>
            <div>Interest Rate: {loan.interestRate}%</div>
            <div>Collateral Value: {loan.collateralValue}</div>
            {loan.isApproveAdmin ? (
              <p>Approved</p>
            ) : (
              <button
                onClick={() => {
                  handleClick(loan.id)
                }}
              >
                Approve
              </button>
            )}
          </LoanItem>
        ))
      ) : (
        <div>No loans available</div>
      )}
    </LoanListWrapper>
  )
}

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
