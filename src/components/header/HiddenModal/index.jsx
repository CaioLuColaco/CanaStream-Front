import Link from 'next/link'
import * as S from "./styles";

const HiddenModal = ({ open, back }) => {
  return (
    <S.HeaderModal style={{ display: open ? "flex" : "none" }}>
      <S.HeaderModalContent>
        <S.HeaderModalMenuItems>
          <Link href="/" style={{ textDecoration: "none", color: "#8d9ebc" }}>
            HOME
          </Link>
        </S.HeaderModalMenuItems>
        <S.HeaderModalMenuItems>
          <Link
            href="/sobre"
            style={{ textDecoration: "none", color: "#8d9ebc" }}
          >
            SOBRE NÓS
          </Link>
        </S.HeaderModalMenuItems>
        <S.HeaderModalMenuItems>
          <Link
            href="/equipe"
            style={{ textDecoration: "none", color: "#8d9ebc" }}
          >
            NOSSA EQUIPE
          </Link>
        </S.HeaderModalMenuItems>
        <S.HeaderModalMenuItems>
          <Link
            href="/especialidades"
            style={{ textDecoration: "none", color: "#8d9ebc" }}
          >
            ESPECIALIDADES
          </Link>
        </S.HeaderModalMenuItems>
        <S.HeaderModalMenuItems>
          <Link
            href="/imprensa"
            style={{ textDecoration: "none", color: "#8d9ebc" }}
          >
            IMPRENSA
          </Link>
        </S.HeaderModalMenuItems>
        <S.HeaderModalMenuItems>
          <Link
            href="/contato"
            style={{ textDecoration: "none", color: "#8d9ebc" }}
          >
            CONTATO
          </Link>
        </S.HeaderModalMenuItems>

        <S.HeaderModalVoltar
          onClick={() => {
            back(false);
          }}
        >
          Voltar
        </S.HeaderModalVoltar>
      </S.HeaderModalContent>
    </S.HeaderModal>
  );
};

export default HiddenModal;
