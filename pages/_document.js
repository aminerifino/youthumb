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
            title="Youtube Thumbnail Downloader QQQ"
            description="Download high-quality thumbnails from YouTube videos."
            canonical="https://your-website-url.com"
            openGraph={{
              url: "https://your-website-url.com",
              title: "Youtube Thumbnail Downloader QQQ",
              description: "Unlock Stunning YouTube Video Thumbnails: Download Crisp, High-Quality Images Instantly.",
              site_name: "Youtube Thumbnail Downloader",
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <div>
      <h1>YouTube Thumbnail Downloader</h1>
      <p>▷ Save YT Video Thumbnails</p>
      <p>Get free thumbnail image of any YouTube videos in Full HD(1080), HD (720), SD, and also in small size. It's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos</p>

      <h2>What is the use of this YouTube Thumbnail Grabber website?</h2>
      <p>People use this YouTube thumbnail downloader website for getting thumbnail from any YouTube videos. That can be used in presentation, animation work, or many other activities.</p>

      {/* Add the rest of your content here */}
    </div>
      </Html>
    );
  }
}

export default MyDocument;
