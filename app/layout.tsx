import type { Metadata } from "next";
import "./globals.css";
import { sora } from "@components/components/ui/fonts"; 

export const metadata: Metadata = {
  title: {
    template:'%s | Nisar',
    default:"Nisar Portfolio"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
