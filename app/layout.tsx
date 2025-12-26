import type { Metadata } from "next";
import "./styles/index.css";

export const metadata: Metadata = {
  title: "Portfolio | Satvik Virmani",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
