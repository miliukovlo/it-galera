import type { Metadata } from "next";

import "@/app/globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Страница не найдена",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
