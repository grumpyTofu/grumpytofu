import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { MediaQueriesProvider } from "../components/MediaQueriesProvider";

const queries = {
  xsDown: "(max-width: 475px)",
  xsUp: "(max-width: 475px)",
  smDown: "(max-width: 640px)",
  smUp: "(min-width: 640px)",
  mdDown: "(max-width: 768px)",
  mdUp: "(min-width: 768px)",
  lgDown: "(max-width: 1024px)",
  lgUp: "(min-width: 1024px)",
  xlDown: "(max-width: 1280px)",
  xlUp: "(min-width: 1280px)",
  "2xlDown": "(max-width: 1536px)",
  "2xlUp": "(min-width: 1536px)",
  "3xlDown": "(max-width: 2000px)",
  "3xlUp": "(min-width: 2000px)",
  darkMode: "(prefers-color-scheme: dark)",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MediaQueriesProvider queries={queries}>
      <Head>
        <title>GrumpyTofu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MediaQueriesProvider>
  );
}
export default MyApp;
