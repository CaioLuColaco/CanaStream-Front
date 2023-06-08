import { useAuth } from "@/context/auth-context";
import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { isAuthenticated, signOut } = useAuth();

  return (
    <div className={styles.box}>
      <div className={styles.logoBox}>
        <Image src="/logo.png" alt="logo canastream" width={70} height={70} />
        <h1>CanaStream</h1>
      </div>

      <div className={styles.boxContent}>
        {isAuthenticated ? (
          <Link href="/" className={styles.link}>
            Playlists
          </Link>
        ) : (
          ""
        )}
        <Link href="/faq" className={styles.link}>
          FAQ
        </Link>
        {!isAuthenticated && (
          <Link href="/signup" className={styles.link}>
            Cadastro
          </Link>
        )}
        {isAuthenticated && (
          <Link href="/userUpdate" className={styles.link}>
            editar perfil
          </Link>
        )}

        {isAuthenticated ? (
          <Link onClick={signOut} className={styles.link} href={""}>
            Sair
          </Link>
        ) : (
          <Link href="/login" className={styles.link}>
            Entrar
          </Link>
        )}
      </div>
    </div>
  );
}
