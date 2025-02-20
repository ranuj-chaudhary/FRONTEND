import React, { useRef, useState } from 'react';
import useOutsideClick from './useOutsideClick';
const style = {
  btn: 'py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300',
  wrapper:
    'fixed top-0 h-full w-full bg-black bg-opacity-40 flex justify-center items-center',
};

const Modal = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const modalRef = useRef(null);

  // handles outside click logic
  useOutsideClick(modalRef, () => setToggle(false));

  function handleOpenModal(e) {
    // stops to capture this event at document click handler
    e.stopPropagation();

    console.log('running');
    setToggle(true);
  }
  function handleCloseModal(e) {
    // stops to capture this event at document click handler
    e.stopPropagation();
    setToggle(false);
  }

  // //   without useOutsidehook
  //   function handleOutsideClick(e) {
  //     if (modalRef && !modalRef.current.contains(e.target)) {
  //       handleCloseModal();
  //     }
  //   }

  return (
    <div className="container">
      <button className={style.btn} onClick={(e) => handleOpenModal(e)}>
        Open Modal
      </button>
      {toggle && (
        <div className={`${style.wrapper} wrapper`}>
          <div className="modal-content w-[80%]" ref={modalRef}>
            {children}
            <div className="close-modal-btn absolute top-2 right-2">
              <button
                onClick={(e) => handleCloseModal(e)}
                className={`${style.btn} `}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
