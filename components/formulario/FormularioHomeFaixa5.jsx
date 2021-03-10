import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";

import Status from "./Status";
import Loader from "./Loader";
import Select from "./Select";
import Input from "./Input";
import InputMasked from "./InputMasked";
import {
  FormTopo,
  FormHeaderHorizontal,
  FormButton,
  FormFooter,
  FormInputsMenor,
  StatusWrapper,
  FormRowHorizontal,
  FormRowHorizontal2Campos,
  FormConteudo,
  FormRowHorizontalCidade,
  FormSeguranca
} from "../ui/formulario/FormStylesHorizontal";

import { capitais, estados } from "../../helpers/dados";

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

const ContentPersonagem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 420px;
  width: 450px;

  @media (max-width: 1000px){
    display: none;
  }
`;
const Personagem = styled.img`
  height: 450px;
`;

export default function FormularioHomeFaixa5() {
  const router = useRouter();

  const [lead, setLead] = useState({
    nome: "",
    celular: "",
    email: "",
    estado: "",
    cidade: "",
    capital: "",
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
    const validou = validacao(lead);

    const validouNome = validaNomeCompleto(lead.nome);
    const validouCelular = validaTelefone(lead.celular);

    if (!validou || !validouNome || !validouCelular) {
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
          email: lead.email,
          uf: lead.estado,
          cidade: lead.cidade,
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
          celular: lead.celular,
          email: lead.email,
          uf: lead.uf,
          cidade: lead.cidade
        },
        lead_id: data._id,
        lead_expire: hoje
      };

      localStorage.setItem("@emagrecentro/session-lead", JSON.stringify(dados));

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
        <FormTopo onSubmit={handleSubmit}>
          <FormConteudo>
            <FormHeaderHorizontal>
              <p>Baixe nossa apresentação!</p>
              <span>
                Preencha o formulário abaixo e receba nossa apresentação completa.
              </span>
            </FormHeaderHorizontal>
            <FormInputsMenor>
              <FormRowHorizontal>
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
              </FormRowHorizontal>
              <FormRowHorizontal2Campos>
                <Input
                  nome="email"
                  placeholder="E-mail"
                  handleInput={handleInput}
                  valor={lead.email}
                  valido={controleForm.valido}
                  className="select-input--cinza"
                  tipo="email"
                />
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
              </FormRowHorizontal2Campos>
              <FormRowHorizontalCidade>
                <Select
                  nome="estado"
                  placeholder="UF"
                  handleInput={handleEstado}
                  valor={lead.estado}
                  valores={estados}
                  valido={controleForm.valido}
                  className="select-input--cinza select-input--tiny"
                />
                <Select
                  nome="cidade"
                  placeholder="Selecione uma Cidade"
                  handleInput={handleInput}
                  valor={lead.cidade}
                  valores={cidades}
                  valido={controleForm.valido}
                  className="select-input--cinza select-input--medium"
                />
              </FormRowHorizontalCidade>
              <Select
                nome="capital"
                placeholder="Capital disponível para investimento?"
                handleInput={handleInput}
                valor={lead.capital}
                valores={capitais}
                valido={controleForm.valido}
                className="select-input--cinza"
              />
            </FormInputsMenor>
            <FormButton
              type="submit"
              backColor="azul"
              fontColor="branco"
            >
            BAIXAR APRESENTAÇÃO!
            </FormButton>
            <FormSeguranca>
              <i className="fas fa-lock icon" />
              <span className="textSeguranca">
                Seus dados estão protegidos conosco.
              </span>
            </FormSeguranca>
          </FormConteudo>
          <FormFooter>
            <ContentPersonagem>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/static/img/faixa5/personagem.webp"
                />
                <Personagem src="/static/img/faixa5/personagem.png" alt="Emagrecentro" />
              </picture>
            </ContentPersonagem>
          </FormFooter>
        </FormTopo>
      )}
    </>
  );
}
