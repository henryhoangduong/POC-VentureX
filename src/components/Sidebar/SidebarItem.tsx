import { FC } from 'react'
import { styled } from 'styled-components'

interface SidebarItemProps {
  icon: string
  name: string
}

export const SidebarItem: FC<SidebarItemProps> = ({ icon, name }) => {
  return (
    <ItemWrapper>
      <img src={icon} alt="" />
      <span>{name}</span>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.li`
  position: relative;
  left: 5%;
  width: max-content;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
  & :hover {
    color: #6f35ff;
    cursor: pointer;
  }
  & img {
    width: 12px;
    margin-right: 20px;
  }
  & img:hover {
    background-color: #6f35ff;
  }
`
