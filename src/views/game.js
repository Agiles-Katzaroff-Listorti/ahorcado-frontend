import React from "react";
import { GameContext } from "../contexts/game-context";
import Hangman from "../components/hangman";

const Game = () => {
  const { gameState, sendLetter, sendWord } = React.useContext(GameContext);
  const [usedLetters, setUsedLetters] = React.useState(new Set());
  const letters = React.useMemo(() => {
    return [].concat.apply([], Array(26)).map(function (_, i) {
      return String.fromCharCode(i + 65);
    });
  }, []);
  const [word, setWord] = React.useState("");
  const wordOnChange = (e) => setWord(e.target.value);
  const onSendLetter = (letter) => {
    setUsedLetters((usedLetters) => usedLetters.add(letter));
    sendLetter(letter);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        overflowY: "auto",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <Hangman fails={gameState.fallos} />
        <div style={{ letterSpacing: "5px" }}>
          {gameState.pista.toUpperCase()}
        </div>
      </div>
      <div style={{ flexBasis: "50%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 70px)",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          {letters.map((letter) => (
            <button
              style={{ padding: "10px" }}
              disabled={usedLetters.has(letter)}
              onClick={() => onSendLetter(letter)}
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            value={word}
            onChange={wordOnChange}
            onKeyPress={(e) => e.charCode === 13 && sendWord(word)}
            id={"guessWordInput"}
          />
          <button style={{ marginLeft: "5px" }} onClick={() => sendWord(word)} id={"guessWordBtn"}>
            Arriesgar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
