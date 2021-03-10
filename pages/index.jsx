import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Element, scroller } from "react-scroll";

import PaginaInterna from "../components/paginas/PaginaInterna";
import FormularioHomeTopo from "../components/formulario/FormularioHomeTopo";

import Faixa1 from "../components/conteudo/Faixa1";
import Faixa2 from "../components/conteudo/Faixa2";
import Faixa3 from "../components/conteudo/Faixa3";
import Faixa4 from "../components/conteudo/Faixa4";
import Faixa5 from "../components/conteudo/Faixa5";
import Faixa6 from "../components/conteudo/Faixa6";
import Faixa7 from "../components/conteudo/Faixa7";
import Faixa8 from "../components/conteudo/Faixa8";
import Footer from "../components/layout/Footer";

const MascaraCallForm = styled.div`
  display: ${props => (props.ativo ? "block" : "none")};
  position: fixed;
  z-index: 10;

  width: 100%;
  height: 100%;

  background-color: ${props => (props.ativo ? "rgba(0,0,0,0.5)" : "inherit")};

  top: 0;
  right: 0;

  transition: all 0.3s;
`;

const FormWrapperHorizontal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  z-index: 25;
  margin-top: -45rem;

  @media (max-width: 900px) {
     margin-top: -15rem;
  }
`;

const ContentPersonagemForm = styled.div`
  @media (max-width: 1075px){
    margin-left: 9rem;
  }
`;
const PersonagemForm = styled.img`
  height: 33rem;
  margin-bottom: -1rem;

  @media (max-width: 900px) {
     height: 25rem;
  }
  @media (max-width: 500px) {
     height: 18rem;
  }
`;

const Home = () => {
  const router = useRouter();

  const [destaqueForm, setDestaqueForm] = useState(false);

  const [FormFixo, setFormFixo] = useState(false);

  function callForm() {
    if (window.innerWidth > 900) {
      scroller.scrollTo("form", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });

      setDestaqueForm(true);
      setTimeout(() => {
        setDestaqueForm(false);
      }, 5000);
    } else {
      scroller.scrollTo("form", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    }
  }

  useEffect(() => {
    async function buscaSession() {
      const session = await JSON.parse(
        localStorage.getItem("@emagrecentro/session-lead")
      );
      const hoje = new Date();

      if (session) {
        if (session.lead_expire >= JSON.stringify(hoje)) {
          router.push("/sucesso");
        }
      }
      localStorage.removeItem("@emagrecentro/session-lead");
    }

    buscaSession();
  }, ["umavez"]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerWidth > 900 &&
        (document.body.scrollTop > 60 ||
          document.documentElement.scrollTop > 60)
      ) {
        setFormFixo(true);
      } else {
        setFormFixo(false);
      }
    });
  }, ["once"]);

  return (
    <div>
      <MascaraCallForm ativo={destaqueForm} />
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
          content="Fature vulcanizando pneus | PLC MÁQUINAS Silvio Pelicer"
        />
        <meta
          property="og:description"
          content="Fature mais de 10 mil por mês com as máquinas vulcanizadoras PLC. Conserte pneus agrícolas, de carga e OTR. Compare os custos. Orçamento via WhatsApp."
        />
        <meta property="og:url" content="https://lp9plcmaquinas.netlify.app/" />
      </Head>
      <PaginaInterna>
        <Faixa1 />
        <Element name="form">
          <FormWrapperHorizontal>
            <ContentPersonagemForm>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/static/img/faixa1/personagem-form.webp"
                />
                <PersonagemForm src="/static/img/faixa1/personagem-form.png" alt="Emagrecentro" />
              </picture>
            </ContentPersonagemForm>
            <FormularioHomeTopo />
          </FormWrapperHorizontal>
        </Element>
        <Faixa2 callForm={callForm} />
        <Faixa3/>
        <Faixa4 callForm={callForm} />
        <Element name="formFaixa5">
          <Faixa5 />
        </Element>
        <Faixa6 callForm={callForm}/>
        <Faixa7 />
        <Faixa8 callForm={callForm} />
        <Footer callForm={callForm} />
      </PaginaInterna>
    </div>
  );
};

export default Home;
