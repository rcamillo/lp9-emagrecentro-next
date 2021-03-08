import styled from 'styled-components';
import Button from './Button';

const ButtonOutline = styled(Button)`
  border: 2.5px solid
    ${(props) => (props.borderColor
    ? props.theme.client.colors[props.borderColor]
    : '#fff')};
  font-weight: bold;
  border-radius: 0px;
`;

export default ButtonOutline;
