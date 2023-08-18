import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          IN CHIOMA - Servizi per la cura degli alberi mediante i principi
          dell&apos;arboricoltura moderna
        </title>


        <meta
          name="description"
          content="Inchioma di Stefano Zanellati. Servizi di arbicoltura, tree climbing. Gravellona lomellina 349 29 62621"
        />

        <meta
          name="robots"
          content="noodp, noydir, index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/icons/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/icons/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/icons/favicon-16x16.png"
        />

        <link rel="manifest" href="/assets/icons/site.webmanifest" />
      </Head>

      <Script type="text/javascript" src="/scripts/iubenda.js" />

      <Script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js" />

      <Script
        type="text/javascript"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        async
      />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LSM4GR3WQW"
      />

      <Script src="/scripts/analytics.js" />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
