import { LoanRequest } from '../../components/LoanRequest'
import { FC } from 'react'
import styled from 'styled-components'

export const Home: FC = () => {
  return (
    <HomeWrapper>
      <LoanRequest />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  position: relative;
  height: 100%;
`
