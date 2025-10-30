import React from "react";
import "./Cadastro.css";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    
    <div className="login-container">
      <h1>CADASTRO</h1>

      <div className="form-group">
        <label htmlFor="Nome">Nome:</label>
        <input type="text" id="usuario" placeholder="" />
      </div>

      <div className="form-group">
        <label htmlFor="Email">E-mail:</label>
        <input type="password" id="usuario" placeholder="" />
      </div>

      <div className="form-group">
        <label htmlFor="CPF">CPF:</label>
        <input type="text" id="usuario" placeholder="" />
      </div>

        <div className="user-pass">
      <div className="form-group">
        <label htmlFor="Usuario">Usuário:</label>
        <input type="text" id="usuario" placeholder="" />
      </div>

      <div className="form-group">
        <label htmlFor="Senha">Senha:</label>
        <input type="password" id="senha" placeholder="" />
      </div>
    </div>





      <button className="btn-login">CADASTRAR</button>

      <p>OU LOGAR COM</p>
      <div className="social-login">
        <button className="facebook"><FaFacebookF /></button>
        <button className="google"><FaGoogle /></button>
        <button className="apple"><FaApple /></button>
      </div>

      <small>
        Já tem conta? <Link to="/">Login</Link>
      </small>
    </div>
  );
}

export default Cadastro;