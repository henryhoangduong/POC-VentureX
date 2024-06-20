import { FC, ReactNode } from 'react'
import { styled } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

interface SidebarItemProps {
  icon: ReactNode
  name: string
  link: string
}

export const SidebarItem: FC<SidebarItemProps> = ({ icon, name, link }) => {
  const location = useLocation()
  console.log(location)
  return (
    <ItemWrapper>
      <Link className={location.pathname === link ? 'active' : ''} to={link}>
        {icon}
        <span>{name}</span>
      </Link>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  position: relative;
  left: 5%;
  width: 90%;
  margin-bottom: 10px;
  & a {
    font-size: 14.64px;
    font-weight: regular;
    color: #5d7285;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 7px;
  }
  & :nth-child(1) {
    margin-right: 5px;
    background: transparent;
  }
  &:hover {
    cursor: pointer;
    background: #e9f5fe;
  }
  & img {
    border: red solid 1px;
    height: 24px;
    margin-right: 20px;
  }
  & .active {
    border-left: #5d7285 3px solid;
  }
`
