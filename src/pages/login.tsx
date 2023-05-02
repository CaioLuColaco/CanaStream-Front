import React, { useState } from "react";
import cookie from "js-cookie";
import styles from "@/styles/login.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { SessionManager } from "@/utils/session-manager";
import { api } from "./api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      window.alert(response.status);
      window.alert("Deu certo");
      if (response.status == 200) {
        cookie.set("token", response.data.token);
        SessionManager.redirect("/");
      }
    } catch (error) {
      window.alert(error);
      window.alert("Deu errado");
    }
  };
  return (
    <>
      <Navbar />
      <div className={styles.form_wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              placeholder=""
              type="text"
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
            Entrar
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
