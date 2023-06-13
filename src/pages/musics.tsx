/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/musics.module.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { api } from "@/pages/api/axios";
import Modal from "@/components/Modal";

export default function Musics() {
  const [playing, setPlaying] = useState(false);
  const [musicsPlaylist, setMusicsPlaylist] = useState([])
  const [urlPlaying, setUrlPlaying] = useState("")
  const router = useRouter();
  const { id, name, img, musics } = router.query;
  const [songs, setSongs] = useState([]);
  const [filteredMusics, setFilteredMusics] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMusicIds, setSelectedMusicIds] = useState([]);

  const handleCreatePlaylist = () => {
    const payload = {
      name: name,
      musics: selectedMusicIds
    };
    console.log("payload:")
    console.log(payload)

    api.post('/playlists', payload)
      .then(response => {
        console.log('Playlist criada com sucesso:', response.data);
        window.alert('Playlist Criada');
      })
      .catch(error => {
        console.error('Erro ao criar a playlist:', error);
      });
  };

useEffect(() => {
  api
    .get("/musics")
    .then((response) => setSongs(response.data))
    .catch((error) => console.log(error));
}, []);

useEffect(() => {
  setFilteredMusics(
    songs.filter((music) =>
      music.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
}, [searchTerm, songs]);

const handleModal = () => {
  setShowModal(!showModal);
};

const handleSearchTermChange = (event) => {
  setSearchTerm(event.target.value);
};

const handleAddMusic = (musicId) => {
  setSelectedMusicIds([...selectedMusicIds, musicId]);
};

  const handlePlay = (url: string) => {
    setUrlPlaying(url)
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const removeMusic = (musicId: string) => {
    const objetoMusics = JSON.parse(musics)

    const selectedMusicIds = []

    for (const music in objetoMusics) {
      if (objetoMusics[music].id !== musicId) {
        selectedMusicIds.push(objetoMusics[music].id);
      }
    }

    const payload = {
      musics: selectedMusicIds
    };

    api.put(`/playlists/${id}`, payload).then((res) => window.location.assign("/")).catch((error) => console.log(error))
  }

  const songsObject = typeof musics === "string" ? JSON.parse(musics) : [];


  const Tocador = (url) => {
    console.log(url.url)
    return (
      <ReactPlayer
        url={url.url}
        playing
        controls={true}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload', // Impede que o usuário faça o download do arquivo
              style: { display: 'none' } // Esconde o player de vídeo
            }
          }
        }}
      />
    )
  }

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
          <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
          <div className={styles.CriarPlaylist}>
            <button className={styles.botaoPlaylist} onClick={handleModal}>
              Criar Playlist
            </button>
          </div>
          {showModal && (
            <Modal handleClose={handleModal}>
              <div className={styles.ListaMusicasPlaylist}>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', height: '3rem'}}>
                  <h2>Criar Playlist</h2>
                </div>
                <form style={{marginTop: '5%', display: 'flex', gap: '1rem', flexDirection: 'column'}}>
                  <label className={styles.Labels} htmlFor="searchInput">Pesquisar nome da música:</label>
                  <input
                    style={{width: '40%', height: '2rem'}}
                    type="text"
                    id="searchInput"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                  />
                </form>
                <h1 style={{ color: "#000" }}>Músicas disponíveis</h1>
                <ul style={{ margin: "0", padding: "0" }}>
                  {filteredMusics.map((music) => (
                    <li key={music.id} className={styles.item2}>
                      <div>{music.name}</div>
                      <button className={styles.Adicionar} onClick={() => handleAddMusic(music.id)}>Adicionar</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{display: 'flex', width: '100%'}}>
                <button onClick={handleCreatePlaylist} className={styles.Criar}>Criar playlist</button>
              </div>
            </Modal>
          )}
          </div>
        </div>
        <div className={styles.musicBox}>
          {playing && (
            <div className={styles.musicCenter}>
              <h2>Central de música</h2>
              <Tocador url={urlPlaying} />
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
