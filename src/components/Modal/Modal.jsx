import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ isShown, closeUp, isFormLoading, response }) => {
  if (!isShown) {
    return null;
  }
  const loader = <div className={styles.loader}>Loading...</div>;
  const content = (
    <>
      <div className={styles.modalHeader}>
        {response.success ? "Congratulations!" : "Ooops..."}
        <button className={styles.xMark} onClick={closeUp}></button>
      </div>
      <div className={styles.modalMessage}>{response.message}</div>
      <div className={styles.modalCloseButtonWrapper}>
        <button className={styles.modalCloseButton} onClick={closeUp}>
          Great
        </button>
      </div>
    </>
  );

  return ReactDOM.createPortal(
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        {isFormLoading ? loader : content}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
