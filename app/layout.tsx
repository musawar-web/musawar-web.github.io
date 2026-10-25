import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Musawar | Shopify & Web Developer",
  description:
    "Musawar - Shopify & Web Developer creating modern, responsive and high-quality web experiences.",
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
