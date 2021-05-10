import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import styles from "../../public/styles/content.module.css";

export default function ContactPage() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className={"container"}>
        <article>
          <header>
            <h1>Kontakta oss</h1>
          </header>
          <div className={styles.content}>
            <p>
              Ta kontakt med oss! Har du en fråga till oss, eller synpunkter på
              det vi skriver så tveka inta att ta kontakt med oss! Vi vill gärna
              ha kontakt med dig och vi kommer att svara dig så fort vi har
              möjlighet.
            </p>
            <form name="contact_form" method="POST" data-netlify="true">
              <p>
                <label>
                  Namn: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  E-post: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Skicka</button>
              </p>
              <input
                type="hidden"
                name="form-name"
                value="contact_form"
              ></input>
            </form>
          </div>
        </article>
      </div>
      <style jsx>{`
        .container {
          display: block;
          max-width: 46rem;
          width: 100%;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
          z-index: 0;
        }
        article {
          flex: 1 0 auto;
          font-size: 1.2rem;
        }
        h1 {
          margin: 0 0 0.5rem;
          font-size: 2.25rem;
        }

        @media (min-width: 769px) {
          .container {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  );
}
