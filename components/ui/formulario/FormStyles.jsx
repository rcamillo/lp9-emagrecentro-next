import styled, { keyframes } from "styled-components";
import Button from "../buttons/Button";

const pulse = keyframes`
  0% {
    transform: initial;
    opacity: 1;
  }
  80% {
    transform: initial;
    opacity: 1;
  }
  100% {
    transform: scaleX(1.2) scaleY(1.3);
    opacity: 0;
  }
`;

export const Form = styled.form`
  width: 370px;
  border-radius: 1.5rem;
  background-color: #fff;
  opacity: 0.95;
  box-shadow: ${props => props.theme.boxShadows.stronger};

  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  @media (max-width: 400px) {
    width: 98%;
  }
`;

export const FormHome2 = styled.form`
  width: 400px;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 410px) {
    justify-content: space-between;
  }
`;

export const FormRowCheck = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -1rem 0 -2rem 0;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: left;

  h2 {
    text-transform: uppercase;
    color: ${props => props.theme.client.colors.marrom};
    font-size: 1.35rem;
    margin-top: 4rem;
    @media (max-width: 900px) {
      margin-top: -2rem;
    }
  }

  h3 {
    text-transform: uppercase;
    width: 90%;
  }

  p {
    color: #a8a18b;
    width: 90%;
    font-size: 1.5rem;
  }
`;

export const FormButton = styled(Button)`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 5rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0 0 15px 15px;
  @media (max-width: 410px) {
    width: 100%;
  }

  position: relative;
  z-index: 1;
  &::after {
    animation: ${pulse} 3.6s ease-in-out infinite;
    background-color: ${props => props.theme.client.colors.verde};
    border-radius: 0 0 15px 15px;
    content: "";
    display: inline-block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  &:hover {
    background-color: ${props => props.theme.client.colors.branco};
    color: ${props => props.theme.client.colors.verde};
    border: 4px solid ${props => props.theme.client.colors.verde};
    &::after {
      visibility: hidden;
    }
  }
`;

export const FormButtoncontinue = styled(Button)`
  width: 90%;
  justify-content: center;
  align-items: center;
  height: 5rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 15;
  @media (max-width: 410px) {
    width: 100%;
  }

  position: relative;
  z-index: 1;
  &::after {
    animation: ${pulse} 3.6s ease-in-out infinite;
    background-color: ${props => props.theme.client.colors.roxo};
    border-radius: 15px;
    content: "";
    display: inline-block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  &:hover {
    background-color: ${props => props.theme.client.colors.branco};
    color: ${props => props.theme.client.colors.roxo};
    border: 4px solid ${props => props.theme.client.colors.roxo};
    &::after {
      visibility: hidden;
    }
  }
`;

export const FormButtonHome = styled(Button)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0;

  @media (max-width: 410px) {
    width: 100%;
  }

  position: relative;
  z-index: 1;

  &::after {
    animation: ${pulse} 3.6s ease-in-out infinite;
    background-color: ${props => props.theme.client.colors.azul};
    content: "";
    display: inline-block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  &:hover {
    background-color: ${props => props.theme.client.colors.branco};
    color: ${props => props.theme.client.colors.azul};
    border: 4px solid ${props => props.theme.client.colors.azul};
    &::after {
      visibility: hidden;
    }
  }
`;

export const StatusWrapper = styled.div`
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadows.stronger};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 300px;
  height: 440px;
  width: 100%;
  border-radius: 1.5rem;
  padding: 1.5rem 2rem;

  p {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    strong {
      color: ${props => props.theme.client.colors.marrom};
    }
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* margin-bottom: 3rem; */
`;

export const FormFooterHome = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
`;

export const FormInputs = styled.div`
  margin: 4rem 0;

  input,
  select,
  textarea {
    margin: 1rem 0;
  }
`;

export const FormInputsMenor = styled(FormInputs)`
  margin: 2rem 0;

  input,
  select,
  textarea {
    margin: 0.5rem 0;
  }
`;

export const FormInputsMenorHome = styled(FormInputs)`
  margin: 2rem 1.5rem;

  input,
  select,
  textarea {
    margin: 0.5rem 0;
  }
`;

export const FormWrapper = styled.div`
  border-radius: 10px;

  display: flex;
  justify-content: space-between;

  max-width: 610px;
  width: 100%;

  @media (max-width: 610px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div:nth-child(2) {
      margin: 1rem 0 0.5rem 0;
    }

    div:nth-child(3) {
      margin: 0.5rem 0 1rem 0;
    }
  }
`;
