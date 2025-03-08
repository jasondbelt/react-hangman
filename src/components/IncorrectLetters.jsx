const IncorrectLetters = ({ incorrectLetters }) => {
  return (
    <p>Incorrect Letters: {incorrectLetters.join(', ')}</p>
  );
};

export default IncorrectLetters;