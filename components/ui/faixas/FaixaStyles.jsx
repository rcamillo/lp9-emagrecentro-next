import styled from 'styled-components';
import Container from '../containers/Container';

export const FaixaWrapper = styled.div`
  background-image: url('/static/img/faixa1/background1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
`;

export const FaixaConteudo = styled.div`
  max-width: 65rem;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }
`;

export const FaixaTextos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 650px) {
    justify-content: center;
    align-items: center;
  }
`;

export const FaixaWrapperSimples = styled.div`
  padding: 5rem 1rem;
  position: relative;
`;

export const FaixaContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const VideoWrapper = styled.div`
  padding: 3rem 0;
`;
