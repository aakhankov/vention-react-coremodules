import PropTypes from 'prop-types';
import './Modal.css';

export default function Modal({ isOpen, onClose, selectedCharacter }) {
  return (
    <div className={isOpen ? 'modal-overlay' : 'modal-overlay hidden'} onClick={onClose}>
      <div className="modal-block" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {isOpen && (
          <div className="modal-content">
            <h2>Name: {selectedCharacter.name}</h2>
            <img src={selectedCharacter.image} alt="" />
            <p>Species: {selectedCharacter.species}</p>
            <p>Status: {selectedCharacter.status}</p>
            <p>ID: {selectedCharacter.id}</p>
            <p>Type: {selectedCharacter.type}</p>
            <p>Gender: {selectedCharacter.gender}</p>
          </div>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  selectedCharacter: PropTypes.object,
};
