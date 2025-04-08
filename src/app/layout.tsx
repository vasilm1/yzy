import type { Metadata } from "next";
import { Space_Grotesk, Montserrat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-brutal",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNLOCK YEEZY | Official YZY Token Platform",
  description: "Official platform for YZY token, providing exclusive access to Yeezy products, Sunday Service events, and community benefits.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${montserrat.variable}`}>
      <body className={`${spaceGrotesk.className} bg-yzy-onyx text-yzy-bone min-h-screen`}>
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
