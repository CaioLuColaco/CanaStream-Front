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
            <h2>Criar Playlist</h2>
            <form>
              <label htmlFor="searchInput">Nome da música:</label>
              <input
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
                  <button className={styles.Adicionar}>Adicionar</button>
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
}
