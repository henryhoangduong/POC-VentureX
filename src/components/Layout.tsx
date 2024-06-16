import { FC, ReactNode } from 'react'
import { styled } from 'styled-components'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <MainWrapper>
        <Header />
        <div style={{ background: 'white', margin: '5px' }}>{children}</div>
      </MainWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const MainWrapper = styled.div`
  width: 100%;
`
