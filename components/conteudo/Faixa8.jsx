import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "../ui/containers/Container";

import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import { TitleVerde } from "./Faixa1";
import { ButtonWrapper } from "./Faixa2";

import ButtonPulse from "../ui/buttons/ButtonPulse";

import Icon from "../ui/icons/Icon";

import Youtube from "../videos/Youtube";
import { List } from "../../helpers/dados";

const FaixaWrapperSimplesPadding = styled(FaixaWrapperSimples)`
  @media (max-width: 990px){
    padding: 0 1rem;
  }
`;

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 1100px;
  min-height: 450px;
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 1rem;

  @media (max-width: 990px){
    flex-direction: column;
    width: auto;
    padding: 0 1rem;
    min-height: initial;
  }
`;

const Block = styled.div`
  width: 480px;
  @media (max-width: 990px){
    width: 100%;
    margin-top: 2rem;
  }
`;

const TitleStrongFaixa8 = styled(TitleVerde)`
  color: ${props => props.theme.client.colors.azul};
`;

const TextSimple = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 300;
  margin: 2rem 0;
  color: ${props => props.theme.client.colors.azul};
`;

const ItemList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
  color: ${props => props.theme.client.colors.azul};
  font-size: 16px;
  font-weight: bold;
`;

const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #23c1cb;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Faixa8 = ({ callForm }) => (
  <FaixaWrapperSimplesPadding>
    <ContentContainer>
      <ContentBlock>
        <Block>
          <Youtube youtubeId="V-wTTxbYWrY" />
        </Block>
        <Block>
          <TitleStrongFaixa8>Sobre Emagrecentro</TitleStrongFaixa8>
          <TextSimple>
            Somos a maior rede de emagrecimento das Américas! Fundada pelo Dr. Edson Ramuth, membro da Associação Brasileira de Nutrologia e Medicina Estética e criador do único da metodologia de Emagrecimento Científico - Método em 4 fases:
          </TextSimple>
          {List.map(item => (
            <ItemList key={item.id}>
              <ContentIcon>
                <Icon tamanho="2rem" icon="check" cor="#fff" tipo="svg" />
              </ContentIcon>  
              {item.text}
            </ItemList>
          ))}
          <ButtonWrapper>
            <ButtonPulse
              backColor="azul"
              fontColor="branco"
              backPulse="azul"
              onClick={() => callForm()}
            >
              BAIXE A APRESENTAÇÃO DA FRANQUIA!
            </ButtonPulse>
          </ButtonWrapper>
        </Block>
      </ContentBlock>
    </ContentContainer>
  </FaixaWrapperSimplesPadding>
);

Faixa8.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa8;
