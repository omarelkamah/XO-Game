import Heading from "./components/Heading";
import "./App.css";
import { useState } from "react";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import Table from "./components/table/Table";

function App() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [startPlay, setStartPlay] = useState(false);

  console.log(playerOne);

  return (
    <div className="appContainer">
      <Heading />

      {startPlay ? (
        <Table playerOne={playerOne} playerTwo={playerTwo} />
      ) : (
        <AddPlayer
          playerOne={playerOne}
          setPlayerOne={setPlayerOne}
          playerTwo={playerTwo}
          setPlayerTwo={setPlayerTwo}
          setStartPlay={setStartPlay}
        />
      )}
    </div>
  );
}

export default App;
