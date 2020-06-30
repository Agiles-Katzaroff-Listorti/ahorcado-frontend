import React from "react";

const GameContext = React.createContext({});
const url = "https://ahorcado-g4.herokuapp.com/";
const GameContextProvider = ({ children }) => {
  const [nick, setNick] = React.useState();
  const [error, setError] = React.useState();
  const [gameState, setGameState] = React.useState(null);
  const login = React.useCallback(async (newNick) => {
    const response = await fetch(url + newNick, {
      method: "POST",
    });
    const state = await response.json();
    if ("nick" in state) {
      setNick(newNick);
      setError(null);
    } else setError(state.error);
  }, []);
  const startGame = React.useCallback(async () => {
    const response = await fetch(`${url}${nick}/start`, {
      method: "POST",
    });
    const state = await response.json();
    setGameState(state);
  }, [nick]);
  const sendLetter = React.useCallback(
    async (letter) => {
      const response = await fetch(`${url}${nick}/guess/${letter}`, {
        method: "POST",
      });
      const state = await response.json();
      setGameState(state);
    },
    [nick]
  );
  const sendWord = React.useCallback(
    async (word) => {
      const response = await fetch(`${url}${nick}/guessword/${word}`, {
        method: "POST",
      });
      const state = await response.json();
      setGameState(state);
    },
    [nick]
  );
  return (
    <GameContext.Provider
      value={{
        nick,
        error,
        gameState,
        login,
        startGame,
        sendLetter,
        sendWord,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
