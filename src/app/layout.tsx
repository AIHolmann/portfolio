"use client";
import { store } from "@/store";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Provider } from "react-redux";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400"],
});

export const metadata: Metadata = {
  title: "AH Developer",
  description: "Alejo Holmann is a full-stack web developer.",
  keywords: "JavaScript, React, TypeScript",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon?v=4"],
    shortcut: ["/apple-touch-icon"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </Provider>
  );
}
