import React, { useState } from "react";
import Inputs from "./components/inputs";

export const Paragraph = () => {
  const [letters, setLetters] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [paragraph, setParagraph] = useState("");

  const generateParagraph = () => {
    const loremIpsum =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    const words = loremIpsum.split(" ");

    const repeatedWords = Array.from(
      { length: parseInt(inputValue, 10) },
      (_, index) => words[index % words.length]
    );

    setParagraph(repeatedWords.join(" "));
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex space-x-4 rounded-lg">
          <div className="rounded-s-lg">
            <Inputs
              inputValue={inputValue}
              setInputValue={setInputValue}
              setLetters={setLetters}
            />
          </div>
          <div>
            <button
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={generateParagraph}
            >
              Create paragraph
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center justify-center">
          <div className="col-span-full">
            <div className="max-w-md mx-auto bg-black text-white p-4 mt-4">
              <p>{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
