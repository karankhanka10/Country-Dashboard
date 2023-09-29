/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import SmallCard from "./card/SmallCard";
import LargeCardChakra from "./card/LargeCardChakra";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Homepage /> */}
      {/* <SmallCard/> */}
      <LargeCardChakra/>
    </>
  );
}

export default App;