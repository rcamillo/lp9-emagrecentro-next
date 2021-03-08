import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "../ui/containers/Container";
import { FaixaWrapper } from "../ui/faixas/FaixaStyles";
import {
  Faixa1Texto,
  FaixaConteudoResponsive,
} from "./Faixa1";

import FormularioFixo from "../formulario/FormularioFixo";


const Faixa7Wrapper = styled(FaixaWrapper)`
  background-image: url('/static/img/faixa7/background3.png');
  padding: 5rem 1rem;
`;

const Faixa7 = ({ callForm }) => (
  <Faixa7Wrapper>
    <Container>
      <FaixaConteudoResponsive>
        <Faixa1Texto>
          <FormularioFixo/>
        </Faixa1Texto>
      </FaixaConteudoResponsive>
    </Container>
  </Faixa7Wrapper>
);

Faixa7.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa7;
