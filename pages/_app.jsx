import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import TagManager from "react-gtm-module";
import Layout from "../components/layout/Layout";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";

export default class CustomApp extends App {
  // componentDidMount() {
  //   TagManager.initialize({
  //     gtmId: "GTM-KBPZ9M5"
  //   });
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;300;700&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        </ThemeProvider>
      </Container>
    );
  }
}
