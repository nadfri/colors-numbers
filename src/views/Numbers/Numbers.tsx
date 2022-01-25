import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Number from "../../components/Number/Number";

export default function Numbers() {
  const [number, setNumber] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function openModal(e: Event, number: number) {
    e.preventDefault();
    setNumber(number);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="grid">
      {numbers.map((number) => (
        <Number
          key={number}
          number={number}
          handleClick={(e: Event) => openModal(e, number)}
        />
      ))}

      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Number number={number} />
        </Modal>
      )}
    </div>
  );
}
