import React, { useState } from "react";
import styles from "@/styles/signup.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("usuario cadastrado");
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
            Email:
            <input
              className={styles.input}
              type="email"
              placeholder="insira seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Cadastrar
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
