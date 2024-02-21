const filterCharacters = (characters, searchInput) => {
  return characters.filter((character) => {
    if (character.name) {
      const regex = new RegExp(searchInput.replace(/\s/g, '.*'), 'i');
      return regex.test(character.name);
    }
    return false;
  });
};

export default filterCharacters;
