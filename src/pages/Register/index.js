import { useState } from "react";

import { Link } from "react-router-dom";
import {auth} from '../../firebaseConnection'
import  { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if (email !== "" && senha !== "") {
      await createUserWithEmailAndPassword(auth,email,senha)
      .then(()=>{
        navigate('/admin',{replace:true})
      })
      .catch(()=>{
        console.log("Erro ao fazer o cadastro")
      })
      

    }else{
        alert("PREENCHA TODO OS CAMPOS")
    }
  }

  return (
    <div className="home-container">
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta.</span>

      <form className="form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="*****"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <Link className="button-link" to="/">
        Já possui uma conta? Faça login!
      </Link>
    </div>
  );
}