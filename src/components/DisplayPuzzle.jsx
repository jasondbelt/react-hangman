import { useState, useEffect } from "react";

// initially displays puzzle with underscores, reveals letters as they are guessed
const DisplayPuzzle = ({ puzzle, guessedLetters }) => {
  // track if the game is over in a boolean
  const [isGameOver, setIsGameOver] = useState(false);
  
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
  }, [displayPuzzle, guessedLetters, isGameOver]); 

  return <p>{displayPuzzle}</p>;
};


export default DisplayPuzzle;