// convert guessedLetters and incorrectLetters for display
export const AllGuessedLetters = ({ guessedLetters }) => {
  return (
    <p>Guessed Letters: {guessedLetters.join(', ')}</p>
  );
};

export const IncorrectLetters = ({ incorrectLetters }) => {
  return (
    <p>Incorrect Letters: {incorrectLetters.join(', ')}</p>
  );
};

