import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "sloor.dev",
  description:
    "Welcome to the Sloorjuice website. Come on in.. Stay a while",
  metadataBase: new URL("https://sloor.dev"),
  openGraph: {
    title: "sloor.dev",
    description: "Full Stack and Game Developer Portfolio and Blog",
    url: "https://sloor.dev",
    siteName: "sloor.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "sloor.dev",
    description: "Full Stack and Game Developer Portfolio and Blog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
