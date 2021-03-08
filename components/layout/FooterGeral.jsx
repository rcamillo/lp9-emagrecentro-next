import styled from "styled-components";

import Container from "../ui/containers/Container";

import { FaixaConteudoResponsive } from "../conteudo/Faixa1";

import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";

const FooterWrapperSimples = styled(FaixaWrapperSimples)`
  background-color: ${props => props.theme.client.colors.cinzaClaro};
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;

const FooterWrapper = styled.footer`
  position: relative;
  padding: 4rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  max-width: 60rem;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
  }

  p {
    font-size: 15px;
    @media (max-width: 500px) {
      font-size: 13px;
    }

    strong {
      a {
        color: #000;
      }
    }
  }
`;

const FooterP9 = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }

  p {
    font-size: 15px;

    strong {
      a {
        color: #000;
      }
    }
  }
`;

const FooterGeral = () => (
  <FooterWrapperSimples>
    <Container>
      <FaixaConteudoResponsive>
        <FooterContent>
          <div>
            <p>
              <strong>CNPJ: </strong>
              23.964.450/0001-08
            </p>
            <p>
              <strong>Razão Social: </strong>
              MAQUINAS PLC RIOPRETO MANUTENCAO E REPARACAO PNEUMATICA EIRELI
            </p>
            <p>
              <strong>Endereço: </strong>
              Avenida Domingos Falavina, 1610, Sala 01, Parque Residencial Dom
              Lafaiete Libanio, São José do Rio Preto – SP, CEP: 15046-000
            </p>
            <p>
              <strong>E-mail: </strong>
              silvio_pelicer@hotmail.com
            </p>
            <p>
              <strong>Telefone: </strong>
              (17) 99788-1968
            </p>
          </div>
        </FooterContent>
      </FaixaConteudoResponsive>
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
