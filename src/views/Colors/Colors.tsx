import { useState } from 'react';
import Circle from '../../components/Circle/Circle';
import Modal from '../../components/Modal/Modal';
import { colorsOfCircles } from '../../utils/arrayOfColors';
import { useLang } from '../../Context/LangContext';

export default function Colors() {
  const [colorSelect, setColorSelect] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const { lang } = useLang();

  function openModal(color: string) {
    setColorSelect(color);
    setShowModal(true);
    new Audio(`/voices/${lang}/colors/${color}.mp3`).play();
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className='grid'>
      {colorsOfCircles.map((color, index) => (
        <Circle
          key={index}
          backgroundColor={color}
          handleClick={() => openModal(color)}
        />
      ))}

      {showModal && (
        <Modal closeModal={closeModal}>
          <Circle backgroundColor={colorSelect} />
        </Modal>
      )}
    </div>
  );
}
