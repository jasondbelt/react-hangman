// initially displays puzzle with underscores, reveals letters as they are guessed
const DisplayPuzzle = ({ puzzle, guessedLetters }) => {
  const displayPuzzle = puzzle
    .split('')
    .map((char) => (guessedLetters.includes(char) ? char : '_'))
    .join(' ');

  return <p>{displayPuzzle}</p>;
};


export default DisplayPuzzle;