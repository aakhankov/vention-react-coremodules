import PropTypes from 'prop-types';
import './CharacterSearch.css';
import { useState } from 'react';

export default function CharacterSearch({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchInput);
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="characterSearch_block">
      <input
        className="characterSearch_input"
        label="Search Characters"
        value={searchInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Добавляем обработчик события нажатия клавиши
        placeholder="Search character..."
      />
    </div>
  );
}

CharacterSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
