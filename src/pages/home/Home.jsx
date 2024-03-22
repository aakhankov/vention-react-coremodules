import CharacterSearch from '../../components/search/CharacterSearch';
import CharacterList from '../../components/cards-section/card-list/CharacterList';
import { useState } from 'react';
export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (inputValue) => {
    setSearchInput(inputValue);
  };
  return (
    <div>
      <CharacterSearch onSearch={handleSearch} />
      <CharacterList searchInput={searchInput} />
    </div>
  );
}