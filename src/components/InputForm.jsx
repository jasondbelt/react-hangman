const InputForm = ({ letter, setLetter, handleSubmit, isGameOver }) => {
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