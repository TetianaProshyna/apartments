import { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  render() {
    return createPortal(
      <div className={styles.ModalBackdrop} onClick={this.handleBackdropClick}>
        <div className={styles.ModalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
