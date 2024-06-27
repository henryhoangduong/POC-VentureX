import React, { FC, ReactNode, useState } from 'react'
import Modal, { ModalProps } from 'styled-react-modal'

// Styled Modal
const StyledModal = Modal.styled`
  width: 30rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${(props: { opacity: number }) => props.opacity};
  transition: opacity ease 500ms;
`

interface ReusableModalProps extends ModalProps {
  isOpen: boolean
  toggleModal: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => void
  afterOpen?: () => void
  beforeClose?: () => Promise<void>
  children: ReactNode
}

const ReusableModal: FC<ReusableModalProps> = ({
  isOpen,
  toggleModal,
  afterOpen = () => {},
  beforeClose = () => new Promise<void>((resolve) => resolve()),
  children,
}) => {
  const [opacity, setOpacity] = useState(0)

  const handleAfterOpen = () => {
    setTimeout(() => setOpacity(1), 100)
    if (afterOpen) afterOpen()
  }

  const handleBeforeClose = () => {
    return new Promise<void>((resolve) => {
      setOpacity(0)
      setTimeout(() => {
        if (beforeClose) beforeClose().then(resolve)
        else resolve()
      }, 300)
    })
  }

  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={handleAfterOpen}
      beforeClose={handleBeforeClose}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      opacity={opacity}
      backgroundProps={{ opacity }}
    >
      {children}
    </StyledModal>
  )
}

export default ReusableModal
