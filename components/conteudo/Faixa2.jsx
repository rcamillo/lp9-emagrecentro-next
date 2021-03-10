import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "../ui/containers/Container";
import ButtonPulse from "../ui/buttons/ButtonPulse";

import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import {
  TitleVerde,
  TitleSimple,
} from "./Faixa1";

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentGridText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1055px){
    flex-wrap: wrap;
    justify-content: space-around;
  }

`;

const FaixaWrapperSimples2 = styled(FaixaWrapperSimples)`
  @media (max-width: 900px) {
    padding: 5rem 1rem 0 1rem;
  }
`;

const TextSimpleFaixa2 = styled(TitleSimple)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaaaaa;
  text-align: center;
  height: 8rem;
  font-size: 15px;
  border-bottom: 1px solid ${props => props.theme.client.colors.azul};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 550px){
    &:last-child {
    border-bottom: 1px solid ${props => props.theme.client.colors.azul};
    }
  }
`;

export const TitleBlue = styled(TitleVerde)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.client.colors.azulClaro};

  @media (max-width: 550px){
    text-align: center;
  }
`;

const ContentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  width: 245px;
  margin-right: 15px;

  @media (max-width: 1055px){
    width: 100%;
    height: initial;
    margin-right: 0;
  }
`;

const ContentColumnItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: space-between;
  flex-direction: column;
  width: 245px;
  height: 240px;
  margin-right: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
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

const Faixa2 = ({ callForm }) => (
  <FaixaWrapperSimples2>
    <ContentContainer>
      <ContentGridText>
        <ContentText>
          <TitleBlue>
            1ª Franquia de estética do Brasil
          </TitleBlue>
        </ContentText>
        <ContentColumnItems>
          <TextSimpleFaixa2>
            35 anos de know-how
          </TextSimpleFaixa2>
          <TextSimpleFaixa2>
            + de 200 franquias no Brasil e Estados Unidos
          </TextSimpleFaixa2>
          <TextSimpleFaixa2>
            Quase 3 milhões de clientes
          </TextSimpleFaixa2>
        </ContentColumnItems>
        <ContentColumnItems>
          <TextSimpleFaixa2>
            Margem de lucro de 50% 
          </TextSimpleFaixa2>
          <TextSimpleFaixa2>
            Única franquia do segmento com 10 prêmios de excelência ABF.
          </TextSimpleFaixa2>
          <TextSimpleFaixa2>
            Payback rápido: de 6 a 12 meses
          </TextSimpleFaixa2>
        </ContentColumnItems>
        <ContentColumnItems>
          <TextSimpleFaixa2>
            Lucratividade de 20% 
          </TextSimpleFaixa2>
          <TextSimpleFaixa2>
            Metodologia exclusiva de emagrecimento científico
          </TextSimpleFaixa2>
          <TextSimpleFaixa2>
            Menor investimento do mercado
          </TextSimpleFaixa2>
        </ContentColumnItems>
        
        </ContentGridText>
          <ButtonWrapper>
            <ButtonPulse
              backColor="azul"
              fontColor="branco"
              backPulse="azul"
              onClick={() => callForm()}
            >
              BAIXE NOSSA APRESENTAÇÃO!
            </ButtonPulse>
          </ButtonWrapper>
    </ContentContainer>
  </FaixaWrapperSimples2>
);

Faixa2.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa2;
