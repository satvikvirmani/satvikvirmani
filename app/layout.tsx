import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/nav";
import { Rubik } from "next/font/google";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Portfolio | Satvik Virmani",
  description: "Portfolio website",
};

const rubik = Rubik({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto max-w-7xl text-gray-800 dark:text-gray-100 ${rubik.className} antialiased`}>
        <header><Navbar /></header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
