import styles from '@/styles/musics.module.css'
import Image from 'next/image';

export default function Musics() {
    return (
      <>
        <div className={styles.title}>
            <h1>Músicas</h1>
        </div>

        <div className={styles.boxMusics}>
            <div className={styles.music}>
                <img src='https://images-az.suamusica.com.br/FSekzmqBFR8Crla_u5gVqmHnl6M=/500x500/filters:format(webp)/34309618/3835030/cd_cover.jpg'/>
                <h3>Musica Nome</h3>
                <p>Banda/cantor</p>
            </div>
        </div>
      </>
    );
  }