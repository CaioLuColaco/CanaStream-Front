/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/musics.module.css'
import Navbar from '../components/Navbar'
import Footer from "@/components/footer"
import { useRouter } from "next/router";

export default function Musics() {
    
  const router = useRouter();
  const { id, title, img, songs } = router.query;
  const songsObject = typeof songs === 'string' ? JSON.parse(songs) : [];

  return (
    <>
    <main className={styles.main} style={{backgroundColor: '#101C27'}}>
        <Navbar/>
        <div>
            <div className={styles.Container}>
              <div>
                <h1 className={styles.title}>Playlist {title}</h1>
                <div className={styles.ImgBox}>
                  <img className={styles.Logo} src={img as string} alt='' />
                </div>
              </div>
              <div style={{width: '50rem'}}>
                <h1 className={styles.title2}>Musicas da playlist {title}</h1>
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
