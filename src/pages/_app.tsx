import NavBar from "@/components/NavBar";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import "@/styles/globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}
