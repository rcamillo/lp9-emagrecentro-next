import styled from "styled-components";

import Container from "../ui/containers/Container";

import { FaixaConteudoResponsive } from "../conteudo/Faixa1";

import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";

const FooterWrapperSimples = styled(FaixaWrapperSimples)`
  background-color: #f4f4f4;
  padding: 10rem 1rem 1rem;
`;

const FooterP9 = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.client.colors.azul};

  @media (max-width: 900px) {
    width: 100%;
  }

  p {
    font-size: 15px;
    color: #fff;

    strong {
      a {
        color: #fff;
      }
    }
  }
`;

const FooterGeral = () => (
  <FooterWrapperSimples>
    <Container>
      <FooterP9>
        <p>
          Com ♥ por{" "}
          <strong>
            <a
              href="https://p9.digital"
              title="Marketing Digital"
              target="_blank"
              rel="noopener noreferrer"
            >
              P9 Digital
            </a>
          </strong>
        </p>
      </FooterP9>
    </Container>
  </FooterWrapperSimples>
);

export default FooterGeral;
