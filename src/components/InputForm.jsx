import { useState, useEffect } from "react";


const InputForm = ({ letter, setLetter, handleSubmit, incorrectLetters}) => {
  // track if the game is over in a boolean
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (incorrectLetters.length > 5) {
      setIsGameOver(true);  // Set the game over state
      alert('Game Over! You have exceeded the maximum number of incorrect guesses.');
    }
  }, [incorrectLetters]);  // Trigger when incorrectLetters changes
  return (
    <form onSubmit={handleSubmit}> 
      <input 
        type="text" 
        placeholder="Enter A Letter: "
        value={letter}
        onChange={(e) => {
          const value = e.target.value;
          if (/[a-z]/.test(value)) {  
            setLetter(value);
          }
        }}
        maxLength={1}  
        disabled={isGameOver}  
      />  
      <input 
        type="submit" 
        value="Submit" 
        disabled={isGameOver}
      />
    </form>
  );
};

export default InputForm;