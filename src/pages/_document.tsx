import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
