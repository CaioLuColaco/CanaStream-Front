import styles from '@/styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar(props) {
    return (
        <div className={styles.box}>
            <div className={styles.logoBox}>
                <Image src="/logo.png" width={70} height={70}/>
                <h1>CanaStream</h1>
            </div>

            <div className={styles.boxContent}> 
                <Link href='/' className={styles.link}>Home</Link>
                <Link href='/faq' className={styles.link}>FAQ</Link>
                <Link href='/signup' className={styles.link}>Cadastro</Link>
            </div>
        </div>
    )
}