import React, { FC, HTMLAttributes } from 'react'
import { StyledSystemProps, styledSystemProps } from './view'
import styled, { css } from 'styled-components'

// Can't treat svg file as external.
// See https://github.com/transitive-bullshit/create-react-library/issues/223

type IconProps = HTMLAttributes<HTMLSpanElement> & StyledSystemProps

export const CloseIcon: FC<IconProps> = props => (
  <SVGContainer {...props}>
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6955 1.339L6.7395 5.295L10.8105 9.3545L9.718 10.4585L5.647 6.3875L1.5415 10.4815L0.449 9.3775L4.543 5.2835L0.5755 1.316L1.668 0.211999L5.6355 4.191L9.5915 0.235L10.6955 1.339Z" fill="gray"/>
    </svg>
  </SVGContainer>
)

const SVGContainer = styled('span')<StyledSystemProps>(
  {
    display: 'inline-block',
    svg: {
      verticalAlign: "middle",
      width: '1em',
      height: '1em',
      '*': {
        fill: 'gray'
      }
    }
  },
  props =>
    props.color &&
    css({
      svg: {
        '*': {
          fill: props.color
        }
      }
    }),
  styledSystemProps
)
