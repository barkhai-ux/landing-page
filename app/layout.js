import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SeeMedia – Stream movies and shows",
  description: "Discover SeeMedia and download on iOS and Android.",
  openGraph: {
    title: "SeeMedia – Stream movies and shows",
    description: "Discover SeeMedia and download on iOS and Android.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeeMedia – Stream movies and shows",
    description: "Discover SeeMedia and download on iOS and Android.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
