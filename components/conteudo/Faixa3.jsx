import styled from "styled-components";

import Container from "../ui/containers/Container";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";

import { FaixaConteudoResponsive, Faixa1Texto, Title, TitleVerde } from "./Faixa1";

const Faixa3Wrapper = styled(FaixaWrapperSimples)`
  padding: 0 !important;
`;

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  @media (max-width: 900px){
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;
  }
`;

const FaixaConteudoResponsive3 = styled(FaixaConteudoResponsive)`
  padding: 0 2rem 0 5rem;
  max-width: 40rem;
  @media (max-width: 900px){
    max-width: initial;
    width: 100%;
    padding: 0 1.5rem;
  }
`;

const TitleFaixa3 = styled(Title)`
  color: ${props => props.theme.client.colors.azul};
  line-height: 3rem;
`;
const TitleStrongFaixa3 = styled(TitleVerde)`
  color: ${props => props.theme.client.colors.azul};
`;

const TextSimple = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 2rem 0;
`;

const ImagensWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px auto 0;
  width: 1550px;
  @media (max-width: 900px){
    width: 100%;
  }
  @media (max-width: 600px){
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap
  }
  @media (max-width: 600px){
    flex-direction: column;
  }
  @media (max-width: 390px){
    justify-content: center;
  }
`;

const ColunaImagem1 = styled.div`
  flex: 1 0 100px;
  padding: 0 10px;

  @media (max-width: 600px){
    flex: 1 0 150px;
  }

  @media (max-width: 500px){
    display: flex;
    justify-content: space-around;
    width: 95%;
    flex-wrap: wrap;
    img {
      height: 180px;
      width: 170px;
      margin-right: 0.5rem;
      box-shadow: 0 0 20px #a5a2a2;
    }
  }
  @media (max-width: 390px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
      img {
      height: initial;
      width: 300px;
      margin-right: 0;
    }
  }
`;
const ColunaImagem2 = styled.div`
  flex: 1 0 150px;
  @media (max-width: 500px){
    display: flex;
    justify-content: space-around;
    width: 95%;
    flex-wrap: wrap;
    img {
      height: 180px;
      width: 170px;
      box-shadow: 0 0 20px #a5a2a2;
    }
  }
  @media (max-width: 390px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: initial;
      width: 300px;
    }
  }
`;
const ColunaImagem3 = styled.div`
  flex: 1 0 125px;
  @media (max-width: 600px){
    flex: 0 150px;
  }
  @media (max-width: 500px){
    /* flex: 1 0 150px;
    img {
      height: 200px;
    } */
    display: none;
  }
`;

const ImagemPequena = styled.img`
  @media (max-width: 600px){
    max-height: 250px;
  }
`;

const Faixa3 = () => (
  <Faixa3Wrapper>
    <ContentContainer>
      <FaixaConteudoResponsive3>
        <Faixa1Texto>
          <TitleFaixa3>Por que a Emagrecentro é a franquia de
          <TitleStrongFaixa3>{" "}emagrecimento mais lucrativa?</TitleStrongFaixa3>
          </TitleFaixa3>
          <TextSimple>
            De Norte a Sul do Brasil e nos Estados Unidos, temos franqueados de todas as profissões, você não precisa ser da área da saúde! Lucre de verdade oferecendo produtos e tratamentos especializados para gordura localizada, celulite, flacidez e emagrecimento rápido.
          </TextSimple>
        </Faixa1Texto>
      </FaixaConteudoResponsive3>
      <ImagensWrapper>
        <ColunaImagem1>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto1.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto1.png" alt="Emagrecentro" />
            </picture>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto2.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto2.png" alt="Emagrecentro" />
          </picture>
        </ColunaImagem1>
        <ColunaImagem2>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto3.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto3.png" alt="Emagrecentro" />
          </picture>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto4.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto4.png" alt="Emagrecentro" />
          </picture>
        </ColunaImagem2>
        <ColunaImagem1>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto5.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto5.png" alt="Emagrecentro" />
          </picture>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto6.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto6.png" alt="Emagrecentro" />
          </picture>
        </ColunaImagem1>
        <ColunaImagem3>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto7.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto7.png" alt="Emagrecentro" />
          </picture>
        </ColunaImagem3>
      </ImagensWrapper>
    </ContentContainer>
  </Faixa3Wrapper>
);

export default Faixa3;
