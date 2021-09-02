import GlobalStyle from "../components/GlobalStyle";

function MyApp({ Component, pageProps }) {
  const getLayout = () => Component.getLayout;
  return getLayout(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
