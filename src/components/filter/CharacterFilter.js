const filterCharacters = async (characters, searchInput, page) => {
  try {
    if (!searchInput) {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.json();
      return data.results;
    } else {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchInput}&page=${page}`);
      const data = await res.json();
      return data.results;
    }
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

export default filterCharacters;
