import Heading from "./components/Heading";
import "./App.css";
import AddPlayer from "./components/AddPlayer";
import { useState } from "react";
import PlayersDetails from "./components/PlayersDetails";

function App() {
  const [playerOne, setPlayerOne] = useState();
  console.log(playerOne);
  return (
    <div className="appContainer">
      <Heading />
      <PlayersDetails playerOne={playerOne} />
      <AddPlayer setPlayerOne={setPlayerOne} />
    </div>
  );
}

export default App;
