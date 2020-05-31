import React, { useState } from 'react'
import { Modal } from 'styled-modal-react'

export const ModalExample = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <button onClick={() => { setVisible(true) }}>Open modal</button>
      <Modal
        visible={visible}
        width="720px"
        textAlign="center"
        onClose={() => { setVisible(false) }}
        pb="20px"
      >
        This is modal <br/>
        This is modal <br/>
        This is modal <br/>
        This is modal <br/>
        This is modal <br/>
        This is modal <br/>
      </Modal>
    </div>
  )
}
