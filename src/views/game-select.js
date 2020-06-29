import { GameContext } from "../contexts/game-context";
import React from "react";
import Hangman from "../components/hangman";

const GameSelect = () => {
  const { nick, startGame, gameState } = React.useContext(GameContext);
  return (
    <div>
      {!gameState && <div>Bienvenido {nick}!</div>}
      {gameState && (
        <React.Fragment>
          <div>
            {gameState.perdio ? "Perdiste" : "Ganaste"}! La palabra era{" "}
            {gameState.palabra.toUpperCase()}
          </div>
          {gameState.perdio && <Hangman hanged={true} fails={gameState.fallos}/>}
          {gameState.juegosTotales > 0 && (
            <div>
              Llevás {gameState.juegosGanados} de {gameState.juegosTotales}{" "}
              partidas ganadas.
            </div>
          )}
        </React.Fragment>
      )}
      <button onClick={startGame}>Jugar{gameState && " de nuevo"}</button>
    </div>
  );
};

export default GameSelect;
