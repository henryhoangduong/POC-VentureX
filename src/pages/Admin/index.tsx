import { FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { styled } from 'styled-components'
import { approveLoanAdmin } from '../../redux/LoanReducer'
import { toast } from 'react-toastify'
import { Loan } from '../../components/Loan'

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
            <Loan
              id={loan.id}
              loanSize={loan.loanSize}
              collateralValue={loan.collateralValue}
              interestRate={loan.interestRate}
            />
            {loan.isApproveAdmin ? (
              <p>Approved</p>
            ) : (
              <Button
                onClick={() => {
                  handleClick(loan.id)
                }}
              >
                Approve
              </Button>
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
const Button = styled.div`
  color: white;
  background-color: #1d69ff;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
`
