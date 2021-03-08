/* eslint-disable consistent-return */
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

import Link from "../components/ui/buttons/Link";
import Icon from "../components/ui/icons/Icon";

import Logo from "../components/ui/faixas/Logo";

const LinkDownload = styled(Link)`
  padding: 1.5rem 2.5rem;
  transition: all 0.2s ease 0s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    p {
      width: 95%;
    }
  }
`;

const WAWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1rem 2rem;

  @media (max-width: 500px) {
    flex-direction: column;
    width: fit-content;
  }
`;

const ConteudoWrapper = styled.div`
  background-color: ${props => props.theme.client.colors.primaria};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem 2rem 10rem;
  position: relative;
  text-align: center;

  @media (max-width: 900px) {
    background-position: cover right;
    padding: 2rem 1.5rem;
  }
`;

const TextSucesso = styled.p`
  width: 60vw;
  color: ${props => props.theme.client.colors.fontPrimaria};
  font-size: 16px;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const TextSucessoCap = styled(TextSucesso)`
  font-size: 28px;
  font-weight: 800;
`;

const Teste = styled(Icon)`
  margin-right: 0.5rem;
`;

const Sucesso = () => {
  const router = useRouter();

  const [leadCompleto, setlead] = useState();

  useEffect(() => {
    async function buscaSession() {
      const session = await JSON.parse(
        await localStorage.getItem("@plcmaquinas/session-lead")
      );

      if (session) {
        const leadNome = session.lead_body.nome;
        setlead(leadNome);
        setTimeout(() => {
          window.location.href =
            "https://wa.me/5517997881968/?text=" +
            encodeURI(
              "[PLC Máquinas] Quero mais informações sobre máquinas vulcanizadoras"
            );
        }, 5000);
      } else {
        router.push("/");
        return false;
      }

      localStorage.removeItem("@plcmaquinas/session-lead");
    }

    buscaSession();
  }, ["umavez"]);

  return (
    <div>
      <Head>
        <title>
          Fature vulcanizando pneus | PLC MÁQUINAS Silvio Pelicer 
        </title>
        <meta
          name="description"
          content="Fature mais de 10 mil por mês com as máquinas vulcanizadoras PLC. Conserte pneus agrícolas, de carga e OTR. Compare os custos. Orçamento via WhatsApp."
        />
        <meta
          name="keywords"
          content="plc maquinas vulcanizadoras, silvio pelicer, pneus agricolas, pneus de carga, pneus otr, conserto de pneus caminhao, pneus trator, vulcanizar pneu preço, vulcanizaçao de pneus, custo conserto pneu, maquina de vulcanizar pneus, pneus para maquinas, pneu vulcanizado,  maquina p1 vulcanizar pneu, descolador de pneu agricola, descolar de pneu caminhao"
        />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://lp9plcmaquinas.netlify.app/static/img/og.jpg"
        />
        <meta
          property="og:title"
          content="Fature vulcanizando pneus | PLC MÁQUINAS Silvio Pelicer "
        />
        <meta
          property="og:description"
          content="Fature mais de 10 mil por mês com as máquinas vulcanizadoras PLC. Conserte pneus agrícolas, de carga e OTR. Compare os custos. Orçamento via WhatsApp."
        />
        <meta
          property="og:url"
          content="https://lp9plcmaquinas.netlify.app/"
        />
      </Head>
      <>
        <ConteudoWrapper>
          <Logo src="/static/img/faixa1/logo.png" alt="logo, PLC Máquinas" />
          <TextSucessoCap>
            Obrigado, {leadCompleto}, <br />
            aguarde, você está sendo redirecionado para o nosso
            <br /> WhatsApp (17) 99788-1968
          </TextSucessoCap>
          <TextSucesso>
            Caso o WhatsApp não abra automaticamente nos próximos 15 segundos,
            clique no botão abaixo.
          </TextSucesso>
          <WAWrapper>
            <LinkDownload
              backColor="verde"
              fontColor="branco"
              center="center"
              href={
                "https://wa.me/5517997881968/?text=" +
                encodeURI(
                  "[PLC Máquinas] Quero mais informações sobre máquinas vulcanizadoras"
                )
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Teste
                tamanho="2rem"
                cor={props => props.theme.client.colors.branco}
                icon="whatsapp"
                tipo="svg"
              />
              <p>
                {" "}
                Enviar mensagem no <strong>WhatsApp</strong>
              </p>
            </LinkDownload>
          </WAWrapper>
        </ConteudoWrapper>
      </>
    </div>
  );
};

export default Sucesso;
