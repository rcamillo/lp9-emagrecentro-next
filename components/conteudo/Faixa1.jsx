import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

import Container from "../ui/containers/Container";
import ButtonOutline from "../ui/buttons/ButtonOutline";
import Icon from "../ui/icons/Icon";

import {
  FaixaWrapper,
  FaixaConteudo,
  FaixaTextos
} from "../ui/faixas/FaixaStyles";

export const ContainerFaixa1 = styled(Container)``;

export const Faixa1Wrapper = styled(FaixaWrapper)`
  padding: 0 1rem;
  background-size: contain;
  background-position: 100%;

  @media (max-width: 1500px) {
    background-size: cover;
    background-position: 500px;
  }
  @media (max-width: 1110px) {
    background-position: 400px;
  }
  @media (max-width: 992px) {
    background-position: 300px;
  }
  @media(max-width: 900px){
    background-image: none;
  }
`;

export const FaixaConteudoResponsive = styled(FaixaConteudo)`
  padding: 2rem 0;
  max-width: 75rem;

  @media (max-width: 1022px) {
    max-width: 55rem;
  }
  @media (max-width: 975px) {
    max-width: 48rem;
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    justify-content: center;
    padding: 1.5rem 0 0 0;
  }
`;

export const Logo = styled.img`
  height: 200px;
`;

export const Faixa1Texto = styled(FaixaTextos)`
  text-align: left;
  align-items: flex-start;
  max-width: 60rem;
  width: 100%;

  @media (max-width: 1110px) {
    max-width: 45rem;
  }
  @media (max-width: 1065px) {
    max-width: 40rem;
    align-items: flex-start;
  }
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

export const Title = styled.h1`
  line-height: initial;
  font-size: 28px;
  font-weight: 800;
  padding-bottom: 3rem;
  color: ${props => props.theme.client.colors.preto};

  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 600px) {
    font-size: 23px;
  }
  @media (max-width: 400px) {
    font-size: 21px;
  }
`;

export const TitleSimple = styled.p`
  color: ${props => props.theme.client.colors.preto};
  font-size: 17px;
`;

export const pulse = keyframes`
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

const BulletWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 100%;
`;

const BulletContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 3rem;
  width: 25%;

  @media (max-width: 1110px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 25%;
  }
  @media (max-width: 600px) {
    width: 50%;
  }
`;
const Bullet = styled.img`
  width: 10rem;
  height: auto;
`;
const BulletTexto = styled.p`
  color: ${props => props.theme.client.colors.turquesa};
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1.6rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconZap = styled(Icon)`
  margin-left: 2rem;

  @media (max-width: 500px) {
    margin-right: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 3rem;
  position: relative;
  width: 100%;

  @media (max-width: 900px) {
    justify-content: center;
  }
  @media (max-width: 650px) {
    padding: 2rem 0;
  }
`;

export const ButtonPulseFaixa1 = styled(ButtonOutline)`
  border-radius: 10px;
  position: relative;
  z-index: 0;
  padding: 1.6rem 3rem;
  border: none;
  border-radius: 0;
  text-transform: uppercase;
  border: 1px solid transparent;

  @media(max-width: 500px){
    font-size: 1.4rem;
  }

  &::after {
    background-color: ${props => props.theme.client.colors.verde};
    animation: ${pulse} 3.6s ease-in-out infinite;
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    @media(max-width: 600px){
      animation: initial;
    }
  }
  &:hover {
    transition-delay: 0.05;
    transform: scale(1.1);
    /* background-color: ${props => props.theme.colors.laranja};
    color: ${props => props.theme.client.colors.branco};
    border-color: ${props => props.theme.client.colors.laranja}; */
    &::after {
      visibility: hidden;
    }
  }
`;

const Faixa1 = ({ callForm }) => {
  return (
    <Faixa1Wrapper>
      <Container>
        <FaixaConteudoResponsive>
          <Faixa1Texto>
            <LogoContent>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/static/img/faixa1/logo.webp"
                />
                <Logo src="/static/img/faixa1/logo.png" alt="PLC Máquinas" />
              </picture>
            </LogoContent>
            <Title>
              PLC MÁQUINAS VULCANIZADORAS SILVIO PELICER: FATURE ALTO
              VULCANIZADO PNEUS AGRÍCOLAS, DE CARGA E OTR
            </Title>
            <BulletWrapper>
              <BulletContent>
                <picture>
                  {/* <source
                    type="image/webp"
                    srcSet="/static/img/faixa1/certificado1.webp"
                  /> */}
                  <Bullet
                    src="/static/img/faixa1/bullet1.png"
                    alt="Icone: um pneu sobre o outro"
                  />
                </picture>
                <BulletTexto>TECNOLOGIA HIDROPNEUMÁTICA</BulletTexto>
              </BulletContent>
              <BulletContent>
                <picture>
                  <Bullet
                    src="/static/img/faixa1/bullet2.png"
                    alt="Icone: caminhão"
                  />
                </picture>
                <BulletTexto>ENTREGA EM TODO O BRASIL</BulletTexto>
              </BulletContent>
              <BulletContent>
                <picture>
                  <Bullet
                    src="/static/img/faixa1/bullet3.png"
                    alt="Icone: papel de garantia"
                  />
                </picture>
                <BulletTexto>10 ANOS DE GARANTIA</BulletTexto>
              </BulletContent>
              <BulletContent>
                <picture>
                  <Bullet
                    src="/static/img/faixa1/bullet4.png"
                    alt="Icone: mão segurando cartão de crédito"
                  />
                </picture>
                <BulletTexto>PAGAMENTO EM ATÉ 10X SEM JUROS</BulletTexto>
              </BulletContent>
            </BulletWrapper>
            <Title>GANHA DINHEIRO VULCANIZANDO PNEUS</Title>
            <TitleSimple>
              Já pensou em faturar mais de 10 mil reais por mês vulcanizando
              pneus em uma única máquina? Se você tem borracharia, renovadora ou
              reformadora, essa é a oportunidade de você aumentar seus lcuros
              com a vulcanização de pneus de carga!
            </TitleSimple>

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
                  CHAME NO WHATSAPP PARA LUCRAR AGORA!
                </IconWrapper>
              </ButtonPulseFaixa1>
            </ButtonWrapper>
          </Faixa1Texto>
        </FaixaConteudoResponsive>
      </Container>
    </Faixa1Wrapper>
  );
};

Faixa1.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa1;
