
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from "@/components/footer"
import { useRouter } from "next/router";

export default function Musics() {
    
  const router = useRouter();
  const { id } = router.query;

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
      
  return (
    <>
    <main className={styles.main} style={{backgroundColor: '#101C27'}}>
        <Navbar/>
        <div className={styles.title}>
            <h1>Musicas da playlist {id}</h1>
        </div>
        <Footer />
      </main>
    </>
  );
}
