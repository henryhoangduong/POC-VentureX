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
        <div
          style={{
            margin: '5px',
            borderRadius: '10px',
          }}
        >
          {children}
        </div>
      </MainWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: space-between;
`

const MainWrapper = styled.div`
  height: 100vh;
  overflow: auto;
  flex: 1;
`
