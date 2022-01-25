import React, { useState } from "react";
import Circle from "../../components/Circle/Circle";
import Modal from "../../components/Modal/Modal";
import { colorsOfCircles } from "../../utils/arrayOfColors";

export default function Colors() {


  const [colorSelect, setColorSelect] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  function openModal(e: Event, color: string) {
    e.preventDefault();
    setColorSelect(color);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="grid">
      {colorsOfCircles.map((color, index) => (
        <Circle
          key={index}
          backgroundColor={color}
          handleClick={(e: Event) => openModal(e, color)}
        />
      ))}

      {/* {showModal && <Modal color={color} handleCloseModal={handleCloseModal}/>}  */}
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Circle backgroundColor={colorSelect} />
        </Modal>
      )}
    </div>
  );
}
