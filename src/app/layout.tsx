import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import Script from "next/script";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Hi my name is Mohammed Ahmed, I am an ambitious software developer with strong passion for coding. Check up my website!",
  icons: {
    icon: "/assets/favicon_io/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/an-old-hope.min.css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon_io/site.webmanifest" />
      </head>
      <body>
        <div id="particles-background"></div>
        {children}
      </body>
      <Script src="/scripts/particles.js/particles.js" />
      <Script src="https://kit.fontawesome.com/dfb093cc90.js" />
      <Script src="/scripts/main.js" />
      <GoogleAnalytics gaId="G-Q92KT8DCHL" />
    </html>
  );
}
