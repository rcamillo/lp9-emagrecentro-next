/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";

import Status from "./Status";
import Loader from "./Loader";
import Select from "./Select";
import Input from "./Input";
import InputMasked from "./InputMasked";
import Icon from "../ui/icons/Icon";
import {
  Form,
  FormHeader,
  FormButton,
  FormFooter,
  FormInputsMenor,
  StatusWrapper,
  FormSeguranca,
  FormRow
} from "../ui/formulario/FormStyles";

import {
  validacao,
  infosErro,
  validaNomeCompleto,
  validaTelefone
} from "../../helpers/formulario";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.div`
  background-color: ${props => props.theme.client.colors.verdeClaro};
  border-radius: 50%;
  position: absolute;
  right: -15px;
  top: -8px;
  width: 6rem;
  height: 6rem;
`;

export default function FormularioHome() {
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
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <FormHeader>
              <h2>SOLICITE UM ORÇAMENTO PELO WHATSAPP!</h2>
              <p>
                É só preencher o formulário e chamar no WhatsApp agora mesmo!
              </p>
            </FormHeader>
            <FormInputsMenor>
              <Input
                nome="nome"
                placeholder="Nome Completo"
                handleInput={handleInput}
                valor={lead.nome}
                valido={controleForm.valido}
                className="select-input--cinza"
                tipo="text"
                custom={lead.nome ? validaNomeCompleto(lead.nome) : true}
              />
              {/* <Input
              nome="email"
              placeholder="E-mail"
              handleInput={handleInput}
              valor={lead.email}
              valido={controleForm.valido}
              className="select-input--cinza"
              tipo="email"
            /> */}
              <InputMasked
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
              {/* <FormRow>
              <SelectEstado
                nome="estado"
                placeholder="UF"
                handleInput={handleEstado}
                valor={lead.estado}
                valores={estados}
                valido={controleForm.valido}
                className="select-input--cinza select-input--tiny"
              />
              <SelectCidade
                nome="cidade"
                placeholder="Selecione uma Cidade"
                handleInput={handleInput}
                valor={lead.cidade}
                valores={cidades}
                valido={controleForm.valido}
                className="select-input--cinza select-input--medium"
              />
            </FormRow>
            <Select
              nome="capital"
              placeholder="Capital disponível para investimento?"
              handleInput={handleInput}
              valor={lead.capital}
              valores={capitais}
              valido={controleForm.valido}
              className="select-input--cinza"
            /> */}
            </FormInputsMenor>
            <FormFooter>
              <FormButton
                type="submit"
                backColor="verdeClaro"
                fontColor="branco"
              >
                CHAMAR NO WHATSAPP <br/>(17) 99788...
              </FormButton>
              <IconWrapper>
                <Icon tamanho="6rem" icon="whatsapp" cor="#fff" tipo="svg" />
              </IconWrapper>
            </FormFooter>
          </Form>
          {/* <FormSeguranca>
            <i className="fas fa-lock icon" />
            <span className="textSeguranca">
              Seus dados estão protegidos conosco.
            </span>
          </FormSeguranca> */}
        </FormContainer>
      )}
    </>
  );
}
