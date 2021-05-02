import React, { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  focusRef = React.createRef();
  componentDidMount() {
    this.focusRef.current.focus();
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = (event) => {
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={styles.ModalBackdrop} onClick={this.handleBackdropClick}>
        <div
          ref={this.focusRef}
          tabIndex={0}
          onKeyDown={this.handleKeyDown}
          className={styles.ModalContent}
        >
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
