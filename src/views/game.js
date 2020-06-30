import React from "react";
import { GameContext } from "../contexts/game-context";
import Hangman from "../components/hangman";

const Game = () => {
  const { gameState, sendLetter, sendWord } = React.useContext(GameContext);
  const letters = React.useMemo(() => {
    return [].concat.apply([], Array(26)).map(function (_, i) {
      return String.fromCharCode(i + 65);
    });
  }, []);
  const [word, setWord] = React.useState("");
  const wordOnChange = (e) => setWord(e.target.value);

  return (
    <div className="container gameContainer">
      <div className="pista">Pista: {gameState.pista.toUpperCase().split("").join(" ")}</div>
      <Hangman fails={gameState.fallos} />
      <div className="letras">
        {letters.map((letter) => (
          <button className="btn" onClick={() => sendLetter(letter)}>
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="form">
        Arriesgar palabra:
        <input
          value={word}
          onChange={wordOnChange}
          onKeyPress={(e) => e.charCode === 13 && sendWord(word)}
        />
        <button className="btn primary" onClick={() => sendWord(word)}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Game;
