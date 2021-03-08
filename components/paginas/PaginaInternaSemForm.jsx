import styled from 'styled-components';
import PropTypes from 'prop-types';

const ConteudoInterno = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 980px) {
    display: block;
  }
`;

const ChildrenSection = styled.div`
  grid-column: 1 / 4;
`;

const PaginaInterna = ({ children }) => (
  <ConteudoInterno>
    <ChildrenSection>{children}</ChildrenSection>
  </ConteudoInterno>
);

PaginaInterna.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PaginaInterna;
