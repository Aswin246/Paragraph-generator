import { RecoilRoot } from "recoil";
import "./App.css";
import { Paragraph } from "./paragraph";

function App() {
  return (
    <>
      <RecoilRoot>
        <Paragraph />
      </RecoilRoot>
    </>
  );
}

export default App;
