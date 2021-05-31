import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="navbar-brand">
        <a
          role="button"
          className={`navbar-burger burger ${active ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarCool"
          onClick={() => {
            setActive(!active);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarCool"
        className={`navbar-menu ${active ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Start
          </a>
          <a className="navbar-item" href="/news">
            Senaste nytt
          </a>
          <a className="navbar-item" href="/faq">
            Frågor och svar
          </a>
          <a className="navbar-item" href="/100days">
            De 100 första dagarna
          </a>
          <a className="navbar-item" href="/candidates">
            Våra kandidater
          </a>
          <a className="navbar-item" href="/about">
            Vilka är vi
          </a>
          <a className="navbar-item" href="/contactpage">
            Kontakt
          </a>
        </div>
      </div>
    </>
  );
}
