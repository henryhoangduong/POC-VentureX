import { FC } from 'react'
import styled from 'styled-components'

export const Home: FC = () => {
  return (
    <HomeWrapper>
      <h1
        style={{
          position: 'relative',
          top: '30%',
        }}
      >
        Welcome to VentureX
      </h1>
    </HomeWrapper>
  )
}
const HomeWrapper = styled.div`
  position: relative;
  height: 100%;
`
