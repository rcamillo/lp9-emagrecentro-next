import styled from 'styled-components';

export const IconWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BigCircleIconWrapper = styled(IconWrapper)`
  background-color: ${(props) => props.theme.client.colors.verdeComCinza};
  padding: 3rem;
  width: 3rem;
  height: 3rem;
`;

export const ListIconWrapper = styled(IconWrapper)`
  border: 1px solid #000;
  width: 2rem;
  height: 2rem;
  padding: 0.3rem;
  margin-right: 1rem;
`;
