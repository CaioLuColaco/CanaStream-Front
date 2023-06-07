import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import styles from "@/styles/login.module.css";
import { api } from "./api/axios";
import jwtDecode from "jwt-decode";


function UserUpdate() {
    const [currentPassword, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
        let token = localStorage.getItem("token");

        if (!token)
            token = "";
        const tokenD = jwtDecode(token);
        
        try {
            const response = await api.put(`/users/${tokenD.id}`, {
                email,
                username,
                newPassword,
                currentPassword
            });

        } catch (error) {
            window.alert(error);
            window.alert("Deu errado");
        }
    }

    return (
        <>
            <Navbar />
            <div className={styles.form_wrapper}>
                <form className={styles.form}>
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
                        username
                        <input
                            className={styles.input}
                            placeholder=""
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>

                    <label className={styles.label}>
                        Senha Atual
                        <input
                            className={styles.input}
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Senha Nova
                        <input
                            className={styles.input}
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </label>

                    <button className={styles.button_submit} onClick={handleSubmit}>
                        editar perfil
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default UserUpdate;