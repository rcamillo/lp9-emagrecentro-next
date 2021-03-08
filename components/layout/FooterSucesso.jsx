import styled from "styled-components";

import Container from "../ui/containers/Container";
import { FaixaConteudoResponsive, Faixa1Texto } from "../conteudo/Faixa1";
import { Title } from "../conteudo/Faixa5";

const FooterWrapper = styled.footer`
  position: relative;
  padding: 0 0 2rem 0;

  @media (max-width: 700px) {
    padding: 1.5rem;
  }
`;

const InfosClient = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  line-height: initial;

  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;
  }

  p {
    padding: 0;
  }
`;

const TextBold = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const TextSimple = styled.p`
  font-size: 14px;
`;

const RowGreey = styled.div`
  background-color: #e5e5e5;
  height: 2px;
  width: 100%;
`;

const Footer = () => (
  <FooterWrapper>
    <Container>
      <RowGreey />
      <FaixaConteudoResponsive>
        <Faixa1Texto>
          <InfosClient>
            <TextSimple>
              <TextBold>CNPJ:</TextBold> 34.243.495/0001-00
            </TextSimple>
            <TextSimple>
              <TextBold>Razão social:</TextBold> FAST ESCOVA FRANCHISING LTDA
            </TextSimple>
            <TextSimple>
              <TextBold>Endereço:</TextBold> Avenida Francisco Das Chagas Oliveira, 1230, Chácara Municipal São José do Rio Preto (SP) -  CEP: 15.090-190
            </TextSimple>
            <TextSimple>
              <TextBold>Telefone:</TextBold> (17) 4141-3262
            </TextSimple>
          </InfosClient>
        </Faixa1Texto>
      </FaixaConteudoResponsive>
    </Container>
  </FooterWrapper>
);

export default Footer;
