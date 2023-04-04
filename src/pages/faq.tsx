import React from "react";
import styles from "../styles/faq.module.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";

const FaqScreen: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#101c27" }}>
      <Navbar />
      <div className={styles.faq_container}>
        <h1 className="faq-title">Perguntas frequentes</h1>
        <div>
          <div className={styles.item} title="Como faço para criar uma conta?">
            <p>
              Para criar uma conta, basta clicar em "Sign Up" na página inicial
              e preencher o formulário de registro com suas informações
              pessoais. Após concluir o registro, você pode começar a usar
              nossos serviços imediatamente.
            </p>
          </div>
          <div
            className={styles.item}
            title="Quais são as opções de assinatura disponíveis?"
          >
            <p>
              Temos três opções de assinatura: básica, premium e familiar. A
              assinatura básica é gratuita e permite que você ouça músicas com
              anúncios. A assinatura premium oferece uma experiência livre de
              anúncios e permite que você baixe músicas para ouvir offline. A
              assinatura familiar permite que até seis membros da família usem a
              mesma conta.
            </p>
          </div>
          <div
            className={styles.item}
            title="Como faço para cancelar minha assinatura?"
          >
            <p>
              Você pode cancelar sua assinatura a qualquer momento, basta ir até
              a seção de "Minha Conta" e clicar em Cancelar Assinatura. Depois
              disso, sua assinatura será cancelada e você não será mais cobrado.
            </p>
          </div>
          <div
            className={styles.item}
            title="Posso usar o serviço em vários dispositivos?"
          >
            <p>
              Sim, você pode usar nosso serviço em vários dispositivos. Basta
              fazer o login com suas informações de conta em cada dispositivo
              que deseja usar.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaqScreen;
