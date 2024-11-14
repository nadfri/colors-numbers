import { useEffect, useRef } from 'react';
import './Modal.scss';

export default function Modal({
  children,
  closeModal,
}: {
  children: JSX.Element | string;
  closeModal: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleCloseModal() {
    modalRef.current?.classList.add('fadeOut');
    containerRef.current?.classList.add('dezoom');
    timeoutRef.current = setTimeout(closeModal, 500);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className='Modal'
      onTouchStart={handleCloseModal}
      onMouseUp={handleCloseModal}
      onTouchEnd={(e) => e.preventDefault()}
      ref={modalRef}>
      <div className='container' ref={containerRef}>
        {children}
      </div>
    </div>
  );
}
