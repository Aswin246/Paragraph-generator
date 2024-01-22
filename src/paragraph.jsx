import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { finalParagraph, numberOfLetters } from "./components/atom";

export const Paragraph = () => {
  const [letters, setLetters] = useRecoilState(numberOfLetters);
  const [inputValue, setInputValue] = useState(""); // New state for input value
  const [paragraph, setParagraph] = useRecoilState(finalParagraph);

  function generateParagraph() {
    const loremIpsum =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    const words = loremIpsum.split(" ");
    const filteredWords = words.filter(
      (word) => word.length === parseInt(letters, 10)
    );

    setParagraph(filteredWords.join(" "));
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter the number of words"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setLetters(parseInt(e.target.value, 10));
          }}
        />
      </div>

      <button onClick={generateParagraph}>Create paragraph</button>
      <p>{paragraph}</p>
    </>
  );
};
