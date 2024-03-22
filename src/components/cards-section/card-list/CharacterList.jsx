import CharacterCard from '../card-item/CharacterCard';
import PropTypes from 'prop-types';
import './CharacterList.css';
import { useEffect, useState } from 'react';

export default function CharacterList({ searchInput }) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
  }, [currentPage]);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTotalPages(data.info.pages);
    setCharacters(data.results);
  };

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
    <div className="characterList">
      <div className="cardListSection">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        >
          Prev
        </button>
        <span>{currentPage}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

CharacterList.propTypes = {
  searchInput: PropTypes.string.isRequired,
};
