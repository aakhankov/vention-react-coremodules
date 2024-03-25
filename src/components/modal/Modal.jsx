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
            <h2>{selectedCharacter.name}</h2>
            <div className="modal-content-block">
              <div className="modal-content-picture">
                <img src={selectedCharacter.image} alt="" />
              </div>
              <div className="modal-content-description">
                <p>Species: {selectedCharacter.species}</p>
                <p>Status: {selectedCharacter.status}</p>
                <p>Gender: {selectedCharacter.gender}</p>
                <p>
                  URL: <a href={selectedCharacter.url}>{selectedCharacter.url}</a>
                </p>
                <p>Location: {selectedCharacter.location.name}</p>
                <p>Created: {selectedCharacter.created}</p>
                <p>Episodes: {selectedCharacter.episode.length}</p>
                <p>ID: {selectedCharacter.id}</p>
              </div>
            </div>
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
