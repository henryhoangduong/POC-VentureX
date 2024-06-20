import { FC } from 'react'
import { styled } from 'styled-components'
export const Welcome: FC = () => {
  return (
    <Wrapper>
      <span>Welcome back</span>
      <span>Henry</span>
      <p>last updated 05 Jan</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-top: 30px;
  & :nth-child(1) {
    font-size: 14px;
  }
  & :nth-child(2) {
    font-weight: bold;
    font-size: 20px;
  }
  & :nth-child(3) {
    font-size: 10px;
    color: #969da9;
  }
`
