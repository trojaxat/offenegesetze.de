// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // some hack to make the meta tags more dynamic, I couln't make it work otherwise
    const initialProps = await Document.getInitialProps(ctx);
    let title = initialProps.head.filter(x => x.type == 'title');
    if (title && title.length > 0) title = title[0].props.children;
    if (Array.isArray(title)) title = title.join('');
    return { title };
  }

  render() {
    const tracking = `var _paq = _paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//traffic.okfn.de/";
      _paq.push(['setTrackerUrl', u+'piwik.php']);
      _paq.push(['disableCookies']);
      _paq.push(['setSiteId', '46']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
    })();`;
    return (
      <html className="has-navbar-fixed-top" lang="de">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00d1b2" />
          <meta name="msapplication-TileColor" content="#00d1b2" />
          <meta name="theme-color" content="#ffffff" />

          <meta
            name="description"
            content="Freier Zugang zu unseren Gesetzen. Wir stellen das Bundesgesetzblatt in digitaler Form kostenfrei zur Verfügung."
          />
          <meta
            property="og:image"
            content="https://offenegesetze.de/static/preview.jpg"
          />
          <meta property="og:url" content="https://offenegesetze.de" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="OffeneGesetze.de" />
          <meta
            property="article:author"
            content="https://www.facebook.com/offenegesetze"
          />
          <meta
            property="og:title"
            content={this.props.title || 'OffeneGesetze.de'}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@offenegesetze" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: tracking }}
          />
        </body>
      </html>
    );
  }
}
