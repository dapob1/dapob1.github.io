import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

const gtAmerica = localFont({
  src: [
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Light-Trial.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Regular-Trial.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Regular-Italic-Trial.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Medium-Trial.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Medium-Italic-Trial.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Bold-Trial.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Bold-Italic-Trial.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Black-Trial.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gt-america",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "ADWA Studio — Building Africa's Next Global Champions",
    template: "%s · ADWA Studio",
  },
  description:
    "ADWA Studio is an African venture studio. We build, shape, and scale companies that will define Africa's future on the global stage.",
  metadataBase: new URL("https://adwa.studio"),
  openGraph: {
    title: "ADWA Studio",
    description:
      "Building Africa's next global champions — a venture studio from African soil, for global impact.",
    type: "website",
    locale: "en_US",
    siteName: "ADWA Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADWA Studio",
    description:
      "Building Africa's next global champions — a venture studio from African soil, for global impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gtAmerica.variable} ${gtAmerica.className} antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
