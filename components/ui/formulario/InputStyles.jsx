import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  .select-input {
    width: 90%;
    border: none;
    border-radius: 10px;
    background-color: #fff;
    height: 4.5rem;
    padding-left: 1rem;

    :disabled {
      cursor: not-allowed;
    }

    &--cinza {
      width: 90%;
      background-color: ${props =>
        props.theme.client.colors.moreLessLighterGrey};
      border: 0.5px solid ${props => props.theme.colors.lightGrey};
      @media (max-width: 410px) {
        width: 100%;
      }
    }

    &--tiny {
      max-width: 10rem;
      width: 7rem;
    }

    &--medium {
      min-width: 23rem;
    }

    &--erro {
      box-shadow: 0px 0px 3px 2px red;
    }

    &--home {
      background-color: transparent;
      border: 0.5px solid #fbb8a2;
      border-radius: 25px;
      width: 280px;
      @media (max-width: 410px) {
        width: 100%;
      }
    }
  }

  .text-area {
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    border-radius: 10px;
    padding: 1rem;
    margin-top: 0.5rem;
    height: 10rem;
    width: 90%;

    :disabled {
      cursor: not-allowed;
    }

    &--cinza {
      border: 0.5px solid ${props => props.theme.colors.lightGrey};
    }

    &--erro {
      box-shadow: 0px 0px 3px 2px red;
    }
    &--sucess {
      box-shadow: 0px 0px 2px 1px #71d946;
    }
  }

`;

export const TextAreaGroup = styled(InputGroup)`
  width: 100%;
`;


export const SelectGroup = styled(InputGroup)``;
