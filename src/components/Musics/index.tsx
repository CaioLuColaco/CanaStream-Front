import styles from "@/styles/musics.module.css";
import Link from "next/link";
import Image from "next/image";

const mockData = [
  {
    id: 1,
    imgSrc: "https://images-az.suamusica.com.br/FSekzmqBFR8Crla_u5gVqmHnl6M=/500x500/filters:format(webp)/34309618/3835030/cd_cover.jpg",
    title: "Forró",
  },
  {
    id: 2,
    imgSrc: "https://i.ytimg.com/vi/ES_fjLSceQ0/maxresdefault.jpg",
    title: "Sofrência",
  },
  {
    id: 3,
    imgSrc: "https://akamai.sscdn.co/uploadfile/letras/albuns/a/7/b/0/978631602590790.jpg",
    title: "Aleatórias",
  },
  {
    id: 4,
    imgSrc: "https://assets.dragoart.com/images/9437_501/how-to-draw-death-bat-avenged-sevenfold-deathbat_5e4c93d2c082e0.70709734_41473_3_3.jpg",
    title: "Rockzão",
  },
  {
    id: 5,
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Metallica_logo.png/800px-Metallica_logo.png",
    title: "Old Songs",
  }
];

export default function Musics() {
  return (
    <div style={{ backgroundColor: "#101C27", textDecoration: 'none' }}>
      <div className={styles.title}>
        <h1>Playlists</h1>
      </div>
      <div className={styles.boxMusics}>
        {mockData.slice(0, 5).map((music) => (
          <div key={music.id} className={styles.music}>
            <Link href={{ pathname: "/musics/", query: { id: music.id } }} style={{textDecoration: 'none'}}>
                <img src={music.imgSrc} />
                <h3>{music.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
