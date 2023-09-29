/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import LargeCardChakra from "./card/LargeCardChakra";
import Homepage from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
