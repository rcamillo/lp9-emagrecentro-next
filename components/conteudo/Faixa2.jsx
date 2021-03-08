import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "../ui/containers/Container";

import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import {
  FaixaConteudoResponsive,
  Faixa1Texto,
  Title,
  TitleSimple,
  IconWrapper,
  IconZap,
  ButtonPulseFaixa1,
  ButtonWrapper
} from "./Faixa1";

const FaixaConteudoResponsive2 = styled(FaixaConteudoResponsive)`
  padding-top: 0;
`;

const Faixa2Textos = styled(Faixa1Texto)``;

const FaixaWrapperSimples2 = styled(FaixaWrapperSimples)`
  @media (max-width: 900px) {
    padding: 5rem 1rem 0 1rem;
  }
`;

export const TitleFaixa2 = styled(Title)`
  color: ${props => props.theme.client.colors.azulEscuro};
`;

const Faixa2 = ({ callForm }) => (
  <FaixaWrapperSimples2>
    <Container>
      <FaixaConteudoResponsive2>
        <Faixa2Textos>
          <Title>ECONOMIZE DINHEIRO REFORMANDO PNEUS</Title>
          <TitleSimple>
            Reduza seus custos fixos em mais de 10 mil reais! Se você tem
            transportadora ou frota de caminhões e tratores, pare de gastar com
            os consertos de pneus ou comprando pneus novos!
          </TitleSimple>
          <ButtonWrapper>
            <ButtonPulseFaixa1
              backColor="verde"
              fontColor="branco"
              onClick={() => callForm()}
            >
              <IconWrapper>
                <IconZap tamanho="3rem" icon="whatsapp" cor="#fff" tipo="svg" />
                CHAME NO WHATSAPP PARA ECONOMIZAR AGORA!
              </IconWrapper>
            </ButtonPulseFaixa1>
          </ButtonWrapper>
        </Faixa2Textos>
      </FaixaConteudoResponsive2>
    </Container>
  </FaixaWrapperSimples2>
);

Faixa2.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa2;
