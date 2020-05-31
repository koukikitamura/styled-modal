import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  background,
  BackgroundProps,
  borders,
  BordersProps,
  position,
  PositionProps,
} from 'styled-system'

export type StyledSystemProps =
SpaceProps &
ColorProps &
TypographyProps &
LayoutProps &
FlexboxProps &
GridProps &
BackgroundProps &
BordersProps &
PositionProps

export const styledSystemProps = [
  typography,
  space,
  layout,
  flexbox,
  color,
  position,
  grid,
  background,
  borders,
]

export type ViewProps = StyledSystemProps & HTMLAttributes<HTMLDivElement>

export const View = styled('div')<StyledSystemProps>({}, styledSystemProps)
