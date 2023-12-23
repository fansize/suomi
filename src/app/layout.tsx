import "@/app/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { inter, finlandica } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import siteMetadata from "@/data/siteMetadata";
import SectionContainer from "@/components/SectionContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${finlandica.className} antialiased`}
      suppressHydrationWarning
    >
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <body className="flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between">
              <Header />
              <main className="mb-auto">
                {children}
                <Analytics />
              </main>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
