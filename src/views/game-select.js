import { GameContext } from "../contexts/game-context";
import React from "react";
import Hangman from "../components/hangman";

const GameSelect = () => {
  const { nick, startGame, gameState } = React.useContext(GameContext);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "30px",
        margin: "10px",
        minWidth: "250px",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto",
          justifyContent: "center",
          rowGap: "10px",
        }}
      >
        {!gameState && <div>Bienvenido {nick}!</div>}
        {gameState && (
          <React.Fragment>
            <div>
              {gameState.perdio ? "Perdiste" : "Ganaste"}! La palabra era{" "}
              {gameState.palabra.toUpperCase()}
            </div>
            {gameState.perdio && (
              <Hangman hanged={true} fails={gameState.fallos} />
            )}
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
    </div>
  );
};

export default GameSelect;
