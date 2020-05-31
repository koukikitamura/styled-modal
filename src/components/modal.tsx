import React, { FC, useContext } from 'react'
import ReactDOM from 'react-dom'
import { View, ViewProps } from './internal/view'
import { CloseIcon } from './internal/icon'
import styled from 'styled-components'

type ModalContext = {
  root: HTMLElement | null
}

const ModalContext = React.createContext<ModalContext>({root: null})

export type ModalProps = {
  visible: boolean
  onClose?: () => void
} & ViewProps

export const Modal: FC<ModalProps> = ({visible, onClose, ...props}) => {
  const context = useContext(ModalContext)

  if(!context.root) {
    return null
  }

  const visibleClass = visible ? 'visible' : 'invisible'

  return ReactDOM.createPortal(
    <ModalContainer className={`${visibleClass}`}>
      <View className="container" {...props}>
        <View className="header">
          <CloseIcon
            className="close"
            onClick={() => {
              onClose && onClose()
            }}
          />
        </View>
        <View className="contant">{props.children}</View>
      </View>
    </ModalContainer>,
    context.root,
  )
}

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  visibility: hidden;
  pointer-events: none;

  &.visible {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  &.invisible {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    animation-fill-mode: forwards;
  }

  .container {
    background: white;
    max-width: 720px;
    max-height: 90%;
    border-radius: 5px;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 12px;
    .close {
      display: inline-block;
      cursor: pointer;
    }
  }
`

export type ModalProviderProps = {
  root: HTMLElement | null
}

export const ModalProvider: FC<ModalProviderProps> = ({root, ...props}) => {
  return (
    <ModalContext.Provider value={{root}}>
      {props.children}
    </ModalContext.Provider>
  )
}
