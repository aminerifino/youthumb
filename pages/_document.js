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
            canonical="https://thumbnail-youtube-download.xyz"
            openGraph={{
              url: "https://thumbnail-youtube-download.xyz",
              title: "Youtube Thumbnail Downloader ",
              description: "Unlock Stunning YouTube Video Thumbnails: Download Crisp, High-Quality Images Instantly.",
              site_name: "Youtube Thumbnail Downloader",
              images: [
                {
                  url: "https://thumbnail-youtube-download.xyz/thumbnail.jpg",
                  width: 1200,
                  height: 630,
                  alt: "Thumbnail Image",
                },
              ],
            }}
          />
          {/* Add the provided HTML code here */}
          <title>Download YouTube Thumbnails - Fast and Easy</title>
          <meta name="description" content="Download YouTube thumbnails in high quality and without watermarks." />
          <meta name="keywords" content="youtube, thumbnail, download, free, online, high quality, no watermarks, youtube thumbnail download, thumbnail download, thumbnail grabber, youtube thumbnail grabber, template thumbnail youtube, yt thumbnail download, video thumbnail downloader, save youtube thumbnail, youtube download thumbnail, yt thumbnail grabber, youtube thumbnail extractor" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Your Name" />
          <meta property="og:title" content="Download YouTube Thumbnails" />
          <meta property="og:description" content="Download YouTube thumbnails in high quality and without watermarks." />
          <meta property="og:image" content="https://thumbnail-youtube-download.xyz/thumbnail.jpg" />
          <meta property="twitter:title" content="Download YouTube Thumbnails" />
          <meta property="twitter:description" content="Download YouTube thumbnails in high quality and without watermarks." />
          <meta property="twitter:image" content="https://thumbnail-youtube-download.xyz/thumbnail.jpg" />
          <link rel="canonical" href="https://thumbnail-youtube-download.xyz/youtube-thumbnail-download" />
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
