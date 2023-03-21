import * as S from "./styles";
// import headerLogo from "../../assets/images/headerLogo.svg";
import Link from 'next/link'
import SandwichMenu from "./SandwichMenu";
import HiddenModal from "./HiddenModal";
import { useState } from "react";
import Image from 'next/image'

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderBox>
          <Image src="/logo.png" width={140} height={140} style={{marginLeft: '12.5%'}}/>

          <S.Menu>
            <S.MenuItem>
              <Link href="/" style={{ textDecoration: "none", color: "#8d9ebc" }}>
                HOME
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link
                href="/sobre"
                style={{ textDecoration: "none", color: "#8d9ebc" }}
              >
                SOBRE NÓS
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link
                href="/equipe"
                style={{ textDecoration: "none", color: "#8d9ebc" }}
              >
                NOSSA EQUIPE
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link
                href="/especialidades"
                style={{ textDecoration: "none", color: "#8d9ebc" }}
              >
                ESPECIALIDADES
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link
                href="/imprensa"
                style={{ textDecoration: "none", color: "#8d9ebc" }}
              >
                IMPRENSA
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link
                href="/contato"
                style={{ textDecoration: "none", color: "#8d9ebc" }}
              >
                CONTATO
              </Link>
            </S.MenuItem>
          </S.Menu>

          <SandwichMenu onClick={setOpenModal} />
        </S.HeaderBox>
      </S.HeaderContainer>
      <HiddenModal open={openModal} back={setOpenModal} />
    </>
  );
};

export default Header;
