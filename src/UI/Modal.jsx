import React from "react";
import { createPortal } from "react-dom";
function Modal() {
  return createPortal(
    <div>
      <h1>Model Heading</h1>
      <p>Modal Para</p>
    </div>,
    document.getElementById("modalroot")
  );
}

export default Modal;
