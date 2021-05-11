import Head from "next/head";
import Navigation from "./Navigation";

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
            {/* <img src="/images/header.jpg" /> */}
          </div>
        </div>
      </section>
      <main>{children}</main>
      <footer className="footer"></footer>
    </div>
  );
}
