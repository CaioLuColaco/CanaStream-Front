import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import * as S from '../styles/quemSomos';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Carrossel from '@/components/SecondCarroussel';


const quemSomos = () => {

    return (
        <>
            <Head>
                <title>Agil Mob</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavBar/>
            <S.Main>
                <div>
                    <S.ImagemPessoa1 src='/Ativo 167.png'/>
                    <S.ImgPrincipal src='/Ativo 166.png'/>
                    <S.ImagemPessoa2 src='/Ativo 168.png'/>
                </div>
                <div style={{width: '100%'}}>
                    <S.BoxDados>
                        <S.Dados>
                            <S.Infos>+ de 30</S.Infos>
                            <S.Infos2>Salas entregues</S.Infos2>
                        </S.Dados>
                        <S.Dados>
                            <S.Infos>+ de 30</S.Infos>
                            <S.Infos2>Móveis vendidos</S.Infos2>
                        </S.Dados>
                        <S.Dados>
                            <S.Infos>+ de 30</S.Infos>
                            <S.Infos2><nobr>Anos de experiência</nobr></S.Infos2>
                        </S.Dados>
                    </S.BoxDados>
                    <div style={{width:'100%', paddingTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <p style={{width: '60%'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                    </div>
                </div>
                <S.ContainerValores>
                    <S.BoxValores>
                        <S.Valores>
                            <S.TituloValores>MISSÃO</S.TituloValores>
                            <p style={{fontSize: '.8rem', width: '80%', alignSelf: 'center'}}>Aqui vai breve texto introdutório. Lorem ipsum
dolor sit  amet, consectetur adipiscing elit.
Aliquam pharetra laoreet orci quis scelerisque.</p>
                        </S.Valores>
                        <S.Valores>
                            <S.TituloValores>VISÃO</S.TituloValores>
                            <p style={{fontSize: '.8rem', width: '80%', alignSelf: 'center'}}>Aqui vai breve texto introdutório. Lorem ipsum
dolor sit  amet, consectetur adipiscing elit.
Aliquam pharetra laoreet orci quis scelerisque.</p>
                        </S.Valores>
                        <S.Valores>
                            <S.TituloValores>VALORES</S.TituloValores>
                            <p style={{fontSize: '.8rem', width: '80%', alignSelf: 'center'}}>Aqui vai breve texto introdutório. Lorem ipsum
dolor sit  amet, consectetur adipiscing elit.
Aliquam pharetra laoreet orci quis scelerisque.</p>
                        </S.Valores>
                    </S.BoxValores>
                </S.ContainerValores>
                <div>
                </div>
            </S.Main>
            <Footer/>
        </>
    );
}

export default quemSomos;

