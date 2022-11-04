import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";

import Header from "../components/Header";

const app = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Component {...pageProps}></Component>
    </>
  );
};

export default app;
