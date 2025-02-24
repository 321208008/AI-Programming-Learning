"use client";

import { Inter } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";
import "../globals.css";
import { Toaster } from "@/components/Toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif"
  ]
});

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout locale={locale}>
          {children}
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  );
}