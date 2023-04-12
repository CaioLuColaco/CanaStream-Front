import styles from "@/styles/musics.module.css";
import Link from "next/link";


const mockData = [  
  {    
    id: 1,    
    imgSrc: "https://images-az.suamusica.com.br/FSekzmqBFR8Crla_u5gVqmHnl6M=/500x500/filters:format(webp)/34309618/3835030/cd_cover.jpg",    
    title: "Forró",    
    songs: [
      { title: "Xote dos Milagres", artist: "Falamansa" },      
      { title: "Ai Se Eu Te Pego", artist: "Michel Teló" },      
      { title: "Esperando na Janela", artist: "Cavaleiros do Forró" }    
    ]
  },
  {
    id: 2,
    imgSrc: "https://i.ytimg.com/vi/ES_fjLSceQ0/maxresdefault.jpg",
    title: "Sofrência",
    songs: [
      { title: "50 Reais", artist: "Naiara Azevedo" },
      { title: "Dona Maria", artist: "Thiago Brava" },
      { title: "Amor Falso", artist: "Wesley Safadão" }
    ]
  },
  {
    id: 3,
    imgSrc: "https://akamai.sscdn.co/uploadfile/letras/albuns/a/7/b/0/978631602590790.jpg",
    title: "Aleatórias",
    songs: [
      { title: "Happy", artist: "Pharrell Williams" },
      { title: "Shallow", artist: "Lady Gaga, Bradley Cooper" },
      { title: "Blinding Lights", artist: "The Weeknd" }
    ]
  },
  {
    id: 4,
    imgSrc: "https://assets.dragoart.com/images/9437_501/how-to-draw-death-bat-avenged-sevenfold-deathbat_5e4c93d2c082e0.70709734_41473_3_3.jpg",
    title: "Rockzão",
    songs: [
      { title: "Enter Sandman", artist: "Metallica" },
      { title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
      { title: "Highway to Hell", artist: "AC/DC" }
    ]
  },
  {
    id: 5,
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Metallica_logo.png/800px-Metallica_logo.png",
    title: "Old Songs",
    songs: [
      { title: "Bohemian Rhapsody", artist: "Queen" },
      { title: "Stairway to Heaven", artist: "Led Zeppelin" },
      { title: "Hotel California", artist: "Eagles" }
    ]
  }
];


export default function Musics() {
  return (
    <div style={{ backgroundColor: "#101C27", textDecoration: 'none' }}>
      <div className={styles.title}>
        <h1>Playlists</h1>
      </div>
      <div className={styles.boxMusics}>
        {mockData.map((music) => (
          <div key={music.id} className={styles.music}>
            <Link href={{ pathname: "/musics/", query: { id: music.id, title: music.title, img: music.imgSrc, songs: JSON.stringify(music.songs) } }} style={{textDecoration: 'none'}}>
                <img src={music.imgSrc} />
                <h3>{music.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
