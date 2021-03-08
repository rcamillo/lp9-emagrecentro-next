import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "../ui/containers/Container";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import {
  FaixaConteudoResponsive,
  Faixa1Texto,
  Title,
  TitleSimple,
  ButtonPulseFaixa1,
  ButtonWrapper,
  IconWrapper,
  IconZap
} from "./Faixa1";

import { lista } from "../../helpers/dados";
import Icon from "../ui/icons/Icon";
import Video from "../videos/Video";

const Faixa5Wrapper = styled(FaixaWrapperSimples)`
  padding-top: 0;
`;

const Faixa5ConteudoResponsive = styled(FaixaConteudoResponsive)`
  padding-top: 0;
`;

const TitleSimpleFaixa5 = styled(TitleSimple)`
  margin-bottom: 3rem;
`;

const ListaContent = styled.div``;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
`;

const Item = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 1rem;
`;

const ButtonWrapperFaixa5 = styled(ButtonWrapper)`
  margin-bottom: 5rem;
`;
const ButtonPulseFaixa5 = styled(ButtonPulseFaixa1)`
  &::after {
    background-color: ${props => props.theme.client.colors.turquesa};
  }
`;

const Faixa5 = ({ callForm }) => {
  return (
    <Faixa5Wrapper>
      <Container>
        <Faixa5ConteudoResponsive>
          <Faixa1Texto>
            <Title>NA PLC MÁQUINAS VULCANIZADORAS, VOCÊ TEM:</Title>

            <ListaContent>
              {lista.map(item => {
                return (
                  <ItemWrapper key={item.id}>
                    <Icon
                      tamanho="3rem"
                      icon="check"
                      cor="#0d8784"
                      tipo="svg"
                    />
                    <Item>{item.text}</Item>
                  </ItemWrapper>
                );
              })}
            </ListaContent>

            <ButtonWrapperFaixa5>
              <ButtonPulseFaixa5
                backColor="turquesa"
                fontColor="branco"
                onClick={() => callForm()}
              >
                LUCRE MAIS RENOVANDO PNEUS!
              </ButtonPulseFaixa5>
            </ButtonWrapperFaixa5>

            <TitleSimpleFaixa5>
              A vulcanização é um método para consertar cortes, rasgos ou
              estouros de pneus danificados. O processo é feito com a raspagem
              interna e externa do pneu. Incluindo cola, manchão e borracha
              crua.
            </TitleSimpleFaixa5>

            <Video
              youtubeId="1D9EzuglYoI"
              title="Máquina P1 para vulcanizar aros 13 ao 18"
              placeholderImgName="thumb"
            />
            <ButtonWrapper>
              <ButtonPulseFaixa1
                backColor="verde"
                fontColor="branco"
                onClick={() => callForm()}
              >
                <IconWrapper>
                  <IconZap
                    tamanho="3rem"
                    icon="whatsapp"
                    cor="#fff"
                    tipo="svg"
                  />
                  CHAME NO WHATSAPP AGORA!
                </IconWrapper>
              </ButtonPulseFaixa1>
            </ButtonWrapper>
          </Faixa1Texto>
        </Faixa5ConteudoResponsive>
      </Container>
    </Faixa5Wrapper>
  );
};

Faixa5.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa5;
