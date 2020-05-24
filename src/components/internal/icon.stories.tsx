import React from 'react'
import { CloseIcon } from './icon'

export default { title: "Internal/Icon" }

export const Default = () => {
  return (
    <>
      <CloseIcon />
    </>
  )
}

export const ColorRed = () => {
  return (
    <>
      <CloseIcon color="red" />
    </>
  )
}

export const Size30px = () => {
  return (
    <>
      <CloseIcon fontSize="30px" />
    </>
  )
}
