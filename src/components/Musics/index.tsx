/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/musics.module.css";
import Link from "next/link";
import { api } from "@/pages/api/axios";
import Modal from "../Modal";

export default function Musics() {
  const [playlists, setPlaylists] = useState([]);
  const [musics, setMusics] = useState([]);
  const [filteredMusics, setFilteredMusics] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMusicIds, setSelectedMusicIds] = useState([]);
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');

    const handleCreatePlaylist = () => {
      const payload = {
        name: name,
        imgUrl: imgUrl,
        musics: selectedMusicIds
      };

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
      .get("/playlists")
      .then((response) => setPlaylists(response.data))
      .catch((error) => console.log(error));

    api
      .get("/musics")
      .then((response) => setMusics(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setFilteredMusics(
      musics.filter((music) =>
        music.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, musics]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddMusic = (musicId) => {
    setSelectedMusicIds([...selectedMusicIds, musicId]);
  };
  
  return (
    <div style={{ backgroundColor: "#101C27", textDecoration: "none" }}>
      <div className={styles.title}>
        <h1>Playlists</h1>
      </div>
      <div className={styles.boxMusics}>
        {playlists.map((playlist) => (
          <div key={playlist.id} className={styles.music}>
            <Link
              href={{
                pathname: "/musics/",
                query: {
                  id: playlist.id,
                  name: playlist.name,
                  img: playlist.imgUrl,
                  musics: JSON.stringify(playlist.musics),
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <img src={playlist.imgUrl} />
              <h3>{playlist.name}</h3>
            </Link>
          </div>
        ))}
      </div>
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
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <label className={styles.Labels2}>Nome da playlist:</label>
                <input
                  style={{ height: '1.5rem' }}
                  type="text"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column'}}>
                <label className={styles.Labels2}>URL da imagem:</label>
                <input
                  style={{ height: '1.5rem' }}
                  type="text"
                  value={imgUrl}
                  onChange={event => setImgUrl(event.target.value)}
                />
              </div>
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
  );
}
