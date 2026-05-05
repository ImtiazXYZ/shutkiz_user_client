import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Roboto } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

import Bottom from "../_components/Bottom";
import Footer from "../_components/Footer";
import MobileNavbar from "../_components/MobileNavbar";
import Navbar from "../_components/Navbar";
import UIProvider from "../_lib/UIProvider";
import GTMTracker from "../_components/GTMTracker";

import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const GTM_ID = "GTM-K383WB5T";

export const metadata = {
  title: "Shutkiz – The Premium Taste of Shutki",
  description:
    "Discover Shutkiz, where premium quality shutki (dried fish) meets exceptional flavor.",
};

export default async function RootLayout({ children }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="en">
        <head>
          {/* Google Tag Manager */}
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />

          <meta
            name="google-site-verification"
            content="5wBUplsOCWy7WLrsaCqbrtgf4w7PbCTYY5dG6GJXEVE"
          />
        </head>

        <body className={roboto.className}>
          {/* GTM noscript */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>

          {/* SPA page tracking */}
          <GTMTracker />

          <UIProvider>
            <main>
              <nav>
                <Navbar />
              </nav>

              <section className="px-5 pt-5 md:pt-[150px] md:px-10 2xl:px-0 2xl:max-w-[1400px] 2xl:mx-auto pb-14 -z-10">
                {children}
              </section>

              <nav className="block md:hidden">
                <MobileNavbar />
              </nav>

              <section
                id="bottom-section"
                className="px-5 md:px-10 2xl:px-0 2xl:max-w-[1400px] 2xl:mx-auto pb-10"
              >
                <Bottom />
              </section>

              <footer className="px-5 pt-5 md:px-10 2xl:px-0 2xl:max-w-[1400px] 2xl:mx-auto pb-28 md:pb-10">
                <Footer />
              </footer>

              <ToastContainer />
              <Toaster />
            </main>
          </UIProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}