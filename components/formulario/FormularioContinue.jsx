/* eslint-disable consistent-return */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import InputMasked from "./InputMasked";

import Status from "./Status";
import Loader from "./Loader";
import TextArea from "./TextArea";
import Input from "./Input";

import {
  Form,
  FormButton,
  FormFooter,
  FormInputsMenor,
  StatusWrapper,
  FormSeguranca,
  FormHeader
} from "../ui/formulario/FormStyles";

import {
  validacaoContinue,
  infosErro,
  validaTelefone
} from "../../helpers/formulario";

import { LogoContent, Logo } from "../conteudo/Faixa1";

const FormContinue = styled(Form)`
  width: 400px;
  box-shadow: none;
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadows.stronger};

  padding: 4rem 3rem 2rem;
  margin-bottom: -8rem;

  position: relative;
  z-index: 10;
  @media (max-width: 900px) {
    justify-content: center;
  }
  @media (max-width: 400px) {
    max-width: 100%;
    width: 100%;
  }
`;

const FormHeaderContinue = styled(FormHeader)`
  justify-content: center;
  text-align: center;
`;

const LogoContentContinue = styled(LogoContent)`
  justify-content: center;
  margin-bottom: 0;
`;

const LogoContinue = styled(Logo)`
  width: 230px;
  height: auto;
`;

const ContinueInputsMenor = styled(FormInputsMenor)`
  margin-top: 0;
`;

const FormFooterContinue = styled(FormFooter)`
  margin-bottom: 1rem;
`;

const FormButtonContinue = styled(FormButton)`
  border-radius: 15px;

  &::after {
    background-color: ${props => props.theme.client.colors.verdeClaro};
    border-radius: 15px;
  }
`;

const StatusWrapperContinue = styled(StatusWrapper)`
  box-shadow: none;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default function FormularioContinue() {
  const router = useRouter();
  const [session, setSession] = useState();
  const [lead, setLead] = useState({
    whatsapp: "",
    profissao: "",
    porque: ""
  });
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

    // Onde está false, é a informação de implantação da unidade
    const validou = validacaoContinue(lead);
    const telefoneCorreto = validaTelefone(lead.whatsapp);

    if (!validou || !telefoneCorreto) {
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

    try {
      await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _id: session.lead_id,
          client_id: process.env.CLIENT_ID,
          campaign_id: process.env.CAMPAIGN_ID,
          whatsapp: lead.whatsapp,
          profissao: lead.profissao,
          porque: lead.porque
        })
      });

      setControleForm({
        ...controleForm,
        sucesso: true
      });

      localStorage.setItem(
        "@emagrecentro/session-lead",
        JSON.stringify({ ...session, lead_sucesso: true })
      );

      router.push("/finalizado");
    } catch (err) {
      setControleForm({
        ...controleForm,
        sucesso: false,
        enviando: false,
        erro: true
      });
    }
  };

  useEffect(() => {
    async function buscaSession() {
      const storageSession = await JSON.parse(
        localStorage.getItem("@emagrecentro/session-lead")
      );

      if (!storageSession) {
        router.push("/");
      }
      setSession(storageSession);
    }

    buscaSession();
  }, ["umavez"]);

  return (
    <>
      {controleForm.enviando && !controleForm.erro && (
        <StatusWrapperContinue>
          <p>
            <strong>Carregando...</strong>
          </p>
          <Loader />
        </StatusWrapperContinue>
      )}
      {controleForm.erro && !controleForm.sucesso && (
        <StatusWrapperContinue>
          <Status infos={infosErro} />
        </StatusWrapperContinue>
      )}
      {!controleForm.enviando && !controleForm.erro && !controleForm.sucesso && (
        <FormContinue onSubmit={handleSubmit}>
          <FormHeaderContinue>
            <LogoContentContinue>
              <picture>
                {/* <source type="image/webp" srcSet="/static/img/logo_azul.webp" /> */}
                <LogoContinue
                  src="/static/img/logo_azul.png"
                  alt="Emagrecentro"
                />
              </picture>
            </LogoContentContinue>
          </FormHeaderContinue>
          <ContinueInputsMenor>
            <InputMasked
              mask="tel/cel"
              nome="whatsapp"
              placeholder="Qual seu WhatsApp?"
              handleInput={handleInput}
              valor={lead.whatsapp}
              valido={controleForm.valido}
              custom={lead.whatsapp ? validaTelefone(lead.whatsapp) : true}
              className="select-input--cinza"
              tipo="tel"
            />
            <Input
              nome="profissao"
              placeholder="Qual sua profissão?"
              handleInput={handleInput}
              valor={lead.profissao}
              valido={controleForm.valido}
              className="select-input--cinza"
            />
            <TextArea
              nome="porque"
              placeholder="Tem alguma experiência no setor de franquias e/ou estética?"
              handleInput={handleInput}
              valor={lead.porque}
              valido={controleForm.valido}
              className="text-area text-area--cinza"
            />
          </ContinueInputsMenor>
          <FormFooterContinue>
            <FormButtonContinue
              type="submit"
              backColor="verdeClaro"
              fontColor="branco"
              backPulse="verdeClaro"
            >
              CONCLUIR CADASTRO!
            </FormButtonContinue>
          </FormFooterContinue>
          <FormSeguranca>
            <i className="fas fa-lock icon" />
            <span className="textSeguranca">
              Site 100% seguro e livre de spam
            </span>
          </FormSeguranca>
        </FormContinue>
      )}
    </>
  );
}
