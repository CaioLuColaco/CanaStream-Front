import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.6); // altera a opacidade aqui
`;

export const Modal = styled.div`
  z-index: 5;
  background-color: #fff;
  position: absolute;
  top: 15%;
  left: 25%;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #f4f4f4;
  border-radius: 2rem;
`;

export const Content = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35rem;
  padding: 3%;
  padding-left: 10%;
  padding-right: 10%;
`;

export const Botao = styled.button`
  width: 20%;
  align-self: flex-end;
  margin-right: 2%;
  background-color: #011E36;
  color: #fff;
  border-radius: .5rem;
  height: 2rem;

  &:hover{
    background-color: #fff;
    color: #011E36;
  }
`;
