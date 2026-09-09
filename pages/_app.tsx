import "@/styles/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GadgetsNavbar from "@/components/gadgets/GadgetsNavbar";
import GadgetsFooter from "@/components/gadgets/GadgetsFooter";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isGadgetsPage = router.pathname.startsWith("/gadgets");

  return (
    <>
      {/* Meta Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2326435488100673');
            fbq('track', 'PageView');
          `,
        }}
      />

      {isGadgetsPage ? (
        <>
          <GadgetsNavbar />
          <Component {...pageProps} />
          <GadgetsFooter />
        </>
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}