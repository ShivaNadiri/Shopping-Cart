import React from "react";
import { createPortal } from "react-dom";
import styles from "./Model.module.css";
function Model({ children, setIsModelOpen }) {
  return createPortal(
    <>
      <div
        className={styles.modelbackdrop}
        onClick={() => {
          setIsModelOpen(false);
        }}
      ></div>
      <div className={styles.modelcontent}>{children}</div>
    </>,
    document.getElementById("modalroot")
  );
}

export default Model;
