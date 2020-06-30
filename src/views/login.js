import React from "react";
import { GameContext } from "../contexts/game-context";
const Login = () => {
  const [nick, setNick] = React.useState("");
  const { login, error } = React.useContext(GameContext);
  const nickOnChange = (e) => {
    setNick(e.target.value);
  };
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
        <h3>Bienvenido al Ahorcado</h3>
        <label htmlFor="nick">Ingrese Nick</label>
        <input
          id="nick"
          value={nick}
          onChange={nickOnChange}
          onKeyPress={(e) => e.charCode === 13 && login(nick)}
        />
        {error && <div style={{ color: "red" }}>El nick ya está en uso</div>}
        <button id="loginBtn" onClick={() => login(nick)}>
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Login;
