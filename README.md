# styled-modal
Modal components for react

## Installation
```
$ npm install styled-modal
$ yarn add styled-modal
```

## Examples

### Step1: Set up provider
```jsx
import React from 'react'
import { render } from 'react-dom'
import { ModalProvider } from 'styled-modal'
import App from './components/App'

const rootElement = document.getElementById('root')

render(
  <ModalProvider root={rootElement}>
    <App />
  </ModalProvider>,
  document.getElementById(rootElement)
)
```

### Step2 Render modal component

```jsx
import React, { FC, useState } from 'react'
import { Modal } from 'styled-modal'

const ModalExample: FC<{}> = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <button
        onClick={() => {
          setVisible(true)
        }}
      >
        Open Modal
      </button>

      <Modal
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      >
        // Here is modal body
        <div>
          <h2>Modal title</h2>
          <p>
            modal contents
          </p>
        </div>
      </Modal>
    </div>
  )
}
```
