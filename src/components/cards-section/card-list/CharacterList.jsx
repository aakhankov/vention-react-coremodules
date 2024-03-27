import CharacterCard from '../card-item/CharacterCard';
import PropTypes from 'prop-types';
import './CharacterList.css';
import { useEffect, useState } from 'react';
import Modal from '../../modal/Modal';
import Pagination from '../../pagination/Pagination';
import DownloadIndicator from '../../download-indicator/DownloadIndicator';

export default function CharacterList({ searchInput }) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [noResults, setNoResults] = useState(false);
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);
  const [loading, setLoading] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleClick = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = 'https://rickandmortyapi.com/api/character';
      if (searchInput) {
        url += `?name=${searchInput}`;
      } else {
        url += `?page=${currentPage}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (searchInput) {
        if (data && data.results && data.results.length > 0) {
          setFilteredCharacters(data.results);
          setNoResults(false);
        } else {
          setFilteredCharacters([]);
          setNoResults(true);
        }
      } else {
        if (data && data.results && data.info) {
          setTotalPages(data.info.pages);
          setCharacters(data.results);
          setNoResults(false);
        } else {
          setCharacters([]);
          setNoResults(true);
        }
      }
      setLoading(false);
    };

    fetchData();
    console.log('selectedCharacter:', selectedCharacter);
  }, [currentPage, searchInput, selectedCharacter]);

  return (
    <div className="characterList">
      {loading && <DownloadIndicator />}
      {noResults && <p className="no-results-message">No results found.</p>}
      {!noResults && !loading && (
        <div>
          <div className="cardListSection">
            {(searchInput ? filteredCharacters : characters)?.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onClick={() => handleClick(character)}
              />
            ))}
          </div>
          <Modal
            isOpen={!!selectedCharacter}
            onClose={closeModal}
            selectedCharacter={selectedCharacter}
          />
          {!searchInput && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              goToFirstPage={goToFirstPage}
              goToLastPage={goToLastPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      )}
    </div>
  );
}

CharacterList.propTypes = {
  searchInput: PropTypes.string.isRequired,
};
