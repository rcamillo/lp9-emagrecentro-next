import styled from 'styled-components';
import PropTypes from 'prop-types';

const ConteudoInterno = styled.div`

`;

const ChildrenSection = styled.div`

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
