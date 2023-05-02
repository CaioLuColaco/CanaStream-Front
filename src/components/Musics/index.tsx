/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '@/styles/musics.module.css';
import Link from 'next/link';
import { api } from '@/pages/api/axios';
import Modal from '../Modal';


export default function Musics() {
  const [playlists, setPlaylists] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    api.get('/playlists')
      .then((response) => setPlaylists(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div style={{ backgroundColor: '#101C27', textDecoration: 'none' }}>
      <div className={styles.title}>
        <h1>Playlists</h1>
      </div>
      <div className={styles.boxMusics}>
        {playlists.map((playlist) => (
          <div key={playlist.id} className={styles.music}>
            <Link
              href={{
                pathname: '/musics/',
                query: {
                  id: playlist.id,
                  title: playlist.name,
                  // img: playlist.imgSrc,
                  songs: JSON.stringify(playlist.musics),
                },
              }}
              style={{ textDecoration: 'none' }}
            >
              <img src={playlist.imgSrc} />
              <h3>{playlist.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.CriarPlaylist}>
        <button
          className={styles.botaoPlaylist}
          onClick={handleModal}
        >
          Criar Playlist
        </button>
      </div>
      {showModal && (
        <Modal handleClose={handleModal}>
          <h2>Criar Playlist</h2>
          <form>
            <label>
              Nome da playlist:
            </label>
              <input type="text" />
            <button type="submit">Criar</button>
          </form>
        </Modal>
      )}
    </div>
  );
}
