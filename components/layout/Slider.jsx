/* eslint-disable consistent-return */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "../ui/icons/Icon";
import Video from "../videos/Video";

const Foto = styled.img`
  display: ${props => props.show};
  /* border-radius: 3.5rem; */
  /* width: 50rem;
  height: 33rem; */
  box-shadow: ${props => props.theme.boxShadows.stronger};

  /* @media (max-width: 500px) {
    max-width: 50rem;
    width: 100%;
    height: auto;
  } */
`;

const FotosWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const ControllButton = styled.button`
  border-radius: 50%;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  background-color: transparent;
  border: 0.4rem solid ${props => props.cor};
  width: 5rem;
  height: 5rem;
  box-shadow: ${props => props.theme.boxShadows.stronger};
  transition: all 0.2s;
  z-index: 1;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

const VideoWrapper = styled.div`
  display: ${props => props.show};
  width: 50rem;
  height: 33rem;

  @media (max-width: 500px) {
    width: 30rem;
    height: 20rem;
  }
`;

const TextWrapper = styled.div`
  display: ${props => props.show};
  position: absolute;
  bottom: 0;
  padding-bottom: 4rem;
  width: 100%;

  flex-direction: column;
  align-items: center;

  h2,
  p {
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 1.8rem;
  }

  p {
    max-width: 35rem;
  }

  @media (max-width: 500px) {
    padding: 0 1rem;

    p,
    h2 {
      font-size: 1.5rem;
      font-weight: normal;
    }
  }
`;

const DepoimentosContent = styled.div`
  display: ${props => props.show};
  justify-content: center;
  margin: 5rem 0 3rem;

  @media (max-width: 1110px) {
    flex-direction: column;
  }
`;

const PessoaContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  img{
    border-radius: 50%;
  }
  div {
    width: 200px;
    height: 200px;
    background-color: ${props => props.theme.client.colors.azul};
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.6rem;

    @media (max-width: 1100px) {
      max-width: 200px;
    }
  }
  p {
    font-size: 1.4rem;
    color: ${props => props.theme.client.colors.azul};
  }

  @media (max-width: 1110px) {
    justify-content: center;
    align-items: center;

    margin-bottom: 2rem;
  }
`;

const DepoimentoContainer = styled.div`
  position: relative;
  background-color: #c3c3c3;
  border-radius: 10px;
  max-height: 250px;
  max-width: 400px;
  padding: 0 4rem;
  margin-left: 6rem;

  display: flex;
  justify-content: flex;
  align-items: center;
  align-content: center;

  p {
    font-size: 1.1rem;
  }
  @media (max-width: 1110px) {
    margin-left: 0;
    margin-bottom: 2rem;
    padding: 2rem 2rem;
  }
`;

const Triangulo = styled.div`
  position: absolute;
  left: -30px;
  top: 60px;

  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 30px solid #c3c3c3;

  @media (max-width: 1110px) {
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 20px solid #c3c3c3;
    left: 40px;
    top: -40px;
  }
`;

export default function Slider({ fotos, type }) {
  const [controle, setControle] = useState({
    size: fotos.length,
    photoActive: 1
  });

  function nextPhoto() {
    if (controle.photoActive === controle.size) {
      setControle({
        ...controle,
        photoActive: 1
      });

      return true;
    }

    setControle({
      ...controle,
      photoActive: controle.photoActive + 1
    });
  }

  function prevPhoto() {
    if (controle.photoActive === 1) {
      setControle({
        ...controle,
        photoActive: controle.size
      });

      return true;
    }

    setControle({
      ...controle,
      photoActive: controle.photoActive - 1
    });
  }

  return (
    <FotosWrapper>
      <ControllButton
        top={type === "depoimentos" ? "100%" : "45%"}
        left={type === "depoimentos" ? "30%" : "1.5rem"}
        onClick={() => prevPhoto()}
        aria-label="Foto Anterior"
        cor={type === "depoimentos" ? "#483f47" : "#c3c3c3"}
      >
        <Icon
          tipo="svg"
          tamanho="4rem"
          icon="arrow_left"
          cor={type === "depoimentos" ? "#483f47" : "#fff"}
        />
      </ControllButton>
      {fotos.map(item => (
        <div key={item.id}>
          {type === "foto" && (
            <>
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/static/img/${item.image}.webp`}
                />
                <Foto
                  src={`/static/img/${item.image}.png`}
                  alt=""
                  show={item.id === controle.photoActive ? "block" : "none"}
                />
              </picture>
              <TextWrapper
                show={item.id === controle.photoActive ? "flex" : "none"}
              >
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </TextWrapper>
            </>
          )}
          {type === "depoimentos" && (
            <DepoimentosContent
              show={item.id === controle.photoActive ? "flex" : "none"}
            >
              <PessoaContainer>
                <div><img src={item.image}/></div>
                <h3>{item.title}</h3>
                <p>{item.text2}</p>
              </PessoaContainer>
              <DepoimentoContainer>
                <p>"{item.text}"</p>
                <Triangulo />
              </DepoimentoContainer>
            </DepoimentosContent>
          )}
          {type === "video" && (
            <VideoWrapper
              key={item.id}
              show={item.id === controle.photoActive ? "block" : "none"}
            >
              <Video
                placeholderImgName={item.thumb}
                vimeoId={item.videoId}
                title={item.alt}
              />
            </VideoWrapper>
          )}
        </div>
      ))}
      <ControllButton
        top={type === "depoimentos" ? "100%" : "45%"}
        right={type === "depoimentos" ? "30%" : "1.5rem"}
        onClick={() => nextPhoto()}
        aria-label="Próxima Foto"
        cor={type === "depoimentos" ? "#483f47" : "#c3c3c3"}
      >
        <Icon
          tipo="svg"
          tamanho="4rem"
          icon="arrow_right"
          cor={type === "depoimentos" ? "#483f47" : "#fff"}
        />
      </ControllButton>
    </FotosWrapper>
  );
}

Slider.propTypes = {
  fotos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      text: PropTypes.string,
      text2: PropTypes.string,
      title: PropTypes.string
    }).isRequired
  ).isRequired,
  type: PropTypes.string.isRequired
};
