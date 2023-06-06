import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import Musics from "@/components/Musics";
import { SessionManager } from "@/utils/session-manager";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>CanaStream</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
      </Head>

      <div>
        <main className={styles.main} style={{ backgroundColor: "#101C27" }}>
          <Navbar />

          <Musics />

          <Footer />
        </main>
      </div>
    </>
  );
}
