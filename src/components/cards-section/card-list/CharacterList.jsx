import CharacterCard from '../card-item/CharacterCard';
import CharacterData from '../../../data/CharacterData';
import PropTypes from 'prop-types';
import './CharacterList.css';
import filterCharacters from '../../filter/CharacterFilter';
export default function CharacterList(props) {
  const { searchInput } = props;
  const filteredCharacters = filterCharacters(CharacterData, searchInput);
  return (
    <div className="cardListSection">
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
CharacterList.propTypes = {
  searchInput: PropTypes.string,
};
