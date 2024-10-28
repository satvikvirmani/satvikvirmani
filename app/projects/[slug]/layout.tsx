export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-4 md:p-16 mx-auto max-w-3xl">
        {children}
    </main>
  );
}
