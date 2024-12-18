import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>techTangle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/favicon.ico" />
        <meta
          name="description"
          content="Full Stack Web Application that contains problem solving and DSA"
        />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />;
    </RecoilRoot>
  );
}
