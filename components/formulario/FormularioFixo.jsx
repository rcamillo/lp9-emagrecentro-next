/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";

import Status from "./Status";
import Loader from "./Loader";
import Input from "./Input";
import InputMasked from "./InputMasked";
import {
  Form,
  FormButton,
  FormFooter,
  StatusWrapper,
  FormSeguranca
} from "../ui/formulario/FormStyles";

import {
  validacao,
  infosErro,
  validaNomeCompleto,
  validaTelefone
} from "../../helpers/formulario";

import { Title, IconWrapper, IconZap } from "../conteudo/Faixa1";

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const FormFixo = styled(Form)`
  width: 60rem;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  padding: 0;

  justify-content: center;

  @media (max-width: 1070px) {
    width: 400px;
  }
  @media (max-width: 600px) {
    max-width: 400px;
    width: 100%;
  }
`;

const FormFooterFixo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
`;

const FormInputsFixo = styled.div`
  margin: 2rem 0;

  input,
  select,
  textarea {
    margin: 0.5rem 0;
    height: 5rem !important;
    padding: 5px 15px !important;
  }
`;

const InputFixo = styled(Input)`
  justify-content: flex-start;
  margin-bottom: 1.5rem;
`;

const InputMaskedFixo = styled(InputMasked)`
  justify-content: flex-start;
  margin-bottom: 1.5rem;
`;

const TitleFixo = styled(Title)`
  font-weight: 500;
  color: ${props => props.theme.client.colors.branco};

  span {
    font-size: 1.8rem;
  }
`;

const FormFixoButton = styled(FormButton)`
  border-radius: 0;
  padding: 2rem 4rem;
  font-size: 1.4rem;
  height: 6rem;
  width: 90%;
`;

export default function FormularioFixo() {
  const router = useRouter();

  const [lead, setLead] = useState({
    nome: "",
    celular: ""
    // email: "",
    // estado: "",
    // cidade: "",
  });

  const [cidades, setCidades] = useState([]);

  const [controleForm, setControleForm] = useState({
    carregando: "dias",
    valido: true,
    enviando: false,
    erro: false,
    sucesso: false
  });

  const handleInput = ({ currentTarget: { name, value } }) => {
    setLead({ ...lead, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const validouNome = validaNomeCompleto(lead.nome);
    const validouCelular = validaTelefone(lead.celular);
    // const validouEmail = validaEmail(lead.email);

    if (!validouNome || !validouCelular) {
      setControleForm({
        ...controleForm,
        valido: false
      });

      return false;
    }

    setControleForm({
      ...controleForm,
      enviando: true
    });

    const queryParams = queryString.parse(window.location.search);

    try {
      const response = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          client_id: process.env.CLIENT_ID,
          campaign_id: process.env.CAMPAIGN_ID,
          nome: lead.nome,
          celular: lead.celular,
          email: lead.nome,
          // uf: lead.estado,
          // cidade: lead.cidade,
          referrer: document.referrer,
          ...queryParams
        })
      });

      const data = await response.json();

      setControleForm({
        ...controleForm,
        sucesso: true
      });

      const hoje = new Date();

      const dados = {
        lead_body: {
          nome: lead.nome,
          celular: lead.celular
          // email: lead.email,
          // uf: lead.uf,
          // cidade: lead.cidade
        },
        lead_id: data._id,
        lead_expire: hoje
      };

      localStorage.setItem("@plcmaquinas/session-lead", JSON.stringify(dados));

      router.push("/sucesso");
    } catch (err) {
      setControleForm({
        ...controleForm,
        sucesso: false,
        enviando: false,
        erro: true
      });
    }
  };

  const handleEstado = async ({ currentTarget: { name, value } }) => {
    setLead({ ...lead, [name]: value, cidade: "" });
    setControleForm({ ...controleForm, carregando: "cidade" });
    setCidades([]);

    try {
      const res = await fetch(`${process.env.CIDADES_URL}${value}.json`);
      const data = await res.json();

      setControleForm({ ...controleForm, carregando: "dias" });
      setCidades(data);
    } catch (error) {
      setControleForm({
        ...controleForm,
        sucesso: false,
        enviando: false,
        erro: true
      });
    }
  };

  return (
    <>
      {controleForm.enviando && !controleForm.erro && (
        <StatusWrapper>
          <p>
            <strong>Carregando...</strong>
          </p>
          <Loader />
        </StatusWrapper>
      )}
      {controleForm.erro && !controleForm.sucesso && (
        <StatusWrapper>
          <Status infos={infosErro} />
        </StatusWrapper>
      )}
      {!controleForm.enviando && !controleForm.erro && !controleForm.sucesso && (
        <>
          <FormWrapper>
            <FormFixo onSubmit={handleSubmit}>
              <TitleFixo>
                <strong>SOLICITE UM ORÇAMENTO PELO WHATSAPP!</strong>
                <br />{" "}
                <span>
                  É só preencher o formulário e chamar no WhatsApp agora mesmo!
                </span>
              </TitleFixo>
              <FormInputsFixo>
                <InputFixo
                  nome="nome"
                  placeholder="Nome Completo"
                  handleInput={handleInput}
                  valor={lead.nome}
                  valido={controleForm.valido}
                  className="select-input--cinza"
                  tipo="text"
                  custom={lead.nome ? validaNomeCompleto(lead.nome) : true}
                />
                <InputMaskedFixo
                  mask="tel/cel"
                  nome="celular"
                  placeholder="Celular"
                  handleInput={handleInput}
                  valor={lead.celular}
                  valido={controleForm.valido}
                  custom={lead.celular ? validaTelefone(lead.celular) : true}
                  className="select-input--cinza"
                  tipo="tel"
                />
              </FormInputsFixo>
              <FormSeguranca>
                <i className="fas fa-lock icon" />
                <span className="textSeguranca">
                  Seus dados estão protegidos conosco.
                </span>
              </FormSeguranca>
              <FormFooterFixo>
                <FormFixoButton
                  type="submit"
                  backColor="verdeClaro"
                  fontColor="branco"
                >
                  <IconWrapper>
                    CHAMAR NO WHATSAPP (17) 99788-1968
                    <IconZap
                      tamanho="3rem"
                      icon="whatsapp"
                      cor="#fff"
                      tipo="svg"
                    />
                  </IconWrapper>
                </FormFixoButton>
              </FormFooterFixo>
            </FormFixo>
          </FormWrapper>
        </>
      )}
    </>
  );
}
