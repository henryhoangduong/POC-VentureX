import { FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { styled } from 'styled-components'
import { approveLoan } from '../../redux/LoanReducer'

export const Admin: FC = () => {
  const loanList = useSelector((state: RootState) => state.loan.loanLists)
  const dispatch = useDispatch()
  const handleClick = (id: string) => {
    dispatch(approveLoan({ id: id, isApprove: true }))
  }
  return (
    <LoanListWrapper>
      {loanList.length > 0 ? (
        loanList.map((loan) => (
          <LoanItem key={loan.id}>
            <div>Loan Size: {loan.loanSize}</div>
            <div>Interest Rate: {loan.interestRate}%</div>
            <div>Collateral Value: {loan.collateralValue}</div>
            {!loan.isApprove && (
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
`

const LoanItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`
