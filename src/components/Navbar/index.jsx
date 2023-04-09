import styles from '@/styles/navbar.module.css'
import { SessionManager } from '@/utils/session-manager'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Navbar(props) {
    const isLoggedIn = SessionManager.hasToken()
    const loginItemText = isLoggedIn ? "Sair" : "Entrar"
    return (
        <div className={styles.box}>
            <div className={styles.logoBox}>
                <Image src="/logo.png" width={70} height={70}/>
                <h1>CanaStream</h1>
            </div>

            <div className={styles.boxContent}> 
                {isLoggedIn && <Link href='/' className={styles.link}>Home</Link>}
                <Link href='/faq' className={styles.link}>FAQ</Link>
                <Link href='/signup' className={styles.link}>Cadastro</Link>
                <Link href='/login' className={styles.link}>{loginItemText}</Link>
            </div>
        </div>
    )
}