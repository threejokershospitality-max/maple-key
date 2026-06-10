import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { MobileContactBar } from "@/components/layout/mobile-contact-bar";
import { Analytics } from "@/components/layout/analytics";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { JsonLd } from "@/components/shared/json-ld";
import { createMetadata, organizationSchema, localBusinessSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
      </head>
      <body className="flex min-h-screen flex-col safe-area-top">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileContactBar />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
