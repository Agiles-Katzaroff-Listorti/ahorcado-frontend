import React from "react";
import { GameContext } from "../contexts/game-context";
const Login = () => {
  const [nick, setNick] = React.useState("");
  const { login } = React.useContext(GameContext);
  const nickOnChange = (e) => {
    setNick(e.target.value);
  };
  return (
    <div className="flex col loginForm">
      <h3>Bienvenido al Ahorcado</h3>
      <label htmlFor="nick">Ingrese Nick</label>
      <input
        id="nick"
        value={nick}
        onChange={nickOnChange}
        onKeyPress={(e) => e.charCode === 13 && login(nick)}
      />
      <button className="btn primary" onClick={() => login(nick)}>
        Ingresar
      </button>
    </div>
  );
};

export default Login;
