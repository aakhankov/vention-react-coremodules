import { Component } from 'react';
import PropTypes from 'prop-types';
import './CharacterCard.css';

class CharacterCard extends Component {
  render() {
    const { name, status, image, age, description, gender } = this.props.character;
    return (
      <div className="characterCard">
        <h3 className="characterCard_title">{name}</h3>
        <img className="characterCard_image" src={image} alt={name} />
        <div className="characterCard_description">
          <p>{'Age: ' + age}</p>
          <p>{'Gender: ' + gender}</p>
          <p>{'Status: ' + status}</p>
          <p>{description}</p>
          <img src="../logo.png" alt="" />
        </div>
      </div>
    );
  }
}
CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
