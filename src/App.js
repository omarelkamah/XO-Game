import Heading from "./components/Heading";
import "./App.css";
import AddPlayer from "./components/AddPlayer";
import { useState } from "react";
import PlayersDetails from "./components/PlayersDetails";

function App() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  console.log(playerOne);

  return (
    <div className="appContainer">
      <Heading />
      <PlayersDetails playerOne={playerOne} playerTwo={playerTwo} />
      <AddPlayer
        playerOne={playerOne}
        setPlayerOne={setPlayerOne}
        playerTwo={playerTwo}
        setPlayerTwo={setPlayerTwo}
      />
    </div>
  );
}

export default App;
