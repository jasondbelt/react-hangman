import { useState, useEffect } from 'react'
import './App.css'
// import words from "./words.json"
import axios from "axios"
// import displayPuzzle from './components/DisplayPuzzle'
import IncorrectLetters from './components/IncorrectLetters'
import InputForm from './components/InputForm'


function App() {
  // SETTING INITIAL PUZZLE
  const [puzzle, setPuzzle] = useState('')
  // get random word from array in words.json file
  // const getRandomWord = () => words[Math.floor(Math.random() * words.length)];
  // useEffect(() => {
  //   setPuzzle(getRandomWord()) 
  // }, [])

  // Fetch random word from an external API
  const fetchRandomWord = async () => {
    try {
      const { data } = await axios.get('https://random-word-api.herokuapp.com/word?number=1');
      setPuzzle(data[0]);
    } catch (error) {
      console.error('Error fetching random word:', error);
    }
  };
  // Call the fetchRandomWord function when the component mounts
  useEffect(() => {
    fetchRandomWord();
  }, []);

  
  // SETTING LETTERS, GUESSSED LETTERS, INCORRECT LETTERS, and ISGAMEOVER STATES
  const [letter, setLetter] = useState('');
  // store guessed letters in an array
  const [guessedLetters, setGuessedLetters] = useState([]);
  // store incorrect letters in an array
  const [incorrectLetters, setIncorrectLetters] = useState([]); 
  // track if the game is over in a boolean
  const [isGameOver, setIsGameOver] = useState(false);


  // DISPLAY PUZZLE WITH UNDERSCORES FOR UNGUESSED LETTERS
  const displayPuzzle = puzzle
    .split('')
    .map((char) => (guessedLetters.includes(char) ? char : '_'))
    .join(' ');
   

  // HANDLE FORM SUBMISSION
  const handleSubmit = (event) => {
    event.preventDefault();
    // check if user already guessed the letter
    if (guessedLetters.includes(letter)){
      // alert user and clear input field
      alert('You Already Guessed That Letter')
      setLetter("");
      return
    }
    // append new letter to guessedLetters array
    setGuessedLetters([...guessedLetters, letter]);
    setLetter(""); // Clear input field
    // // append incorrect letter to incorrectLetters array
    if (!puzzle.includes(letter)) {
      setIncorrectLetters([...incorrectLetters, letter]);
    }
  };

  // CHECKS IF THE GAME IS OVER AND UPDATES ISGAMEOVER BOOLEAN ACCORDINGLY
  useEffect(() => {
    if (incorrectLetters.length > 5) {
      setIsGameOver(true);  // Set the game over state
      alert('Game Over! You have exceeded the maximum number of incorrect guesses.');
    }
  }, [incorrectLetters]);  // Trigger when incorrectLetters changes


  // RETURN STATEMENT
  return (
    <>
      <h1>Hangman</h1>
      <div>
        <p>{displayPuzzle}</p>
        <p>Guessed Letters: {guessedLetters.join(", ")}</p>
        <p>Incorrect Letters: {incorrectLetters.join(", ")}</p>
      </div>
      <form onSubmit={handleSubmit}> 
        <input 
          type="text" 
          placeholder="Enter A Letter: "
          value={letter}
          // allow only one lowercase letter
          onChange={(e) => {
            const value = e.target.value;
            if (/[a-z]/.test(value)) {  
              setLetter(value);
            }
          }}
          // ensures only one character can be typed
          maxLength={1}  
          // disable input when game is over
          disabled={isGameOver}/>  
        <input type="submit" 
          value="Submit" 
          disabled={isGameOver}/>
      </form>
    </>
  )
}

export default App

