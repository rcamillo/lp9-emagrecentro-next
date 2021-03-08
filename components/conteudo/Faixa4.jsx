import styled from "styled-components";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import Container from "../ui/containers/Container";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import {
  FaixaConteudoResponsive,
  Faixa1Texto,
  Title,
  TitleSimple,
  ButtonPulseFaixa1,
  ButtonWrapper,
  IconWrapper,
  IconZap
} from "./Faixa1";

import { maquinas } from "../../helpers/dados";

const MaquinasContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin: 4rem 0;
`;

const MaquinaWrapper = styled.div`
  display: ${props => (props.ativo ? "flex" : "none")};
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4rem;
  width: 45%;

  &.show {
    display: flex;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  p {
    font-size: 1.4rem;
  }

  @media (max-width: 1110px) {
    width: 95%;
  }
  @media (max-width: 900px) {
    width: 45%;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const FotoContent = styled.div`
  display: flex;
  justify-content: center;
`;

const Foto = styled.img`
  width: 250px;
  height: auto;
`;

const ButtonMaquinasWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const ButtonMaquinas = styled.button`
  background-color: ${props => props.theme.client.colors.azul};
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  padding: 1.5rem 3rem;
  border-radius: 10px;

  &:hover {
    transition-delay: 0.05;
    transform: scale(1.1);
  }
`;

const Faixa4 = ({ callForm }) => {
  const [showMaquina, setShowMaquina] = useState(false);
  const [buttonText, setButtonText] = useState("ver todas as máquinas");

  const mostrarMaquinas = () => {
    setShowMaquina(!showMaquina);
    setButtonText("ocultar máquinas");
  };

  return (
    <FaixaWrapperSimples>
      <Container>
        <FaixaConteudoResponsive>
          <Faixa1Texto>
            <Title>MÁQUINAS E PRODUTOS PARA AUMENTAR SEU FATURAMENTO</Title>
            <TitleSimple>
              Além das máquinas para vulcanização de pneus, temos sargento
              universal, destalonador ou descolador de pneus, controle de
              temperatura, timer digital, roda para conserto de pneus de
              caminhão, agrícolas e muito mais!
            </TitleSimple>

            <MaquinasContent>
              {maquinas.map(maquina => {
                return (
                  <MaquinaWrapper
                    key={maquina.id}
                    className={maquina.id < 4 ? "show" : ""}
                    ativo={showMaquina}
                  >
                    <FotoContent>
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={"/static/img/faixa4/" + maquina.img + ".webp"}
                        />
                        <Foto
                          src={"/static/img/faixa4/" + maquina.img + ".png"}
                          alt={maquina.title}
                        />
                      </picture>
                    </FotoContent>
                    <h1>{maquina.title}</h1>
                    <p>{maquina.description}</p>
                  </MaquinaWrapper>
                );
              })}
            </MaquinasContent>

            <ButtonMaquinasWrapper>
              <ButtonMaquinas onClick={mostrarMaquinas}>
                {buttonText}
              </ButtonMaquinas>
            </ButtonMaquinasWrapper>

            <ButtonWrapper>
              <ButtonPulseFaixa1
                backColor="verde"
                fontColor="branco"
                onClick={() => callForm()}
              >
                <IconWrapper>
                  <IconZap
                    tamanho="3rem"
                    icon="whatsapp"
                    cor="#fff"
                    tipo="svg"
                  />
                  COMPRE MÁQUIANS COM DESCONTO
                </IconWrapper>
              </ButtonPulseFaixa1>
            </ButtonWrapper>
          </Faixa1Texto>
        </FaixaConteudoResponsive>
      </Container>
    </FaixaWrapperSimples>
  );
};

Faixa4.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa4;
