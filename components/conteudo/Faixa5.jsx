import styled from "styled-components";

import Container from "../ui/containers/Container";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";

import FormularioHomeFaixa5 from "../formulario/FormularioHomeFaixa5";

const Faixa5Wrapper = styled(FaixaWrapperSimples)`
  background-color: ${props => props.theme.client.colors.azul};
`;

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px){
    padding: 0;
    margin: 0;
  }
`;

const Faixa5 = () => {
  return (
    <Faixa5Wrapper>
      <ContentContainer>
        <FormularioHomeFaixa5 />
      </ContentContainer>
    </Faixa5Wrapper>
  );
};

export default Faixa5;
