import styles from "@/styles/musics.module.css";
import Image from "next/image";

export default function Musics() {
  return (

    <div style={{ backgroundColor: "#101C27" }}>

        <div className={styles.title}>
            <h1>Músicas</h1>
        </div>

        <div className={styles.boxMusics}>
            <div className={styles.music}>
                <img src='https://images-az.suamusica.com.br/FSekzmqBFR8Crla_u5gVqmHnl6M=/500x500/filters:format(webp)/34309618/3835030/cd_cover.jpg'/>
                <h3>Obsessão</h3>
                <p>Wesley Safadão</p>
            </div>
            <div className={styles.music}>
                <img src='https://i.ytimg.com/vi/ES_fjLSceQ0/maxresdefault.jpg'/>
                <h3>Meu Sonho</h3>
                <p>Tarcisio</p>
            </div>
            <div className={styles.music}>
                <img src='https://akamai.sscdn.co/uploadfile/letras/albuns/a/7/b/0/978631602590790.jpg'/>
                <h3>Aquecimento</h3>
                <p>Dani Bond</p>
            </div>
            <div className={styles.music}>
                <img src="https://assets.dragoart.com/images/9437_501/how-to-draw-death-bat-avenged-sevenfold-deathbat_5e4c93d2c082e0.70709734_41473_3_3.jpg" />
                <h3>Afterlife</h3>
                <p>Avenged sevenfold</p>
            </div>
            <div className={styles.music}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Metallica_logo.png/800px-Metallica_logo.png" />
                <h3>Seek & Destroy</h3>
                <p>Metallica</p>
            </div>
            <div className={styles.music}>
                <img src="https://m.media-amazon.com/images/I/51arpkHwVjL._SY344_BO1,204,203,200_QL70_ML2_.jpg" />
                <h3>Sultans of swings</h3>
                <p>Dire straits</p>
            </div>
            <div className={styles.music}>
                <img src="https://i.ytimg.com/vi/gyKTv31mfdM/maxresdefault.jpg" />
                <h3>Hotel california</h3>
                <p>Eagles</p>
            </div>
            <div className={styles.music}>
                <img src="https://images-az.suamusica.com.br/FSekzmqBFR8Crla_u5gVqmHnl6M=/500x500/filters:format(webp)/34309618/3835030/cd_cover.jpg" />
                <h3>Obsessão</h3>
                <p>Wesley Safadão</p>
            </div>
            <div className={styles.music}>
                <img src="https://images-az.suamusica.com.br/FSekzmqBFR8Crla_u5gVqmHnl6M=/500x500/filters:format(webp)/34309618/3835030/cd_cover.jpg" />
                <h3>Musica Nome</h3>
                <p>Banda/cantor</p>

            </div>
            <div className={styles.music}>
                <img src="https://images-az.suamusica.com.br/FSekzmqBFR8Crla_u5gVqmHnl6M=/500x500/filters:format(webp)/34309618/3835030/cd_cover.jpg" />
                <h3>Musica Nome</h3>
                <p>Banda/cantor</p>
            </div>
            <div className={styles.music}>
                <img src="https://i.ytimg.com/vi/gyKTv31mfdM/maxresdefault.jpg" />
                <h3>Passa Tempo</h3>
                <p>Wesley Safadão</p>
            </div>
        </div>
    </div>
  );
}
