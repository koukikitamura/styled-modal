import React from 'react'
import { ModalProvider } from 'styled-modal-react'
import { ModalExample } from './components/modal-example'

const root = document.getElementById('root')

const App = () => {
  return (
    <ModalProvider root={root}>
      <ModalExample />
    </ModalProvider>
  )
}

export default App
