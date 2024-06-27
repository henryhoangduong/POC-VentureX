import styled from 'styled-components'
import { FC, useState } from 'react'
import { BarChart } from '../../components/Chart/BarChart'
import { PlusIcon } from '../../assets/icon/PlusIcon'
import ReusableModal from '../../components/Modal'
import { LoanRequest } from '../../components/LoanRequest'
const data = [
  { month: 'January', value: 40 },
  { month: 'February', value: 35 },
  { month: 'March', value: 50 },
  { month: 'April', value: 60 },
  { month: 'May', value: 45 },
  { month: 'June', value: 70 },
  { month: 'July', value: 55 },
  { month: 'August', value: 65 },
  { month: 'September', value: 75 },
  { month: 'October', value: 80 },
  { month: 'November', value: 50 },
  { month: 'December', value: 90 },
]
export const Balance: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <Container1>
        <CurrentBalance>
          <p className="currentbalance">CURRENT BALANCE: </p>
          <p className="balance">$110,000</p>
        </CurrentBalance>
        <IconWrapper>
          <Icon onClick={toggleModal}>
            <PlusIcon size={1} color={'white'} />
          </Icon>
        </IconWrapper>
        <ReusableModal isOpen={isOpen} toggleModal={toggleModal}>
          <LoanRequest />
        </ReusableModal>
      </Container1>

      <BarChart data={data} width={500} height={300} color={'#1D69FF'} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
`
const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const CurrentBalance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
  left: 0;
  position: relative;
  width: max-content;
  margin: 10px;
  & :first-child {
    font-size: 8px;
  }
  & :nth-child(2) {
    font-size: 35px;
  }
`
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Icon = styled.div`
  border-radius: 15px;
  background-color: #1d69ff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
