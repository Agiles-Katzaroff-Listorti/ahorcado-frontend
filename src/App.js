import React from "react";
import "./App.scss";
import { GameContext } from "./contexts/game-context";
import Login from "./views/login";
import GameSelect from "./views/game-select";
import Game from "./views/game";

function App() {
  const { nick, gameState } = React.useContext(GameContext);
  const renderView = () => {
    if (!nick) return <Login />;
    if (!gameState || gameState.gano || gameState.perdio) return <GameSelect />;
    return <Game />;
  };
  return <div>{renderView()}</div>;
}

export default App;
