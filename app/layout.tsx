import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agbatordestiny.com"),
  title: {
    default: "Agbator Destiny | Software Engineer",
    template: "%s | Agbator Destiny",
  },
  description: "Software engineer that builds great mobile and web apps",
  authors: [{ name: "Agbator Destiny" }],
  openGraph: {
    title: "Agbator Destiny | Software Engineer",
    description: "Software engineer that builds great mobile and web apps",
    url: "https://agbatordestiny.com",
    siteName: "Agbator Destiny",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agbator Destiny | Software Engineer",
    description: "Software engineer that builds great mobile and web apps",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
