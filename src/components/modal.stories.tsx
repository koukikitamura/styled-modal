import React, { useState } from 'react'
import { Modal } from './modal'
import { LoremIpsum } from './internal/lorem-ipsum.stories'

export default { title: 'Modal' }

export const Default = () => {
  const [visible, setVisible] = useState(true)


  return (
    <>
      <button onClick={() => { setVisible(true) }}>Open modal</button>
      <Modal
        visible={visible}
        onClose={() => { setVisible(false) }}
        textAlign="center"
        paddingBottom="20px"
      >
        <LoremIpsum />
      </Modal>
    </>
  )
}
