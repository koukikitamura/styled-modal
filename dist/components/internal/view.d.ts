import { HTMLAttributes } from 'react';
import { SpaceProps, ColorProps, TypographyProps, LayoutProps, FlexboxProps, GridProps, BackgroundProps, BordersProps, PositionProps } from 'styled-system';
export declare type StyledSystemProps = SpaceProps & ColorProps & TypographyProps & LayoutProps & FlexboxProps & GridProps & BackgroundProps & BordersProps & PositionProps;
export declare const styledSystemProps: import("styled-system").styleFn[];
export declare type ViewProps = StyledSystemProps & HTMLAttributes<HTMLDivElement>;
export declare const View: import("styled-components").StyledComponent<"div", any, StyledSystemProps, never>;
