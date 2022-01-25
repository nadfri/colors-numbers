import React, {useState} from 'react';
import './Numbers.scss';

export default function Numbers() {

  const [number, setNumber] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const colors = [
    "red",
    "magenta",
    "orange",
    "aqua",
    "#7f3b1e",
    "yellow",
    "lime",
    "blue",
    "indigo",
    "crimson",
    "yellowgreen",
    "violet",
  ];


  function handleClick(e: Event, color:string) {
    e.preventDefault();
    setNumber((color));
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="Numbers">
      {colors.map((color, index) => (
       <div key={index} className='number' style={{color}}>{index+1}</div>
      ))}

      {/* {showModal && <Modal color={color} handleCloseModal={handleCloseModal}/>}  */}
    </div>
  );
}
