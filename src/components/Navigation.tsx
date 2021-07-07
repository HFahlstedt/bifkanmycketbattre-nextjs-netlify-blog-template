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
          <a className="navbar-item" href="/hundred">
            100-dagarsplanen
          </a>
          <a className="navbar-item" href="/stadgar">
            Stadgeändring
          </a>
          <a className="navbar-item" href="/about">
            Vilka är vi
          </a>
          <a className="navbar-item" href="/contactpage">
            Kontakt
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Årsmöte 2021</a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="/2021/background">
                Bakgrund
              </a>
              <a className="navbar-item" href="/2021/candidates">
                Våra kandidater
              </a>
              <a className="navbar-item" href="/2021/faq">
                Frågor och svar
              </a>
              <a className="navbar-item" href="/2021/motion">
                Motion
              </a>
              <a className="navbar-item" href="/2021/100days">
                De första 100 dagarna
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
