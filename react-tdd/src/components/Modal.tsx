import { useCallback, useEffect } from "react";

type ModalType = {
    title: string;
    description: string;
    onClose : boolean;
}

export const Modal = ({title, description, onClose} : ModalType) => {

    useEffect(() => {
        document.addEventListener('keydown', onClose);
        return () => {
            document.removeEventListener('keydown', onClose)
        }
    }, [onClose])
  return (
    <div id="modal">
      <div id="demo">
        <h3>{title}</h3>
        <p>{description}</p>
        <button id="modal-btn" onClick={onClose}>close</button>
      </div>
    </div>
  );
};
