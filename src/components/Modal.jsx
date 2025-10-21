import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}
export default Modal;
