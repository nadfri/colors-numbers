import { useRef } from "react";
import "./Modal.scss";

export default function Modal({
  children,
  closeModal,
}: {
  children: JSX.Element | string;
  closeModal: any;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleCloseModal() {
    modalRef.current?.classList.add("fadeOut");
    containerRef.current?.classList.add("dezoom");
    setTimeout(() => {
      closeModal();
    }, 500);
  }

  return (
    <div
      className="Modal"
      onTouchStart={handleCloseModal}
      onMouseUp={handleCloseModal}
      onTouchEnd={(e) => e.preventDefault()}
      ref={modalRef}
    >
      <div className="container" ref={containerRef}>
        {children}
      </div>
    </div>
  );
}
