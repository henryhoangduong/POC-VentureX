import { FC } from 'react'
import { styled } from 'styled-components'
import { Input } from './Input'
import bell from '../../assets/icon/bell-svgrepo-com.svg'
import message from '../../assets/icon/message-circle-dots-svgrepo-com.svg'
import user from '../../assets/icon/user-circle-svgrepo-com.svg'

export const Header: FC = () => {
  return (
    <Wrapper>
      <Input />
      <SubWrapper>
        <img src={bell} alt="" />
        <img src={message} alt="" />
        <Info>
          <img src={user} alt="" />
          <div>
            <span>Henry</span>
            <span>henryhoangduong@gmail.com</span>
          </div>
        </Info>
      </SubWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  background-color: white;
  height: 7%;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
  }
  & img {
    width: 25px;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & :nth-child(1) {
    font-size: 16px;
    font-weight: bold;
  }
  & :nth-child(2) {
    font-size: 10px;
    font-weight: medium;
  }
`

const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  justify-content: space-between;
  & img {
    width: 25px;
    cursor: pointer;
  }
  & > * {
    margin-left: 5px;
    margin-right: 5px;
  }
`
