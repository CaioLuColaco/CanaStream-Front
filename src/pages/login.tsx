import * as crypto from "crypto";
import React, { useState } from "react";
import styles from "@/styles/login.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const hashedPassword = crypto
      .createHash("sha512")
      .update(password)
      .digest("base64");
    
    if (localStorage.getItem(username) !== null) {
      const jsonStr = localStorage.getItem(username);
      
      if(jsonStr != null){
          const jsonObj = JSON.parse(jsonStr);
      
          if (jsonObj.password === hashedPassword) {
            alert("Senha correta!");
          } else {
            alert("Senha incorreta!");
          }
        }
    } else {
      alert("Usuário não encontrado!");
    }
  };
  
  return (
    <>
      <Navbar />
      <div className={styles.form_wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Nome de usuário
            <input
              className={styles.input}
              placeholder=""
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className={styles.label}>
            Senha
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className={styles.button_submit} type="submit">
            Entrar
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
