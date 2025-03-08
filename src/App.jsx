import { useState, useEffect } from 'react'
import './App.css'
// import words from "./words.json"
import axios from "axios"
import DisplayPuzzle from './components/DisplayPuzzle'
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


  // RETURN STATEMENT
  return (
    <>
      <h1>Hangman</h1>
      <div>
        <DisplayPuzzle puzzle={puzzle} guessedLetters={guessedLetters}/>
        <p>Guessed Letters: {guessedLetters.join(", ")}</p>
        <IncorrectLetters incorrectLetters = {incorrectLetters}/>
      </div>
      <InputForm 
        letter={letter} 
        setLetter={setLetter} 
        handleSubmit={handleSubmit} 
        incorrectLetters={incorrectLetters}
      />
    </>
  )
}

export default App

