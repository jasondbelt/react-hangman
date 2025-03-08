import { useEffect } from "react";

const InputForm = ({ letter, setLetter, handleSubmit, incorrectLetters, isGameOver, setIsGameOver}) => {
  // set isGameOver state to true when user exceeds 5 guesses
  useEffect(() => {
    if (incorrectLetters.length > 5) {
      setIsGameOver(true);
      alert('Game Over! You have exceeded the maximum number of incorrect guesses.');
    }
  }, [incorrectLetters, setIsGameOver]); 
  
  return (
    <form onSubmit={handleSubmit}> 
      <input 
        type="text" 
        placeholder="Enter A Letter: "
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
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