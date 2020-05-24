import React from 'react'
import { addDecorator } from '@storybook/react'
import { ModalProvider } from '../src/components/modal.tsx'

const root = document.getElementById('root')

addDecorator(storyFn => <ModalProvider root={root} >{storyFn()}</ModalProvider>)
