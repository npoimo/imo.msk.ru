import Document, { Html, Head, Main, NextScript } from 'next/document' // eslint-disable-line
// TODO: figure out a bug above where the import is not working
import { themeColor } from '@/config/index'
import MetaFonts from '@/components/meta/MetaFonts'
import MetaManifest from '@/components/meta/MetaManifest'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          {/* <meta name='theme-color' content={themeColor} /> */}
          <MetaFonts />
          <MetaManifest />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
