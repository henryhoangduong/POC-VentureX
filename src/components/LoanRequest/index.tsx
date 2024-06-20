import { styled } from 'styled-components'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Loan, addLoan } from '../../redux/LoanReducer'
import { v4 as uuidv4 } from 'uuid'

export const LoanRequest: FC = () => {
  const initialLoanState: Loan = {
    id: '',
    loanSize: 0,
    interestRate: 0,
    collateralValue: 0,
    isApprove: false,
  }

  const [loan, setLoan] = useState<Loan>(initialLoanState)
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const newLoan = { ...loan, id: uuidv4() }
    dispatch(addLoan(newLoan))
    setLoan(initialLoanState) // Reset the form after dispatching the action
  }

  return (
    <LoanWrapper>
      <form>
        <div className="form-group">
          <label htmlFor="loanSize">Loan Size</label>
          <input
            onChange={(e) => {
              setLoan((current) => ({
                ...current,
                [e.target.name]: parseFloat(e.target.value),
              }))
            }}
            type="number"
            name="loanSize"
            value={loan.loanSize}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            onChange={(e) => {
              setLoan((current) => ({
                ...current,
                [e.target.name]: parseFloat(e.target.value),
              }))
            }}
            type="number"
            name="interestRate"
            value={loan.interestRate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="collateralValue">Collateral Value</label>
          <input
            onChange={(e) => {
              setLoan((current) => ({
                ...current,
                [e.target.name]: parseFloat(e.target.value),
              }))
            }}
            type="number"
            name="collateralValue"
            value={loan.collateralValue}
          />
        </div>
        <button onClick={(e) => handleClick(e)}>Request Loan</button>
      </form>
    </LoanWrapper>
  )
}

const LoanWrapper = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  & form {
    display: flex;
    flex-direction: column;
  }

  & .form-group {
    margin-bottom: 15px;
  }

  & label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }

  & input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }

  & button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`
