import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import closeImg from "../../asset/close-icon.svg";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalTitle}>
          <h1>{title}</h1>
          <img src={closeImg} onClick={onClose} />
        </div>
        {children}
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}
export default Modal;
