/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import SmallCard from "./card/SmallCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Homepage /> */}
      <SmallCard/>
    </>
  );
}

export default App;
