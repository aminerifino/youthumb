import Document, { Html, Head, Main, NextScript } from "next/document";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          {/* Place your SEO metadata within the Head section */}
          <DefaultSeo
            title="Youtube Thumbnail Downloader "
            description="Download high-quality thumbnails from YouTube videos."
            canonical="https://your-website-url.com"
            openGraph={{
              url: "https://your-website-url.com",
              title: "Youtube Thumbnail Downloader ",
              description: "Unlock Stunning YouTube Video Thumbnails: Download Crisp, High-Quality Images Instantly.",
              site_name: "Youtube Thumbnail Downloader",
            }}
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

export default MyDocument;
