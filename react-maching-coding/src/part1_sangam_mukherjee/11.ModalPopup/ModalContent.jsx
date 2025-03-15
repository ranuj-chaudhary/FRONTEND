import React from 'react';

const ModalContent = () => {
  return (
    <div className="modal-content p-2 bg-white w-full m-auto">
      <header className="modal-content__header">
        <p>Modal Header</p>
      </header>
      <div className="modal-content__body">
        <h2>Modal Body</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          distinctio fuga modi maxime quia totam odio impedit, dignissimos
          repellendus at animi iure natus ipsum. Excepturi tempora rem
          consectetur. Placeat, nesciunt.
        </p>
      </div>
      <footer>
        <p>custom footer</p>
      </footer>
    </div>
  );
};

export default ModalContent;
