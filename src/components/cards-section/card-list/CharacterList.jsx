import CharacterCard from '../card-item/CharacterCard';
import PropTypes from 'prop-types';
import './CharacterList.css';
import { useEffect, useState } from 'react';

export default function CharacterList({ searchInput }) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/');
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error.message);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const filterCharacters = () => {
      if (!searchInput) {
        setFilteredCharacters(characters);
      } else {
        const filtered = characters.filter((character) =>
          character.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredCharacters(filtered);
      }
    };

    filterCharacters();
  }, [searchInput, characters]);

  return (
    <div className="cardListSection">
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

CharacterList.propTypes = {
  searchInput: PropTypes.string.isRequired,
};
