/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/musics.module.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { api } from "@/pages/api/axios";

export default function Musics() {
  const [playing, setPlaying] = useState(false);

  const handlePlay = (url: string) => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const removeMusic = (id: string) => {
    api.post(`/playlist/${id}`).then((res) => window.location.reload()).catch((error) => console.log(error))
  }

  const router = useRouter();
  const { id, name, img, musics } = router.query;
  const songsObject = typeof musics === "string" ? JSON.parse(musics) : [];
  useEffect(() => {
    console.log(songsObject)
  })

  return (
    <>
      <main className={styles.main} style={{ backgroundColor: "#101C27" }}>
        <Navbar />
        <div>
          <div className={styles.Container}>
            <div>
              <h1 className={styles.title}>Playlist {name}</h1>
              <div className={styles.ImgBox}>
                <img className={styles.Logo} src={img as string} alt="" />
              </div>
            </div>
            <div style={{ width: "50rem" }}>
              <h1 className={styles.title}>Musicas da playlist {name}</h1>
              <ul style={{ margin: "0", padding: "0" }}>
                {songsObject.map((music: any) => (
                  <li key={music.id} className={styles.item}>
                    <p>{music.name}</p>
                    <div className={styles.buttonsBox}>
                      <button onClick={() => handlePlay(music.url)}>Play</button>
                      <button onClick={() => removeMusic(music.id)}>Remover</button>
                    </div>
                  </li>
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
