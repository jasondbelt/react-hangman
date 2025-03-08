import { useEffect } from "react";

// initially displays puzzle with underscores, reveals letters as they are guessed
const DisplayPuzzle = ({ puzzle, guessedLetters, isGameOver, setIsGameOver }) => {
  
  // console.log(puzzle)
  const displayPuzzle = puzzle
    .split('')
    .map((char) => (guessedLetters.includes(char) ? char : '_'))
    .join(' ');

  // set isGameOver state to true when user gets solution
  useEffect(() => {
    // trigger only when dependency arrays change
    if (!displayPuzzle.includes('_') && guessedLetters.length > 0 &&!isGameOver) {
      setIsGameOver(true);
      alert('Congratulations! You solved the puzzle!');
    }
  }, [displayPuzzle, guessedLetters, isGameOver, setIsGameOver]); 

  return <p>{displayPuzzle}</p>;
};


export default DisplayPuzzle;