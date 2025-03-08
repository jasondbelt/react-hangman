import { useState, useEffect } from 'react'
import './App.css'
import words from "./words.json"
// import axios from "axios"
import DisplayPuzzle from './components/DisplayPuzzle'
import {AllGuessedLetters, IncorrectLetters} from './components/DisplayLetters'
import InputForm from './components/InputForm'


function App() {
  // SETTING INITIAL PUZZLE
  const [puzzle, setPuzzle] = useState('')
  //get random word from array in words.json file
  const getRandomWord = () => words[Math.floor(Math.random() * words.length)];
  useEffect(() => {
    setPuzzle(getRandomWord()) 
  }, [])

  // Fetch random word from an external API
  // const fetchRandomWord = async () => {
  //   try {
  //     const { data } = await axios.get('https://random-word-api.herokuapp.com/word?number=1');
  //     // console.log(data)
  //     setPuzzle(data[0]);
  //   } catch (error) {
  //     console.error('Error fetching random word:', error);
  //   }
  // };
  // // Call the fetchRandomWord function only when its first rendered
  // useEffect(() => {
  //   fetchRandomWord();
  // }, []);

  
  // SETTING LETTERS, GUESSSED LETTERS, and INCORRECT LETTERS
  const [letter, setLetter] = useState('');
  // store guessed letters in an array
  const [guessedLetters, setGuessedLetters] = useState([]);
  // store incorrect letters in an array
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  // track if the game is over in a boolean 
  const [isGameOver, setIsGameOver] = useState(false);

  // HANDLE FORM SUBMISSION
  const handleSubmit = (event) => {
    event.preventDefault();
    // ensure the input is exactly one lowercase letter
    if (!/^[a-z]$/.test(letter)) {
      alert("Please enter a single lowercase letter");
      setLetter('');
      return;
    }

    // check if user already guessed the letter
    if (guessedLetters.includes(letter)){
      // alert user and clear input field
      alert('You already guessed that letter')
      setLetter('');
      return
    }
    // append new letter to guessedLetters array and clear input field
    setGuessedLetters([...guessedLetters, letter]);
    setLetter('');
    // append incorrect letter to incorrectLetters array
    if (!puzzle.includes(letter)) {
      setIncorrectLetters([...incorrectLetters, letter]);
    }
  };


  // RETURN STATEMENT
  return (
    <>
      <h1>Hangman</h1>
      <div>
        <DisplayPuzzle 
          puzzle={puzzle} 
          guessedLetters={guessedLetters}
          isGameOver={isGameOver} 
          setIsGameOver={setIsGameOver}/>
        <AllGuessedLetters guessedLetters={guessedLetters} />  
        <IncorrectLetters incorrectLetters={incorrectLetters}/>  
      </div>
      <InputForm 
        letter={letter} 
        setLetter={setLetter} 
        handleSubmit={handleSubmit} 
        incorrectLetters={incorrectLetters}
        isGameOver={isGameOver} 
        setIsGameOver={setIsGameOver}/>
    </>
  )
}

export default App

