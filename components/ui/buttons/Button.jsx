import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.backColor
    ? props.theme.client.colors[props.backColor]
    : props.theme.colors.black)};
  border-radius: 10px;
  color: ${(props) => (props.fontColor
    ? props.theme.client.colors[props.fontColor]
    : props.theme.colors.black)};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: ${(props) => props.center || 'initial'};
  font-size: 1.6rem;
  padding: 0.6rem 2rem;
  transition: all 0.2s ease 0s;
  &:disabled {
    background-color: ${(props) => props.theme.colors.lightGrey};
    pointer-events: none;
  }
`;

export default Button;
