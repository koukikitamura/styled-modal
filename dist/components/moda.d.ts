import { FC } from 'react';
export declare type ModalProps = {
    visible: boolean;
    onClose?: () => void;
};
export declare const Modal: FC<ModalProps>;
