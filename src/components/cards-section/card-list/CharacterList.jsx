import CharacterCard from '../card-item/CharacterCard';
import CharacterData from '../../../data/CharacterData';
import PropTypes from 'prop-types';
import './CharacterList.css';
export default function CharacterList(props){
    const { searchInput } = props;
    const filteredCharacters = CharacterData.filter((character) => {
      const nameLowerCase = character.name.toLowerCase();
      const searchInputLowerCase = searchInput?.toLowerCase();
      if (nameLowerCase) {
        const regex = new RegExp(searchInputLowerCase.replace(/\s/g, '.*'), 'i');
        return regex.test(nameLowerCase);
      }
      return false;
    });
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

