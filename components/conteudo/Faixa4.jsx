import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "../ui/containers/Container";
import ButtonPulse from "../ui/buttons/ButtonPulse";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import {
  FaixaConteudoResponsive,
  Faixa1Texto,
  Title
} from "./Faixa1";
import { ButtonWrapper } from "./Faixa2";

import { Icones } from "../../helpers/dados";

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleBlue = styled(Title)`
 color: ${props => props.theme.client.colors.azul};
 margin-bottom: 2rem;
`;

const ContentIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap:wrap;
  max-width: 700px;

  @media(max-width: 750px){
    max-width: 100%;
  }
  @media(max-width: 440px){
    justify-content: center;
    align-items: center;
  }
`;
const ContentIconText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 200px;
  margin-bottom: 1.5rem;

  @media(max-width: 440px){
     width: 100%;
  }
`;
const ContentIcon = styled.div``;
const Icon = styled.img`
width: 100px;
`;
const TextIcon = styled.div`
  font-size: 16px;
`;

const Faixa4 = ({ callForm }) => (
    <FaixaWrapperSimples>
      <ContentContainer>
        <TitleBlue>Nossos diferenciais</TitleBlue>
        <ContentIcons>
          {Icones.map(item => (
            <ContentIconText key={item.id}>
              <ContentIcon>
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`/static/img/faixa4/${item.icon}.webp`}
                  />
                  <Icon src={`/static/img/faixa4/${item.icon}.png`} alt="Emagrecentro" />
                </picture>
              </ContentIcon>
              <TextIcon>{ item.text }</TextIcon>
            </ContentIconText>
          ))}
        </ContentIcons>

        <ButtonWrapper>
          <ButtonPulse
            backColor="azul"
            fontColor="branco"
            backPulse="azul"
            onClick={() => callForm()}
          >
            CONHEÇA NOSSO MODELO DE NEGÓCIO!
          </ButtonPulse>
        </ButtonWrapper>
      </ContentContainer>
    </FaixaWrapperSimples>
  );

Faixa4.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa4;
