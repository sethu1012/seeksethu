import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getLang } from '@utils/bootstrap';
import { Locale } from '@config/i18n/types';

interface ICustomDocumentProps {
  lang?: Locale;
}

class CustomDocument extends Document<ICustomDocumentProps> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const lang = getLang(ctx);
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <meta
            name="description"
            content="Sethuraman Srinivasan is a full-stack developer working in Bengaluru, India 🇮🇳"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#2E3A49" />
          <link rel="icon" href="/favicon.ico?v=4" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/android-chrome-512x512.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
