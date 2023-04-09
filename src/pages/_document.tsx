import Document, { Head, Html, Main, NextScript } from 'next/document'
import { AppConfig } from '@/helpers/AppConfig'

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
