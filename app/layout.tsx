import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satvik Virmani",
  description: "my personal and portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
