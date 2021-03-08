import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const slideHand = keyframes`
  0% {
    transform: translateX(0px);
  }
  80% {
    transform: translateX(0px);
  }
  90% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const SlideIconWrapper = styled.div`
  justify-content: center;
  display: none;

  margin: 2rem 0;

  @media (max-width: ${props => props.width}) {
    display: flex;
  }

  .slide-icon {
    animation: ${slideHand} ease-in-out 4s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
    fill: ${props => props.theme.client.colors.marrom};
    opacity: 0.6;
    height: 2rem;
    width: 2rem;
  }
`;

const Scroll = ({ width }) => (
  <SlideIconWrapper width={width}>
    <svg className="slide-icon">
      <use xlinkHref="/static/icons/icomoon/symbol-defs.svg#icon-hand-pointer-o" />
    </svg>
  </SlideIconWrapper>
);

export default Scroll;

Scroll.propTypes = {
  width: PropTypes.string.isRequired
};
