import { atom } from "recoil";
export const numberOfLetters = atom({
  key: "numberOfLetters",
  default: 0,
});

export const finalParagraph = atom({
  key: "finalParagraph",
  default: " ",
});
