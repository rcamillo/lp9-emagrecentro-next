import styled from "styled-components";

import Container from "../ui/containers/Container";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import Icon from "../ui/icons/Icon";

import { Title, TitleVerde } from "./Faixa1";
import { depoimentos } from "../../helpers/dados";

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const TitleFaixa7 = styled(Title)`
  color: ${props => props.theme.client.colors.azul};
  line-height: 3rem;
`;
const TitleStrongFaixa7 = styled(TitleVerde)`
  color: ${props => props.theme.client.colors.azul};
  padding-bottom: 0;
`;

const FontText = styled.p`
  font-size: 15px;
  font-weight: 300;
  margin: 0;
`;

const ContentCards = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5rem 0 2rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  @media (max-width: 1020px){
    max-width: 450px;
    margin: 2rem 1rem;
  }

  @media (max-width: 500px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
`;

const ContentTexts = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 350px;

  @media (max-width: 370px){
    width: 100%;
  }
`;

const ContentImageFoto = styled.div`
  margin-right: 1rem;
`;
const ImageFoto = styled.img`
  width: 130px;
`;

const ContentImageAspas = styled.div``;
const ImageAspas = styled.img`
  height: 5rem;

  @media (max-width: 1020px){
    height: 2.5rem;
  }
`;

const TextCardGrey = styled.p`
  font-size: 18px;
  height: 7rem;
  line-height: 20px;

  @media (max-width: 370px){
    height: auto;
  }
`;
const TextFranquedoCard = styled.p`
  color: #1f7bca;
  font-size: 16px;
`;

const Faixa7 = () => (
  <FaixaWrapperSimples>
    <ContentContainer>
      <TitleFaixa7>
        Retorno comprovado!
         <Icon tamanho="2rem" tipo="svg" cor="" icon="correct" />
      </TitleFaixa7>
      <TitleStrongFaixa7>
        100% dos franqueados recuperaram o investimento no prazo esperado*!
      </TitleStrongFaixa7>
      <FontText>*Fonte: Pesquisa ABF</FontText>
    </ContentContainer>
    <ContentCards>
    {depoimentos.map(depoimento => (
      <Card>
        <ContentImageFoto>
          <picture>
            <source
              type="image/webp"
              srcSet={`/static/img/faixa6/${depoimento.icon}.webp`}
            />
            <ImageFoto src={`/static/img/faixa6/${depoimento.icon}.png`} alt="Emagrecentro" />
          </picture>
        </ContentImageFoto>
        <ContentTexts>
          <ContentImageAspas>
            <picture>
              <source
                type="image/webp"
                srcSet={`/static/img/faixa6/aspas.webp`}
              />
              <ImageAspas src={`/static/img/faixa6/aspas.png`} alt="Emagrecentro" />
            </picture>
          </ContentImageAspas>
          <TextCardGrey>{ depoimento.text }</TextCardGrey>
          <TextFranquedoCard>{ depoimento.text2 }</TextFranquedoCard>
        </ContentTexts>
      </Card>
    ))}
    </ContentCards>
  </FaixaWrapperSimples>
);

export default Faixa7;
