import { useEffect } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";
import Head from "next/head";

import { FaixaWrapper } from "../components/ui/faixas/FaixaStyles";
import Container from "../components/ui/containers/Container";

import {
  Faixa1Wrapper,
  ContentContainer,
  Faixa1Texto,
  FaixaConteudoResponsive,
  ContentBackgroundLateral,
  BackgroundLateral,
  LogoContent
} from "../components/conteudo/Faixa1";
import { ButtonWrapper } from "../components/conteudo/Faixa2";

import { FaixaConteudo, FaixaSucessoTexto, LogoSucesso } from "./sucesso";

import Icon from "../components/ui/icons/Icon";
import ButtonPulse from "../components/ui/buttons/ButtonPulse";

const ContentContainerFinalizado = styled(ContentContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FaixaConteudoFinalizado = styled(FaixaConteudoResponsive)`
  max-width: 75rem;
`;

const FaixaConteudoIcones = styled(FaixaConteudo)`
  padding: 0;
`;

const TitleSimple = styled.p`
  line-height: 1.4;
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 1.5rem;
  color: #fff;
`;

const Text = styled.p`
  color: white;
  font-size: 16px;
`;

const Faixa2Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ButtonWrapperFinalizado = styled(ButtonWrapper)`
  justify-content: flex-start;
`;

// const ButtonPulseDownload = styled(ButtonPulseFaixa1)`
//   &::after {
//     background-color: ${props => props.theme.client.colors.verde};
//   }
// `;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 1rem;
  color: ${props => props.theme.client.colors.azul};
  width: 100%;
  text-align: left;
`;

const TitleCard = styled(Title)`
  text-align: center;
  margin-bottom: 10rem;
`;

const Card = styled.div`
  width: 260px;
  margin: 0 2.5rem 10rem;
  text-align: center;
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    box-shadow: ${props => props.theme.boxShadows.stronger};
    padding: 0 4rem 4rem;
    border-radius: 15px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: auto;

  margin-top: -5rem;
  margin-bottom: 3rem;
`;

const CardText = styled.p`
  font-size: 14px;
  color: black;

  span {
    font-weight: bold;
  }
`;

const RedesWrapper = styled.div`
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;

  padding-top: 5rem;

  a {
    background-color: #a5a5a5;
    padding: 1rem;
    border-radius: 10px;
    margin-left: 2rem;

    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

const TextoWrapperFinalizado = styled(Faixa1Texto)`
  justify-content: flex-start;
  flex-direction: row;

  max-width: 90rem;

  @media (max-width: 1110px) {
    max-width: 90rem;
  }
  @media (max-width: 1065px) {
    max-width: 80rem;
    align-items: flex-start;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    justify-content: center;
    font-size: 18px;
  }
`;

const Finalizado = () => {
  const router = useRouter();

    useEffect(() => {
      async function buscaSession() {
        const session = await JSON.parse(
          localStorage.getItem("@emagrecentro/session-lead")
        );

        if (!session) {
          router.push("/");
          return false;
        }

        if (!session.lead_sucesso) {
          router.push("/sucesso");
          return false;
        }

        localStorage.removeItem("@emagrecentro/session-lead");
      }
      buscaSession();
    }, ["umavez"]);

  return (
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
      <Faixa1Wrapper>
        <ContentContainerFinalizado>
          <FaixaConteudoResponsive>
            <Faixa1Texto>
              <LogoContent>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/static/img/logo_branco.webp"
                  />
                  <LogoSucesso
                    src="/static/img/logo_branco.png"
                    alt="Total Clean"
                  />
                </picture>
              </LogoContent>
              <TitleSimple>
                Dados enviados com sucesso! Você já pode fazer o download da
                apresentação Emagrecentro.
              </TitleSimple>
              <Text>
                Aguarde a ligação de um de nossos consulstores, o DDD é 11!
              </Text>
              <ButtonWrapperFinalizado>
                <ButtonPulse
                  backColor="verdeClaro"
                  fontColor="azul"
                  backPulse="verdeClaro"
                >
                  BAIXE NOSSA APRESENTAÇÃO!
                </ButtonPulse>
              </ButtonWrapperFinalizado>
            </Faixa1Texto>
          </FaixaConteudoResponsive>
        </ContentContainerFinalizado>
        <ContentBackgroundLateral>
          <BackgroundLateral
            src="/static/img/faixa1/background-lateral.png"
            alt="Emagrecentro"
          />
        </ContentBackgroundLateral>
      </Faixa1Wrapper>

      <FaixaConteudoFinalizado>
        <ContentContainerFinalizado>
          <FaixaConteudoResponsive>
            <Faixa1Texto>
              <Title>
                Ou, se preferir, fale diretamente com um de nossos consultores
                pelo WhatsApp agora mesmo
              </Title>
              <ButtonWrapperFinalizado>
                <ButtonPulse
                  backColor="azul"
                  fontColor="branco"
                  backPulse="azul"
                >
                  ENVIAR MENSAGEM PARA O WHATSAPP +55 11 99254-8341
                </ButtonPulse>
              </ButtonWrapperFinalizado>
            </Faixa1Texto>
          </FaixaConteudoResponsive>
        </ContentContainerFinalizado>
      </FaixaConteudoFinalizado>

      <FaixaConteudo>
        <TitleCard>Emagrecentro na imprensa!</TitleCard>
      </FaixaConteudo>
      <Faixa2Wrapper>
        <CardWrapper>
          <Card>
            <a
              href="http://www.agenciaoglobo.com.br/dinonews/Default.aspx?idnot=35967&tit=O+m%C3%A9dico+que+pediu+empr%C3%A9stimo+e+se+tornou+o+dono+de+uma+das+maiores+redes+de+franquias+de+emagrecimento+do+BrasilInfoMoneyhttps://www.facebook.com/InfoMoney/posts/1604608589574868"
              target="_blank"
            >
              <CardImg src="/static/img/finalizado/imprensa1.png" />
              <CardText>
                Como o Dr. Edson Ramuth se tornou dono de uma das maiores redes
                de franquias de emagrecimento do Brasil!
              </CardText>
            </a>
          </Card>
          <Card>
            <a
              href="https://revistapegn.globo.com/Franquias/noticia/2020/09/conheca-redes-chanceladas-com-o-certificado-de-franquia-internacional-2020.html"
              target="_blank"
            >
              <CardImg src="/static/img/finalizado/imprensa2.png" />
              <CardText>
                Emagrecentro é uma das redes chanceladas com o Certificado de
                Franquia Internacional 2020!
              </CardText>
            </a>
          </Card>
          <Card>
            <a
              href="https://revistapegn.globo.com/Melhores-franquias/noticia/2020/10/os-vencedores-do-premio-melhores-franquias-do-brasil-2020.html"
              target="_blank"
            >
              <CardImg src="/static/img/finalizado/imprensa3.png" />
              <CardText>
                Emagrecentro é uma das franquias vencedoras do prêmio Melhores
                Franquias do Brasil 2020!
              </CardText>
            </a>
          </Card>
        </CardWrapper>
      </Faixa2Wrapper>

      <RedesWrapper>
        <TextoWrapperFinalizado>
          <a href="# " target="_blank">
            <Icon tamanho="3rem" icon="facebook2" cor="#fff" tipo="svg" />
          </a>
          <a href="# " target="_blank">
            <Icon tamanho="3rem" icon="instagram2" cor="#fff" tipo="svg" />
          </a>
        </TextoWrapperFinalizado>
      </RedesWrapper>
    </div>
  );
};

export default Finalizado;
