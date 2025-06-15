import '@/index.css'
import { useEffect } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import A_UserCursor from '@/components/atoms/A_UserCursor/A_UserCursor'
import Q_ScrollBar from '@/components/quarks/Q_ScrollBar/Q_ScrollBar'
import { initGA, logPageView } from '@/lib/analytics'
import { ErrorProvider } from '@/providers/ErrorProvider'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    initGA()

    const handleRouteChange = (url: string) => {
      logPageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
      <A_UserCursor />
      <Q_ScrollBar />
      <ErrorProvider>
        <Component {...pageProps} />
      </ErrorProvider>
    </>
  )
}
