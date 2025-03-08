import { useState, useEffect } from "react";

const InputForm = ({ letter, setLetter, handleSubmit, incorrectLetters}) => {
  // track if the game is over in a boolean
  const [isGameOver, setIsGameOver] = useState(false);

  // set isGameOver state to true when user exceeds 5 guesses
  useEffect(() => {
    if (incorrectLetters.length > 5) {
      setIsGameOver(true);
      alert('Game Over! You have exceeded the maximum number of incorrect guesses.');
    }
  }, [incorrectLetters]); 
  
  return (
    <form onSubmit={handleSubmit}> 
      <input 
        type="text" 
        placeholder="Enter A Letter: "
        value={letter}
        onChange={(e) => {
          const value = e.target.value;
          /^[a-z]$/.test(value) ? setLetter(value) : setLetter('');
        }}
        maxLength={1}  
        disabled={isGameOver}/>  
      <input 
        type="submit" 
        value="Submit" 
        disabled={isGameOver}/>
    </form>
  );
};

export default InputForm;