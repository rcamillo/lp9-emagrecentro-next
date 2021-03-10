import styled from "styled-components";
// import PropTypes from "prop-types";

import Container from "../ui/containers/Container";
import Icon from "../ui/icons/Icon";

import {
  FaixaWrapper,
  FaixaConteudo,
  FaixaTextos
} from "../ui/faixas/FaixaStyles";

export const Faixa1Wrapper = styled(FaixaWrapper)`
  background-image: none;
  background-color: ${props => props.theme.client.colors.azul};
  padding: 0 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    padding: 0 1rem 13rem;
  }
`;

export const ContentContainer = styled(Container)`
  width: 40vw;

  @media (max-width: 900px) {
    width: auto;
  }
`;

export const ContentBackgroundLateral = styled.div`
  margin-right: -1rem;
  margin-bottom: -1rem;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const BackgroundLateral = styled.img`
  position: relative;
  width: 50vw;
  height: 60rem;
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
  width: 250px;
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
  font-weight: 500;
  color: ${props => props.theme.client.colors.branco};

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

export const TitleVerde = styled.span`
  font-weight: 800;
  padding-bottom: 3rem;
  font-size: 28px;
      margin-top: -0.5rem;
  color: ${props => props.theme.client.colors.verdeClaro};

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
  color: ${props => props.theme.client.colors.branco};
  font-size: 17px;
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

const Faixa1 = () => {
  return (
    <Faixa1Wrapper>
      <ContentContainer>
        <FaixaConteudoResponsive>
          <Faixa1Texto>
            <LogoContent>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/static/img/logo_branco.webp"
                />
                <Logo src="/static/img/logo_branco.png" alt="Emagrecentro" />
              </picture>
            </LogoContent>
            <Title>
              Invista a partir de R$ 100 mil na sua franquia de emagrecimento
            </Title>
            <TitleVerde>
                e fature, em média, R$ 1 milhão por ano!
            </TitleVerde>
            <TitleSimple>
              Seja franqueado (a) Emagrecentro, a maior franquia de emagrecimento e estética das Américas, que cresceu 20% em 2020! Baixe a apresentação e saiba como.
            </TitleSimple>
          </Faixa1Texto>
        </FaixaConteudoResponsive>
      </ContentContainer>
      <ContentBackgroundLateral>
        <BackgroundLateral src="/static/img/faixa1/background-lateral.png" alt="Emagrecentro" />
      </ContentBackgroundLateral>
    </Faixa1Wrapper>
  );
};

export default Faixa1;
