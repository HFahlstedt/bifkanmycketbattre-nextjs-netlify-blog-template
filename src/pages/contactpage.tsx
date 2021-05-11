import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function ContactPage() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container is-max-desktop">
        <article>
          <header>
            <h1 className="title is-2">Kontakta oss</h1>
          </header>
          <div className="content">
            <p className="section">
              Ta kontakt med oss! Har du en fråga till oss, eller synpunkter på
              det vi skriver så tveka inta att ta kontakt med oss! Vi vill gärna
              ha kontakt med dig och vi kommer att svara dig så fort vi har
              möjlighet.
            </p>
            <form
              name="contact_form"
              method="POST"
              data-netlify="true"
              action="/thanks"
            >
              <div className="field">
                <label className="label">Namn</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Fyll i namn"
                    name="name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">E-post</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Fyll i e-post"
                    name="email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Meddelande</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Fyll i meddelande"
                    name="message"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-default" type="submit">
                    Skicka
                  </button>
                </div>
              </div>
              <input
                type="hidden"
                name="form-name"
                value="contact_form"
              ></input>
            </form>
          </div>
        </article>
      </div>
    </Layout>
  );
}
