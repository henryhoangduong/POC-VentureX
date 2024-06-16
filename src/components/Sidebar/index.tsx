import { FC } from 'react'
import { styled } from 'styled-components'
import { Welcome } from './Welcome'
import { SidebarItem } from './SidebarItem'
import dashboard from '../../assets/icon/dashboard-svgrepo-com.svg'

export const Sidebar: FC = () => {
  return (
    <Wrapper>
      <h1>VentureX</h1>
      <div className="divider"></div>
      <Welcome />
      <ul>
        <SidebarItem icon={dashboard} name="Dashboard" />
        <SidebarItem icon={dashboard} name="Balances" />
        <SidebarItem icon={dashboard} name="Transactions" />
        <SidebarItem icon={dashboard} name="Bills" />
        <SidebarItem icon={dashboard} name="Expenses" />
        <SidebarItem icon={dashboard} name="Goals" />
        <SidebarItem icon={dashboard} name="Settings" />
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  padding: 5px;
  height: 100vh;
  min-width: 15%;
  background-color: white;
  & li:hover {
    color: #6f35ff;
    cursor: pointer;
  }
  & h1 {
    width: max-content;
    left: 5%;
  }
  & .divider {
    border: #e0e4e9 solid 1px;
    overflow: auto;
  }
`
