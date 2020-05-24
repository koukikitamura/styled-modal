import { FC } from 'react';
import { ViewProps } from './internal/view';
export declare type ModalProps = {
    visible: boolean;
    onClose?: () => void;
} & ViewProps;
export declare const Modal: FC<ModalProps>;
export declare type ModalProviderProps = {
    root: HTMLElement | null;
};
export declare const ModalProvider: FC<ModalProviderProps>;
