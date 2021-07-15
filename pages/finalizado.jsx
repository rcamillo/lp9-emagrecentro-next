import { useEffect } from "react";
import { useRouter } from "next/router";

import styled, { keyframes } from "styled-components";
import Head from "next/head";

import { FaixaTextos } from "../components/ui/faixas/FaixaStyles";
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

import Link from "../components/ui/buttons/Link";
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

const FaixaTextoFinalizado = styled(FaixaTextos)`
  width: 100%;
  max-width: 65rem;
  text-align: center;
  align-items: center;

  margin-top: 5rem;

  @media (max-width: 900px) {
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
  padding: 0 2rem;

  display: flex;
  justify-content: center;
`;

const ButtonWrapperFinalizado = styled(ButtonWrapper)`
  justify-content: center;
`;

const pulse = keyframes`
  0% {
    transform: initial;
    opacity: 1;
  }
  80% {
    transform: initial;
    opacity: 1;
  }
  100% {
    transform: scaleX(1.2) scaleY(1.3);
    opacity: 0;
  }
`;

const LinkDownload = styled(Link)`
  border-radius: 10px;
  position: relative;
  z-index: 0;
  padding: 1.6rem 3rem;
  border: none;
  text-transform: uppercase;
  border: 1px solid transparent;
  transition: all 0.2s ease 0s;

  font-family: Arial;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 1.4rem;
  }

  &::after {
    background-color: ${props =>
      props.backPulse
        ? props.theme.client.colors[props.backPulse]
        : props.theme.colors.verde};
    animation: ${pulse} 3.6s ease-in-out infinite;
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    border-radius: 10px;
    @media (max-width: 600px) {
      animation: initial;
    }
  }
  &:hover {
    transition-delay: 0.05;
    transform: scale(1.1);
    &::after {
      visibility: hidden;
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
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

  position: relative;
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 330px;

    box-shadow: ${props => props.theme.boxShadows.stronger};
    padding: 0 4rem 4rem;
    border-radius: 15px;
  }
`;

const CardImgWrapper = styled.div``;

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

const PortalLogoWrapper = styled.div`
  position: absolute;
  top: 280px;
`;

