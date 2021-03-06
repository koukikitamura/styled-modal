# styled-modal-react

> Modal components for react

[![NPM](https://img.shields.io/npm/v/styled-modal-react.svg)](https://www.npmjs.com/package/styled-modal-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
$ npm install styled-modal-react
$ yarn add styled-modal-react
```

## Usage

### Step1: Set up provider
```jsx
import React from 'react'
import { render } from 'react-dom'
import { ModalProvider } from 'styled-modal-react'
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
import { Modal } from 'styled-modal-react'

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

## License

MIT © [koukikitamura](https://github.com/koukikitamura)
