import React from "react";

const Inputs = ({ inputValue, setInputValue, setLetters }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    setLetters((prevLetters) => {
      const intValue = parseInt(value, 10);
      return isNaN(intValue) ? 0 : intValue;
    });
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter the number of words"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Inputs;
