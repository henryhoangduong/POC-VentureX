import { styled } from 'styled-components'
import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Loan, addLoan } from '../../redux/LoanReducer'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'

export const LoanRequest: FC = () => {
  const notify = () => toast('Loan created')
  const initialLoanState: Loan = {
    id: '',
    loanSize: 0,
    interestRate: 0,
    collateralValue: 0,
    isApproveAdmin: false,
    isApproveBorrower: false,
  }
  const [ships, setShips] = useState<number>(0)
  const [realEstate, setRealEstate] = useState<number>(0)
  const [collateral, setCollateral] = useState<number>(0)
  const [cargo, setCargo] = useState<number>(0)

  useEffect(() => {
    setCollateral(ships + realEstate + cargo)
  }, [ships, cargo, realEstate])
  const [loan, setLoan] = useState<Loan>(initialLoanState)
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const newLoan = { ...loan, id: uuidv4() }
    dispatch(addLoan(newLoan))
    setLoan(initialLoanState)
    notify()
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
                [e.target.name]: parseFloat(e.target.value)
                  ? parseFloat(e.target.value)
                  : 0,
              }))
            }}
            type="text"
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
                [e.target.name]: parseFloat(e.target.value)
                  ? parseFloat(e.target.value)
                  : 0,
              }))
            }}
            type="text"
            name="interestRate"
            value={loan.interestRate}
          />
        </div>
        <div className="form-group">
          <div className="collateral">
            <h4>Collateral value: </h4>
            <span>{collateral}</span>
          </div>
          <div className="subform-group">
            <label htmlFor="Ships">Ship</label>
            <input
              onChange={(e) => {
                setShips(
                  parseFloat(e.target.value) ? parseFloat(e.target.value) : 0,
                )
              }}
              type="text"
              value={ships ? ships : 0}
              name="Ships"
            />
          </div>
          <div className="subform-group">
            <label htmlFor="Cargo">Cargo</label>
            <input
              onChange={(e) => {
                setCargo(
                  parseFloat(e.target.value) ? parseFloat(e.target.value) : 0,
                )
              }}
              type="text"
              value={cargo ? cargo : 0}
              name="Cargo"
            />
          </div>
          <div className="subform-group">
            <label htmlFor="Real Estate">Real Estate</label>
            <input
              onChange={(e) => {
                setRealEstate(
                  parseFloat(e.target.value) ? parseFloat(e.target.value) : 0,
                )
              }}
              type="text"
              value={realEstate ? realEstate : 0}
              name="Real Estate"
            />
          </div>
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
  left: 50%;
  position: relative;
  transform: translateX(-50%);

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
  & .subform-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    & label {
      margin-right: 5px;
      margin-bottom: 5px;
      font-size: 12px;
    }
    & input {
      margin-bottom: 5px;
      width: 50px;
    }
  }
  & .collateral {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
  }
`
