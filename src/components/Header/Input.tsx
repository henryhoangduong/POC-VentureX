import { FC } from 'react'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Input: FC = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        style={{
          background: '#F4F5F7',
          border: 'none',
          outline: 'none',
          width: '90%',
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #f4f5f7;
  border-radius: 15px;
  padding: 10px;
  height: 95%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
