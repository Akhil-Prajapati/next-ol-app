import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "ol-ext/dist/ol-ext.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
