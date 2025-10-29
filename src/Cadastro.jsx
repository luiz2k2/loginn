import React from "react";
import "./Cadastro.css";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="cadastro-container">
      <h1>CADASTRO</h1>

      <div className="form-group">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome completo" />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" />
      </div>

      <div className="form-group">
        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf" placeholder="Digite seu CPF" />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="usuario">Usuário:</label>
          <input type="text" id="usuario" placeholder="Crie seu usuário" />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" placeholder="Crie sua senha" />
        </div>
      </div>

      <button className="btn-cadastrar">CADASTRAR</button>

      <p>OU CADASTRAR COM</p>
      <div className="social-login">
        <button className="facebook">
          <FaFacebookF />
        </button>
        <button className="google">
          <FaGoogle />
        </button>
        <button className="apple">
          <FaApple />
        </button>
      </div>

      <small>
        Já tem conta? <Link to="/">Login</Link>
      </small>
    </div>
  );
}

export default Cadastro;
