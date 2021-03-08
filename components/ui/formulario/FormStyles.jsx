import styled from "styled-components";
import Button from "../buttons/Button";

export const Form = styled.form`
  width: 400px;
  border-radius: 1.5rem;
  background-color: ${props => props.theme.client.colors.azul};
  opacity: 1;
  box-shadow: ${props => props.theme.boxShadows.lighter};

  padding: 2rem 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  @media (max-width: 500px) {
    width: 90% !important;
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
  margin-bottom: -3rem;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  color: ${props => props.theme.client.colors.branco};

  h2 {
    font-size: 1.8rem;
    border-radius: 10px;
    padding: 0.5rem;
    font-weight: bold;
    width: 90%;
  }

  p {
    color: ${props => props.theme.client.colors.azulEscuro};
    width: 90%;
    font-size: 1.5rem;
  }

  .formContinue {
    color: ${props => props.theme.client.colors.rosa};
  }
`;

export const FormHeaderModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  p {
    color: ${props => props.theme.client.colors.rosa};
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
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  @media (max-width: 410px) {
    width: 100%;
    font-size: 1.4rem;
  }

  &:hover {
    background-color: ${props => props.theme.client.colors.verde};
    color: ${props => props.theme.client.colors.branco};
  }
  
  br{
    display: none;
    @media(max-width: 360px){
      display: initial;
    }
  }
  @media(max-width: 360px){
    font-size: 1.5rem;
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
  position: relative;
  width: calc(100% + 30px);
  margin: 0 -15px -20px;
`;

export const FormSeguranca = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  .icon {
    color: ${props => props.theme.client.colors.branco};
  }
  .textSeguranca {
    color: #fff;
    padding-left: 1rem;
    font-size: 15px;
    font-weight: 100;
  }
`;

export const FormInputs = styled.div`
  margin: 4rem 0;

  input,
  select {
    margin: 1rem 0;
  }
`;

export const FormInputsMenor = styled(FormInputs)`
  margin: 2rem 0;

  input,
  select {
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
