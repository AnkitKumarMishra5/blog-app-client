import '../styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blogit ✍️</title>
        <link rel='icon' href='https://cdn-icons-png.flaticon.com/512/6114/6114045.png' />
        <meta name="description" content="Write and read thoughts ..." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
