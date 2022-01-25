import { Component, useRef } from "react";
import Circle from "../Circle/Circle";
import "./Modal.scss";

export default function Modal({
  children,
  handleCloseModal,
}: {
  children: JSX.Element;
  handleCloseModal: any;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function closeModal() {
    modalRef.current?.classList.add("fadeOut");
    containerRef.current?.classList.add("dezoom");
    setTimeout(() => {
      handleCloseModal();
    }, 500);
  }

  return (
    // <div className="Modal" onClick={closeModal} ref={modalRef}>
    //   <div className="container" ref={containerRef}>
    //     <Circle backgroundColor={color} handleClick={null} />
    //   </div>
    // </div>
    <div className="Modal" onClick={closeModal} ref={modalRef}>
      <div className="container" ref={containerRef}>
        {children}
      </div>
    </div>
  );
}
