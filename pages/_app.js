import '../styles/main.scss'
import Head from 'next/head'

// for global layout
import { Layout } from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* for creating favicons if you don't already have one -> https://favicon.io/favicon-converter/ */}
      {/* favicon for light mode browsers */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      <link rel="icon" href="/favicon/favicon.ico" media="(prefers-color-scheme: light)"/>
      <link rel="manifest" href="/favicon/site.webmanifest" />
      
      {/* favicon for dark mode browsers */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-light.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32-light.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16-light.png"/>
      <link rel="icon" href="/favicon/favicon-light.ico"  media="(prefers-color-scheme: dark)"/>

    </Head>

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp

