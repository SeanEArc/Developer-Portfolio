import { useRef } from 'react';

export function useModalClose(onClose) {
    const modalRef = useRef();
    const closeModal = e => {
        if (modalRef.current === e.target) onClose();
    };
    return { modalRef, closeModal };
}
