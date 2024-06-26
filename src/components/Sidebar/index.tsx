import { FC } from 'react'
import { styled } from 'styled-components'
import { Welcome } from './Welcome'
import { SidebarItem } from './SidebarItem'
import { Link } from 'react-router-dom'
import { sideBarItemList } from './SidebarItemList'

export const Sidebar: FC = () => {
  return (
    <Wrapper>
      <Link className="logo" to="/">
        VentureX
      </Link>
      <div className="divider"></div>
      <Welcome />
      <ul>
        {sideBarItemList.map((item, index) => (
          <SidebarItem
            link={item.link}
            key={index}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  border-radius: 10px;
  padding: 5px;
  height: 100vh;
  min-width: 15%;
  background-color: white;
  & .divider {
    border: #e0e4e9 solid 1px;
    overflow: auto;
  }
  & .logo {
    width: max-content;
    position: relative;
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    color: black;
  }
`
