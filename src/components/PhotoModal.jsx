import { useState } from 'react';
import Modal from 'react-modal';
import GetPhoto from './PhotoCapture';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export default function PhotoModal({props}) {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const element = props.current;
  element && Modal.setAppElement(element);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Take photo</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Take photo"
      >
         <GetPhoto setIsOpen={setIsOpen}/>
      </Modal>
    </div>
  );
}
