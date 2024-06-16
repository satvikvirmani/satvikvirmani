import type { Metadata } from "next";
import "./globals.css";
import { jetBrains_mono } from "@/app/utils/fonts";

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
      <body className="w-full bg-red-200" style={jetBrains_mono.style}>
        {children}
      </body>
    </html>
  );
}
