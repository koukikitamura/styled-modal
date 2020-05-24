import React, { FC, HTMLAttributes } from 'react'
import { ReactComponent as CloseIconSVG } from 'src/assets/close.svg'
import { StyledSystemProps, styledSystemProps } from './view'
import styled, { css } from 'styled-components'

type IconProps = HTMLAttributes<HTMLSpanElement> & StyledSystemProps

export const CloseIcon: FC<IconProps> = props => (
  <SVGContainer {...props}>
    <CloseIconSVG />
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
