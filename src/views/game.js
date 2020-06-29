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
    <div>
      <div>Pista: {gameState.pista.toUpperCase().split("").join(" ")}</div>
      <Hangman fails={gameState.fallos}/>
      <div>
        {letters.map((letter) => (
          <button onClick={() => sendLetter(letter)}>
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
      <div>
        Arriesgar palabra:
        <input
          value={word}
          onChange={wordOnChange}
          onKeyPress={(e) => e.charCode === 13 && sendWord(word)}
        />
        <button onClick={() => sendWord(word)}>Enviar</button>
      </div>
    </div>
  );
};

export default Game;
