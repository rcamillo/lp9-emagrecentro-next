import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "../ui/containers/Container";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";

import { FaixaConteudoResponsive, Faixa1Texto, Title } from "./Faixa1";

const Faixa3Wrapper = styled(FaixaWrapperSimples)`
  background-image: url("/static/img/faixa3/background2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const FaixaConteudoResponsive3 = styled(FaixaConteudoResponsive)`
  padding: 0;
`;

export const TextSimpleFaixa3 = styled.p`
  color: #fff;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;

  width: 100%;
  margin-bottom: 3rem;
`;

const ComparativoContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 1070px) {
    flex-wrap: wrap;
  }
  @media (max-width: 900px) {
    margin-bottom: 0;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: 600;
  text-align: center;
  p {
    text-align: center;
    color: #fff;
    margin-bottom: 0.5rem;
  }
`;

const Item = styled.div`
  background-color: #fff;
  max-width: 220px;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.boxShadows.stronger};
`;

const MotivosContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1070px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MotivosWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-weight: 700;
  font-size: 1.6rem;

  &:not(:first-child) {
    @media (min-width: 1070px) {
      margin-left: 2rem;
    }
  }

  @media (max-width: 1070px) {
    margin-bottom: 2rem;
  }
`;

const Motivo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

const Icone = styled.img`
  width: 5rem;
  height: auto;
  margin-right: 1.5rem;
`;

const Lucro = styled.div`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
  width: 95%;
  span {
    color: ${props => props.theme.client.colors.laranja};
  }
`;

const Faixa3 = ({ callForm }) => (
  <Faixa3Wrapper>
    <Container>
      <FaixaConteudoResponsive3>
        <Faixa1Texto>
          <Title>COMPARATIVO DE CUSTOS</Title>
          <ComparativoContent>
            <ItemWrapper>
              <p>Pneus agrícolas e OTR</p>
              <Item>
                R$ 800 a R$ 1.200
                <br />1 pneu vulcanizado
              </Item>
              <Item>
                R$ 4.000 a R$ 20.000
                <br />1 pneu novo no Brasil
              </Item>
            </ItemWrapper>
            <ItemWrapper>
              <p>Pneus de carga</p>
              <Item>
                R$ 150 a R$ 200
                <br />1 pneu vulcanizado
              </Item>
              <Item>
                R$ 2.000 a R$ 3.000
                <br />1 pneu novo no Brasil
              </Item>
            </ItemWrapper>
          </ComparativoContent>
          <TextSimpleFaixa3>economize mais de 90%</TextSimpleFaixa3>
          <Title>POR QUE VULCANIZAR PNEUS É MAIS LUCRATIVO?</Title>
          <MotivosContent>
            <MotivosWrapper>
              <Motivo>
                <Icone src="static/img/faixa3/electric-motor.png" />1 máquina p4
                vulcaniza
              </Motivo>
              <Motivo>
                <Icone src="static/img/faixa3/pneu.png" />1 a 2 pneus por dia
              </Motivo>
              <Motivo>
                <Icone src="static/img/faixa3/save-money.png" />
                faturamento de, em média, R$ 2.000 por dia!
              </Motivo>
              <Lucro>
                Em um mês você pode faturar, <br />
                em média, <span>44 mil reais!</span>
              </Lucro>
            </MotivosWrapper>
            <MotivosWrapper>
              <Motivo>
                <Icone src="static/img/faixa3/electric-motor.png" />1 máquina p2
                vulcaniza
              </Motivo>
              <Motivo>
                <Icone src="static/img/faixa3/pneu.png" />3 a 4 pneus por dia
              </Motivo>
              <Motivo>
                <Icone src="static/img/faixa3/save-money.png" />
                faturamento de, em média, R$ 600 por dia!
              </Motivo>
              <Lucro>
                Em um mês você pode faturar, <br />
                em média, <span>13 mil reais!</span>
              </Lucro>
            </MotivosWrapper>
          </MotivosContent>
        </Faixa1Texto>
      </FaixaConteudoResponsive3>
    </Container>
  </Faixa3Wrapper>
);

Faixa3.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa3;
