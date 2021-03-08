import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "../ui/containers/Container";

import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import {
  FaixaConteudoResponsive,
  Faixa1Texto,
  Title,
  TitleSimple,
  LogoContent,
  Logo
} from "./Faixa1";

const LogoContentFaixa8 = styled(LogoContent)`
  margin-bottom: 0;
`;

const LogoFaixa8 = styled(Logo)`
  height: 250px;
`;

const Faixa8 = ({ callForm }) => (
  <FaixaWrapperSimples>
    <Container>
      <FaixaConteudoResponsive>
        <Faixa1Texto>
          <LogoContentFaixa8>
            <picture>
              <source
                type="image/webp"
                srcSet="/static/img/faixa1/logo.webp"
              />
              <LogoFaixa8
                src="/static/img/faixa1/logo.png"
                alt="PLC Máquinas"
              />
            </picture>
          </LogoContentFaixa8>
          <Title>Sobre PLC Máquinas</Title>
          <TitleSimple>
            Administradas por Silvio Pelicer, PLC Máquinas Vulcanizadoras é uma
            indústria nacional de máquinas e equipamentos para vulcanização e
            recuperação de pneus. Desde 1944, a PLC prima pelo bom tendimento e
            qualidade em seus produtos, atendendo ao mercado nacional e
            internacional.
          </TitleSimple>
        </Faixa1Texto>
      </FaixaConteudoResponsive>
    </Container>
  </FaixaWrapperSimples>
);

Faixa8.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa8;
