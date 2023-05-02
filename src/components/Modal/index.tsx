import React from 'react';
import * as S from './styles';

interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, handleClose }) => {
  return (
    <S.Container onClick={handleClose}>
      <S.Modal onClick={(e:any) => e.stopPropagation()}>
        <S.Content>{children}
        <S.Botao onClick={handleClose}>Fechar</S.Botao>
        </S.Content>
      </S.Modal>
    </S.Container>
  );
};

export default Modal;
