import styles from '@/styles/navbar.module.css'
import { SessionManager } from '@/utils/session-manager'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        setIsLoggedIn(SessionManager.hasToken())
    })

    return (
        <div className={styles.box}>
            <div className={styles.logoBox}>
                <Image src="/logo.png" alt="logo canastream" width={70} height={70}/>
                <h1>CanaStream</h1>
            </div>

            <div className={styles.boxContent}> 
                {isLoggedIn? <Link href='/' className={styles.link}>Home</Link> : ""}
                <Link href='/faq' className={styles.link}>FAQ</Link>
                <Link href='/signup' className={styles.link}>Cadastro</Link>
                {isLoggedIn? <Link href='/logout' className={styles.link}>Sair</Link> : <Link href='/login' className={styles.link}>Entrar</Link>}
            </div>
        </div>
    )
}