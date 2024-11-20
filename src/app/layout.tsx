import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Pray Work Sleep",
  description: "Professionelles Boxtraining für Anfänger und Fortgeschrittene mit motivierender Atmosphäre. Kämpfe für deine Ziele! Verwandle dich körperlich und mental im Pray Work Sleep Gym. ",
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
