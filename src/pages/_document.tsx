import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
