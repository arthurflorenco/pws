import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Pray Work Sleep",
  description: "Created by Florenço's Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  );
}
