import { createContext, useContext, useState } from 'react'; // Ensure 'React' is imported if you're using JSX
import PropTypes from 'prop-types';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [newCharacter, setNewCharacter] = useState(null);
  return (
    <CharacterContext.Provider value={{ newCharacter, setNewCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  return useContext(CharacterContext);
};

CharacterProvider.propTypes = {
  children: PropTypes.any,
};