const PortalLogo = styled.img`
  width: 150px;
  height: auto;
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

const IconWhats = styled(Icon)`
  margin-left: 2rem;
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
          Franquia Emagrecentro | Fature, em média, R$ 1 milhão por ano!
        </title>
        <meta
          name="description"
          content="Seja franqueado(a) Emagrecentro, 1ª franquia de estética e emagrecimento do Brasil! Payback de 6 a 12 meses. Lucratividade de 20%.  Baixe a apresentação. "
        />
        <meta
          name="keywords"
          content="emagrecentro, emagrecentro franquia valor, emagrecentro faturamento, franquia emagrecentro lucro, emagrecentro franqueado, franquia emagrecimento, franquia estetica, franquia de clínicas de emagrecimento, franquia de estetica ABF, franquia emagrecimento retorno"
        />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://franquiaemagrecimento.com.br/static/img/og.png"
        />
        <meta
          property="og:title"
          content="Franquia Emagrecentro | Fature, em média, R$ 1 milhão por ano!"
        />
        <meta
          property="og:description"
          content="Seja franqueado(a) Emagrecentro, 1ª franquia de estética e emagrecimento do Brasil! Payback de 6 a 12 meses. Lucratividade de 20%.  Baixe a apresentação. "
        />
        <meta
          property="og:url"
          content="https://franquiaemagrecimento.com.br/"
        />
        <meta
          property="og:url"
          content="http://franquiaemagrecimento.com.br/"
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
              <a
                href="https://leadsp9-public-resources.s3-sa-east-1.amazonaws.com/arquivos-apresentacao/Apresenta%C3%A7%C3%A3o+Emagrecentro.pdf"
                target="_blank"
              >
                <ButtonWrapperFinalizado>
                  <ButtonPulse
                    backColor="verdeClaro"
                    fontColor="azul"
                    backPulse="verdeClaro"
                  >
                    BAIXE NOSSA APRESENTAÇÃO!
                  </ButtonPulse>
                </ButtonWrapperFinalizado>
              </a>
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

      <Faixa2Wrapper>
        <FaixaTextoFinalizado>
          <Title>
            Ou, se preferir, fale diretamente com um de nossos consultores pelo
            WhatsApp agora mesmo
          </Title>
          <ButtonWrapperFinalizado>
            <LinkDownload
              backColor="verdeClaro"
              fontColor="branco"
              backPulse="verdeClaro"
              href={
                "https://wa.me/5511992658341/?text=" +
                encodeURI(
                  "[Emagrecentro] Gostaria de mais informações para ser um franqueado Emagrecentro"
                )
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              ENVIAR MENSAGEM PARA O WHATSAPP +55 11 99265 8341
              <IconWhats tamanho="3rem" tipo="svg" cor="#fff" icon="whatsapp" />
            </LinkDownload>
          </ButtonWrapperFinalizado>
        </FaixaTextoFinalizado>
      </Faixa2Wrapper>

      <FaixaConteudo>
        <TitleCard>Emagrecentro na imprensa!</TitleCard>
      </FaixaConteudo>
      <Faixa2Wrapper>
        <CardWrapper>
        <Card>
            <a
              href="https://revistapegn.globo.com/Melhores-franquias/noticia/2020/10/os-vencedores-do-premio-melhores-franquias-do-brasil-2020.html"
              target="_blank"
            >
              <CardImgWrapper>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/static/img/finalizado/imprensa3.webp"
                  />
                  <CardImg src="/static/img/finalizado/imprensa3.png" />
                </picture>
              </CardImgWrapper>
              <CardText>
                Emagrecentro é uma das franquias vencedoras do prêmio Melhores
                Franquias do Brasil 2020!
              </CardText>
              <PortalLogoWrapper>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/static/img/finalizado/portal1.webp"
                  />
                  <PortalLogo src="/static/img/finalizado/portal1.png" />
                </picture>
              </PortalLogoWrapper>
            </a>
          </Card>
          <Card>
            <a
              href="http://www.agenciaoglobo.com.br/dinonews/Default.aspx?idnot=35967&tit=O+m%C3%A9dico+que+pediu+empr%C3%A9stimo+e+se+tornou+o+dono+de+uma+das+maiores+redes+de+franquias+de+emagrecimento+do+BrasilInfoMoneyhttps://www.facebook.com/InfoMoney/posts/1604608589574868"
              target="_blank"
            >
              <CardImgWrapper>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/static/img/finalizado/imprensa1.webp"
                  />
                  <CardImg src="/static/img/finalizado/imprensa1.png" />
                </picture>
              </CardImgWrapper>
              <CardText>
                Como o Dr. Edson Ramuth se tornou dono de uma das maiores redes
                de franquias de emagrecimento do Brasil!
              </CardText>
              <PortalLogoWrapper>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/static/img/finalizado/portal2.webp"
                  />
                  <PortalLogo src="/static/img/finalizado/portal2.png" />
                </picture>
              </PortalLogoWrapper>
            </a>
          </Card>
          <Card>
            <a
              href="https://revistapegn.globo.com/Franquias/noticia/2020/09/conheca-redes-chanceladas-com-o-certificado-de-franquia-internacional-2020.html"
              target="_blank"
            >
              <CardImgWrapper>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/static/img/finalizado/imprensa2.webp"
                  />
                  <CardImg src="/static/img/finalizado/imprensa2.png" />
                </picture>
              </CardImgWrapper>
              <CardText>
                Emagrecentro é uma das redes chanceladas com o Certificado de
                Franquia Internacional 2020!
              </CardText>
              <PortalLogoWrapper>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/static/img/finalizado/portal1.webp"
                  />
                  <PortalLogo src="/static/img/finalizado/portal1.png" />
                </picture>
              </PortalLogoWrapper>
            </a>
          </Card>

        </CardWrapper>
      </Faixa2Wrapper>

      <RedesWrapper>
        <TextoWrapperFinalizado>
          <a
            href="https://www.facebook.com/EmagrecentroOficial"
            target="_blank"
          >
            <Icon tamanho="3rem" icon="facebook2" cor="#fff" tipo="svg" />
          </a>
          <a
            href="https://www.instagram.com/emagrecentro_oficial/"
            target="_blank"
          >
            <Icon tamanho="3rem" icon="instagram2" cor="#fff" tipo="svg" />
          </a>
        </TextoWrapperFinalizado>
      </RedesWrapper>
    </div>
  );
};

export default Finalizado;
