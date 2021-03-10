import styled from "styled-components";
import Container from "../ui/containers/Container";
import { Title } from "../conteudo/Faixa1";
import { ButtonWrapper } from "../conteudo/Faixa2";

import ButtonPulse from "../ui/buttons/ButtonPulse";

import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";

import { listLogos } from "../../helpers/dados";

const FooterWrapperSimples = styled(FaixaWrapperSimples)`
background-color: #f6f6f6;
padding: 5rem 0 0;
  @media (max-width: 900px) {
    padding: 1.5rem 0 0;
    margin-top: 5rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;

  @media(max-width: 900px){
    flex-direction: column;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 60rem;
  padding: 0 1rem;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
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

const TitleFaixa8 = styled(Title)`
  color: ${props => props.theme.client.colors.azul};
`;
const TitleStrongFaixa8 = styled(TitleFaixa8)`
  color: ${props => props.theme.client.colors.azul};
  font-weight: bold;
`;

const ContentImagesLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width:100%;
  margin-top: 2rem;
`;
const ContentImageLogo = styled.div`
  margin: 1rem;
`;
const ImageLogos = styled.img`
  max-width: 200px;
  max-height: 150px;

  @media (max-width: 600px) {
    max-height: 120px;
  }
`;

const FooterP9 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  background-color: ${props => props.theme.client.colors.azul};
  padding: 1rem 0;

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

const Footer = () => (
  <FooterWrapperSimples>
    <ContentContainer>
      <FooterContent>
        <TitleFaixa8>Faça parte do lucrativo mercado</TitleFaixa8>
        <TitleStrongFaixa8>de estética e emagrecimento!</TitleStrongFaixa8>
        <ButtonWrapper>
          <ButtonPulse
            backColor="azul"
            fontColor="branco"
            backPulse="azul"
            onClick={() => callForm()}
          >
            TENHA SUA CLÍNICA EMAGRECENTRO!
          </ButtonPulse>
        </ButtonWrapper>
      </FooterContent>
      <FooterContent>
        <div>
          <p>
            <strong>CNPJ: </strong>
            71.532.337/00001-98
          </p>
          <p>
            <strong>Razão Social: </strong>
            MULTIFRANQUIAS FRANCHISING LTDA
          </p>
          <p>
            <strong>Endereço: </strong>
            Rua Apotribu, 139, Conj 71, Parque Imperial, São Paulo (SP), CEP: 04.302-000
          </p>
          <p>
            <strong>E-mail: </strong>
            administrativo@grupomultifranquias.com.br
          </p>
          <p>
            <strong>Telefone: </strong>
            (11) 5585 2700
          </p>
        </div>
      </FooterContent>
    </ContentContainer>
    <ContentContainer>
      <ContentImagesLogos>
        {listLogos.map(logo => (
          <ContentImageLogo key={logo.id}>
            <picture>
              <source
                type="image/webp"
                srcSet={`/static/img/footer/${logo.logo}.webp`}
              />
              <ImageLogos src={`/static/img/footer/${logo.logo}.png`} alt={logo.alt} />
            </picture>
          </ContentImageLogo>
        ))}
      </ContentImagesLogos>
    </ContentContainer>
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
  </FooterWrapperSimples>
);

export default Footer;
