import PropTypes from 'prop-types';
import './CharacterSearch.css';
import { useEffect } from 'react';
export default function CharacterSearch({ searchInput, onSearchInputChange }) {
  useEffect(() => {
    return () => {
      localStorage.setItem('searchInput', searchInput);
    };
  }, [searchInput]);

  return (
    <div className="characterSearch_block">
      <input
        className="characterSearch_input"
        label="Search Characters"
        value={searchInput}
        onChange={(event) => onSearchInputChange(event.target.value)}
        placeholder="Search character..."
      />
    </div>
  );
}
CharacterSearch.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
};
