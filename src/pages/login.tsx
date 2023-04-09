import React, { useState } from "react";
import styles from "@/styles/login.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { PasswordManager } from "@/utils/password-manager";
import { SessionManager } from "@/utils/session-manager";

export default function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userDataStr = localStorage.getItem(usernameInput);
    if (!userDataStr) {
      alert("Usuário não encontrado");
      return;
    }
    const { password: userHashedPassword, username } = JSON.parse(userDataStr);
    if (PasswordManager.passwordsMatch(passwordInput, userHashedPassword)) {
      const token: string = SessionManager.generateToken(username);
      SessionManager.setToken(token);
      //redirect
    } else {
      alert("Senha incorreta!");
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
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              required
            />
          </label>
          <label className={styles.label}>
            Senha
            <input
              className={styles.input}
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
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
