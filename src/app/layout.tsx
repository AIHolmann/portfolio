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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title>Alejo Holmann</title>
          <meta
            name="description"
            content="Alejo Holmann is a full-stack web developer."
          />
          <meta name="author" content="alejoholmann99@gmail.com" />
          <meta charSet="UTF-8" />
          <meta
            name="keywords"
            content="nextjs, react, typescript, redux toolkit"
          />
          <meta
            name="google-site-verification"
            content="Qt6LLAaZqw8KrWnM4QaqIF9lbf9d9wqK05r7o_rXJk8"
          />
        </head>
        <body className={montserrat.className}>{children}</body>
      </html>
    </Provider>
  );
}
