import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          // you might need to get a newer version
          src="https://kit.fontawesome.com/d3f075dedd.js"
          crossOrigin="anonymous"
          async
        />
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
