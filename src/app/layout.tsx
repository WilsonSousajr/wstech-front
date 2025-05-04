import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans", 
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins", 
  weight: ["400", "700", "800"], 
});

export const metadata: Metadata = {
  title: "Wilson Sousa",
  description: "A web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/wslogo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
