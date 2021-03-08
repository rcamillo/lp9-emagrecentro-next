import styled from 'styled-components';

const Link = styled.a`
  background-color: ${(props) => (props.backColor ? props.theme.client.colors[props.backColor] : 'none')};
  color: ${(props) => (props.fontColor
    ? props.theme.client.colors[props.fontColor]
    : props.theme.colors.black)};
  display: flex;
  align-items: ${(props) => props.center || 'initial'};
  font-size: 1.6rem;
  padding: 0.6rem 2rem;
  margin: 1rem 0;
  cursor: pointer;
`;

export default Link;
