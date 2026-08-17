import "@/styles/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import GadgetsNavbar from "@/components/gadgets/GadgetsNavbar";
import GadgetsFooter from "@/components/gadgets/GadgetsFooter";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isGadgetsPage = router.pathname.startsWith("/gadgets");

  if (isGadgetsPage) {
    return (
      <>
        <GadgetsNavbar />

        <Component {...pageProps} />

        <GadgetsFooter />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}