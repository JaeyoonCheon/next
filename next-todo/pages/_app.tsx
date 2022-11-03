import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";

const app = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps}></Component>
    </>
  );
};

export default app;
