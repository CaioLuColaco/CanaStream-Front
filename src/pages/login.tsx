import React, { useState } from "react";
import styles from "@/styles/login.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { useAuth } from "@/context/auth-context";

export default function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signIn({ email, password });
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
