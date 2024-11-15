import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Number from '../../components/Number/Number';
import { useLang } from '../../Context/LangContext';

export default function Numbers() {
  const [number, setNumber] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const { lang } = useLang();

  function openModal(number: number) {
    setNumber(number);
    setShowModal(true);
    new Audio(`/voices/${lang}/numbers/${number}.mp3`).play();
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className='grid'>
      {numbers.map((number) => (
        <Number key={number} number={number} handleClick={() => openModal(number)} />
      ))}

      {showModal && (
        <Modal closeModal={closeModal}>
          <Number number={number} />
        </Modal>
      )}
    </div>
  );
}
