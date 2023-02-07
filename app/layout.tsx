export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body style={{ backgroundColor: "#F0EAFB" }}>{children}</body>
    </html>
  );
}
