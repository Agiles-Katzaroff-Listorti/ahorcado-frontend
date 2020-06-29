import React from "react";
import { GameContext } from "../contexts/game-context";
const Login = () => {
  const [nick, setNick] = React.useState("");
  const { login } = React.useContext(GameContext);
  const nickOnChange = (e) => {
    setNick(e.target.value);
  };
  return (
    <div>
      <input
        value={nick}
        onChange={nickOnChange}
        onKeyPress={(e) => e.charCode === 13 && login(nick)}
      />
      <button onClick={() => login(nick)}>Ingresar</button>
    </div>
  );
};

export default Login;
