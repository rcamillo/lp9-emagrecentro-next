import styled from "styled-components";

import Container from "../ui/containers/Container";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import { Faixa1Texto, FaixaConteudoResponsive, Title } from "./Faixa1";
import { slider } from "../../helpers/dados";

import { CarouselProvider, Dot, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Faixa6WrapperSimples = styled(FaixaWrapperSimples)`
  padding-top: 0;
`;

const DepoimentosContainer = styled(CarouselProvider)`
  width: 100%;
`;

const SlideItem = styled(Slide)`
  div {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

const Dots = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const DotItem = styled(Dot)`
  background-color: #333333;
  border-radius: 50%;
  height: 15px;
  margin: 0 5px;
  width: 15px;
`;

const Faixa6 = () => (
  <Faixa6WrapperSimples>
    <Container>
      <FaixaConteudoResponsive>
        <Faixa1Texto>
          <Title>PLC MÁQUINAS VULCANIZADORAS É 5 ESTRELAS NO GOOGLE!</Title>
          <DepoimentosContainer
            totalSlides={4}
            visibleSlides={1}
            naturalSlideHeight={220}
            naturalSlideWidth={830}
          >
            <Slider>
              {slider.map(item => {
                return (
                  <SlideItem index={item.id} key={item.id}>
                    <img
                      src={item.image}
                      alt="Logo cliente"
                    />
                  </SlideItem>
                );
              })}
            </Slider>
            <Dots>
              <DotItem slide={0} />
              <DotItem slide={1} />
              <DotItem slide={2} />
              <DotItem slide={3} />
            </Dots>
          </DepoimentosContainer>
        </Faixa1Texto>
      </FaixaConteudoResponsive>
    </Container>
  </Faixa6WrapperSimples>
);

export default Faixa6;
