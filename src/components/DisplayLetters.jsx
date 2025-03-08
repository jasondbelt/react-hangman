// convert guessedLetters and incorrectLetters for display

export const AllLetters = ({ guessedLetters }) => {
  // boolean ensures empty characters aren't displayed
  return (
    <p>Guessed Letters: {guessedLetters.filter(Boolean).join(', ')}</p>
  );
};

export const IncorrectLetters = ({ incorrectLetters }) => {
  return (
    <p>Incorrect Letters: {incorrectLetters.join(', ')}</p>
  );
};

