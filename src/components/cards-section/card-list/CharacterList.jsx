import CharacterCard from '../card-item/CharacterCard';
import PropTypes from 'prop-types';
import './CharacterList.css';
import { useEffect, useState } from 'react';

export default function CharacterList({ searchInput }) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  useEffect(() => {
    const fetchData = async () => {
      let url = 'https://rickandmortyapi.com/api/character';
      if (searchInput) {
        url += `?name=${searchInput}`;
      } else {
        url += `?page=${currentPage}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (searchInput) {
        setFilteredCharacters(data.results);
      } else {
        setTotalPages(data.info.pages);
        setCharacters(data.results);
      }
    };

    fetchData();
  }, [currentPage, searchInput]);

  return (
    <div className="characterList">
      <div className="cardListSection">
        {(searchInput ? filteredCharacters : characters)?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {!searchInput && (
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={goToFirstPage}>
            First Page
          </button>
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
          <button disabled={currentPage === totalPages} onClick={goToLastPage}>
            Last Page
          </button>
        </div>
      )}
    </div>
  );
}

CharacterList.propTypes = {
  searchInput: PropTypes.string.isRequired,
};
