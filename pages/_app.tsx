import "../styles/index.css";

import Head from "next/head";

import RouterProgress from "../components/RouterProgress";

import type { AppProps } from "next/app";

function Lexolve({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lexolve | Legal Solutions</title>

        <meta name="title" content="Lexolve | Legal Solutions" />
        <meta
          name="description"
          content="Lexolve helps resolving inaccessibility and inefficiencies issues in the business of law, by enabling legal professionals to give their customers and employees legal superpowers with our Lexolve products."
        />

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />

        <meta name="application-name" content="Lexolve" />

        <link
          rel="icon"
          type="image/jpg"
          href={require("../public/favicon.jpg")}
        />

        <title key="title">Lexolve | Legal Solutions</title>

        <link
          rel="preconnect"
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com/"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@800;900&family=Open+Sans:wght@400;700&display=swap"
        />
      </Head>
      <RouterProgress />
      <Component {...pageProps} />
    </>
  );
}

export default Lexolve;
