/* eslint-disable consistent-return */
import React from 'react';
import styled from 'styled-components';

import FormularioModal from '../formulario/FormularioModal';

const ModalWrapper = styled.div`
  position: relative;
  z-index: 55;
  border-radius: 8px;
  width: 750px;
  height: 462px;
  background-color: #f4f4f4;
  position: relative;
  margin-top:  -8rem;
  @media (max-width: 780px) {
    width: 95%;
    margin-top:  0;
  }
  @media (max-width: 700px) {
    width: min-content;
  }
`;

const CaixaModal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

const PersonagemContent = styled.div`
    position: relative;
    width: 400px;
    height: 462px;
  @media (max-width: 780px) {
    width: 40%;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
const Personagem = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 500px;
`;

export default function Modal() {
  return (
      <ModalWrapper>
        <CaixaModal>
            <FormularioModal />
            <PersonagemContent>
                <picture>
                <source
                    type="image/webp"
                    srcSet="/static/img/faixa2/personagem-form.webp"
                />
                <Personagem src="/static/img/faixa2/personagem-form.png" alt="" />
                </picture>
            </PersonagemContent>
        </CaixaModal>
      </ModalWrapper>
  );
}
