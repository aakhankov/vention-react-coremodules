import { Component } from 'react';
import CharacterCard from '../card-item/CharacterCard';
import CharacterData from '../../../data/CharacterData';
import PropTypes from 'prop-types';
import './CharacterList.css';
class CharacterList extends Component {
  render() {
    const { searchInput } = this.props;
    const filteredCharacters = CharacterData.filter((character) => {
      return character.name.toLowerCase().includes(searchInput?.toLowerCase());
    });
    return (
      <div className="cardListSection">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  }
}
CharacterList.propTypes = {
  searchInput: PropTypes.string,
};

export default CharacterList;
