"use client";
import { store } from "@/store";
import "./globals.css";
import { Mulish } from "next/font/google";
import { Provider } from "react-redux";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "400", "300", "500", "600", "700", "800", "900"],
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
          <title>Alejo Holmann - Full-Stack Web Developer</title>
          <meta
            name="description"
            content="Desarrollador web full-stack enfocado en el ecosistema de JavaScript y React. Con múltiples proyectos completados, garantiza eficiencia, confianza y seguridad."
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
          <meta
            property="og:title"
            content="Alejo Holmann desarrollador web Full-Stack"
          />
          <meta
            property="og:description"
            content="Desarrollador web full-stack enfocado en el ecosistema de JavaScript y React. Con múltiples proyectos completados, garantiza eficiencia, confianza y seguridad."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/datlb3rvw/image/upload/v1745879068/AlejoPortfolio/j75n7t5obppnijg9amqw.webp"
          />
          <meta
            property="og:url"
            content="https://alejoholmann-developer.vercel.app/"
          />
          <meta property="og:type" content="website" />
        </head>
        <body className={mulish.className}>{children}</body>
      </html>
    </Provider>
  );
}
