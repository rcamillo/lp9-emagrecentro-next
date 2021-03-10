import { useEffect, useState } from "react";

import styled from "styled-components";
import Head from "next/head";

import Container from "../components/ui/containers/Container";
import FormularioContinue from "../components/formulario/FormularioContinue";

import {
  FaixaConteudoResponsive,
  Faixa1Texto,
  LogoContent,
  Logo,
  Title
} from "../components/conteudo/Faixa1";

import { FaixaWrapper } from "../components/ui/faixas/FaixaStyles";

export const FaixaWrapperSucesso = styled(FaixaWrapper)`
  background-color: ${props => props.theme.client.colors.azul};
`;

export const FaixaConteudo = styled(FaixaConteudoResponsive)`
  max-width: 100% !important;
`;

export const FaixaSucessoTexto = styled(Faixa1Texto)`
  max-width: 100rem;

  @media (max-width: 1110px) {
    max-width: 80rem;
  }
  @media (max-width: 900px) {
    align-items: center;
    max-width: 100%;
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const LogoSucesso = styled(Logo)`
  width: 200px;
`;

const TitleSucesso = styled(Title)`
  color: ${props => props.theme.client.colors.verdeClaro};
  font-weight: 800;
`;

const TitleSimple = styled.p`
  color: white;
  font-size: 17px;

  margin-bottom: 4rem;
`;

export const ContentIconsTop = styled.div`
  display: flex;
  position: absolute;
  right: 13%;
  top: 2rem;

  @media (max-width: 600px) {
    right: 2rem;
  }
`;

export const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  width: 3rem;
  height: 3rem;
  margin-left: 1.5rem;
`;

const FormWrapper = styled.div`
  position: relative;
`;

const ContentPersonagem = styled.div`
  position: absolute;
  bottom: -29px;
  right: -550px;
  z-index: 100;

  @media (max-width: 1110px) {
    right: -460px;
  }
  @media (max-width: 992px) {
    right: -440px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
const Personagem = styled.img`
  height: 600px;
  width: 600px;

  @media (max-width: 1110px) {
    height: 500px;
    width: 500px;
  }

  @media (max-width: 992px) {
    height: 480px;
    width: 480px;
  }
`;

const Sucesso = () => (
  <div>
    <Head>
      <title>
        Fature até R$ 15 mil POR MÊS com a franquia home office Total Clean!
      </title>
      <meta
        name="description"
        content="Total Clean é a microfranquia home office TOP OF MIND no setor de limpeza e impermeabilização de sofás, estofados e tapetes. Baixe nossa apresentação."
      />
      <meta
        name="keywords"
        content="microfranquia, microfranquia home office, microfranquia online barata, franquia impermeabilização, franquia limpeza de estofados, total clean franquia, higienização de sofá, franquia sofá, franquia limpeza estofados"
      />
      <meta name="robots" content="index, follow" />
      <meta name="rating" content="general" />

      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://franquiaimpermeabilizacao.com.br/static/img/og.jpg"
      />
      <meta
        property="og:title"
        content="Fature até R$ 15 mil POR MÊS com a franquia home office Total Clean!"
      />
      <meta
        property="og:description"
        content="Total Clean é a microfranquia home office TOP OF MIND no setor de limpeza e impermeabilização de sofás, estofados e tapetes. Baixe nossa apresentação."
      />
      <meta
        property="og:url"
        content="https://franquiaimpermeabilizacao.com.br/"
      />
    </Head>
    <FaixaWrapperSucesso>
      <Container>
        <FaixaConteudo>
          <FaixaSucessoTexto>
            <LogoContent>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/static/img/logo_branco.webp"
                />
                <LogoSucesso
                  src="/static/img/logo_branco.png"
                  alt="Emagrecentro"
                />
              </picture>
            </LogoContent>
            <TitleSucesso>Você está quase lá...</TitleSucesso>
            <TitleSimple>
              Antes de baixar a apresentação da <br />
              Emagrecentro, finalize seu cadastro abaixo:
            </TitleSimple>
            <FormWrapper>
              <FormularioContinue />
              <ContentPersonagem>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/static/img/faixa5/personagem.webp"
                  />
                  <Personagem
                    src="/static/img/faixa5/personagem.png"
                    alt="Emagrecentro"
                  />
                </picture>
              </ContentPersonagem>
            </FormWrapper>
          </FaixaSucessoTexto>
        </FaixaConteudo>
      </Container>
    </FaixaWrapperSucesso>
  </div>
);

export default Sucesso;
