import '@/index.css'
import Head from 'next/head'
import { Error418Provider } from "@/providers/Error418Provider";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/favicon/apple-touch-icon.png' />

        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='64x64' href='/favicon/favicon-64x64.png' />

        <link rel='manifest' href='/favicon/site.webmanifest' />

        <meta name='msapplication-config' content='/favicon/browserconfig.xml' />

        <link rel='mask-icon' href='/favicon/mask-icon.svg' color='#000000' />

        <meta name='theme-color' content='#4200FF' />
        <meta name='msapplication-TileColor' content='#4200FF' />
      </Head>
      <Error418Provider>
        <Component {...pageProps} />
      </Error418Provider>
    </>
  )
}
