import Head from "next/head";
import React from "react";
import Navigation from "./Navigation";
import CountdownTimer from "./CountdownTimer";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-92NW5EW8MV"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-92NW5EW8MV');
        `,
          }}
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <Navigation />
      </nav>
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1 logo">Brynäs kan bättre</h1>
            <CountdownTimer />
          </div>
        </div>
      </section>
      <main>{children}</main>
      <footer className="footer"></footer>
    </div>
  );
}
