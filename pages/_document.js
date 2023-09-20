// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../components/utils/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <meta name="description" content="Tax Edge Advisory Webpage" />
        <link rel="icon" href="../public/images/icon/logo-black.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" 
        rel="stylesheet" />
        </Head>
        
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}