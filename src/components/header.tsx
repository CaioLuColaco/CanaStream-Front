import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.logo}>CanaStream</h1>
      <div className={styles.navbar_items}>
        <Link href="/sign-up" className={styles.navbar_item}>
          Home
        </Link>
        <Link href="" className={styles.navbar_item}>
          FAQ
        </Link>
        <Link href="" className={styles.navbar_item}>
          Cadastre-se
        </Link>
      </div>
    </header>
  );
}
