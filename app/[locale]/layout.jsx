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
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Shutkiz – The Premium Taste of Shutki",
  description:
    "Discover Shutkiz, where premium quality shutki (dried fish) meets exceptional flavor. Experience the rich, authentic taste of our meticulously sourced and prepared shutki products, perfect for enhancing your culinary creations. Elevate your meals with Shutkiz – the ultimate choice for shutki lovers!",
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
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id=GTM-53LP8DRD'+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-53LP8DRD');
              `,
            }}
          />
          {/* End Google Tag Manager */}

          <meta
            name="google-site-verification"
            content="5wBUplsOCWy7WLrsaCqbrtgf4w7PbCTYY5dG6GJXEVE"
          />

          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-3Q6REJE912`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3Q6REJE912', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </head>

        <body className={roboto.className}>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-53LP8DRD"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}

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
