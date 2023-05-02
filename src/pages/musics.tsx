/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/musics.module.css'
import Navbar from '../components/Navbar'
import Footer from "@/components/footer"
import { useRouter } from "next/router";
import ReactPlayer from 'react-player';
import { useState } from 'react';

export default function Musics() {

  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };
    
  const router = useRouter();
  const { id, name, img, musics } = router.query;
  const songsObject = typeof musics === 'string' ? JSON.parse(musics) : [];

  return (
    <>
    <main className={styles.main} style={{backgroundColor: '#101C27'}}>
        <Navbar/>
        <div>
            <div className={styles.Container}>
              <div>
                <h1 className={styles.title}>Playlist {name}</h1>
                <div className={styles.ImgBox}>
                  <img className={styles.Logo} src={img as string} alt='' />
                </div>
              </div>
              <div style={{width: '50rem'}}>
                <h1 className={styles.title}>Musicas da playlist {name}</h1>
                <ul style={{margin: '0', padding: '0'}}>
                  {songsObject.map((song:any) => (
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.item}>{song.title}<br/>{song.artist}</li>
                  ))}
                </ul>                
              </div>
            </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
