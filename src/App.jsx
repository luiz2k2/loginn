import React from "react";
import "./App.css";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="login-container">
      <h1>LOGIN</h1>

      <div className="form-group">
        <label htmlFor="usuario">Usuário:</label>
        <input
          type="text"
          id="usuario"
          placeholder="Digite seu usuário"
          autoComplete="username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          autoComplete="current-password"
        />
      </div>

      <div className="options">
        <label>
          <input type="checkbox" /> Manter conectado
        </label>
        <a href="#">Esqueceu a senha?</a>
      </div>

      <button className="btn-login">ENTRAR</button>

      <p style={{ marginTop: "10px", fontWeight: "500", color: "#444" }}>
        OU LOGAR COM
      </p>

      <div className="social-login">
        <button className="facebook" title="Entrar com Facebook">
          <FaFacebookF />
        </button>
        <button className="google" title="Entrar com Google">
          <FaGoogle />
        </button>
        <button className="apple" title="Entrar com Apple">
          <FaApple />
        </button>
      </div>

      <small>
        Não tem conta? <Link to="/cadastro">Inscreva-se</Link>
      </small>
    </div>
  );
}

export default App;
