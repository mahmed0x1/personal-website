import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mohammed Ahmed",
  description: "My own personal website",
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
      </head>
      <body>
        <div id="particles-background"></div>
        {children}
      </body>
      <Script src="https://kit.fontawesome.com/dfb093cc90.js" />
      <Script src="/scripts/particles.js/particles.js" />
      <Script src="/scripts/main.js" />
    </html>
  );
}