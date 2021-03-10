import styled from "styled-components";
import Button from "../buttons/Button";

export const FormTopo = styled.form`
  width: 80%;
  border: none;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  position: relative;
  box-shadow: ${props => props.theme.boxShadows.stronger};

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const FormRowHorizontal = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const FormRowHorizontal2Campos = styled(FormRowHorizontal)`
  grid-template-columns: 50% 50%;
  gap: 5px;
`;
export const FormRowHorizontalCidade = styled(FormRowHorizontal)`
  grid-template-columns: 20% 80% !important;
  gap: 5px !important;

  @media (max-width: 1000px) {
    display: grid;
  }
`;

export const FormConteudo = styled.div`
  padding: 2rem 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const FormHeaderHorizontal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;

  p {
    text-transform: uppercase;
    color: ${props => props.theme.client.colors.azul};
    font-size: 1.6rem;
    font-weight: 800;
  }

  span {
    color: #aaaaaa;
    font-size: 1.5rem;
    text-transform: initial;
    font-weight: 300;
  }

  @media (max-width: 1000px) {
    justify-content: flex-start;
    align-items: left;
    flex-direction: column;

    p {
      margin-left: 0;
    }

    span {
      width: initial;
    }
  }
`;

export const FormButton = styled(Button)`
  width: initial;
  justify-content: center;
  align-items: center;
  height: 5rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 2rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 60%;
  margin: 0 -15px -20px;

  @media(max-width: 1000px){
    width: 100%;
    margin: 0;
  }
`;

export const FormSeguranca = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  .icon {
    color: ${props => props.theme.client.colors.verdeClaro};
  }
  .textSeguranca {
    color: ${props => props.theme.client.colors.verdeClaro};
    padding-left: 1rem;
    font-size: 15px;
    font-weight: 300;
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
