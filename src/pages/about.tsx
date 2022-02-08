import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function About() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <header>
            <h1 className="title is-2 mb-5">Vilka är vi</h1>
          </header>
          <div className="content">
            <div className="mb-5">
              Vi är ett antal engagerade medlemmar som har verkat i och runt
              föreningen under lång tid, och som just nu känner stor oro för
              Brynäs IF. Vi vet att det i dagsläget är många som tycker likadant
              som oss. Brynäs kan bättre och Brynäs behöver en nystart på alla
              områden. Vi har erfarenhet av valberedningsarbete i Brynäs, av att
              jobba i föreningen och från engagemang i supporterföreningarna
              m.m.
            </div>
            <p>
              Jonas Sundqvist, Tjörn{" "}
              <span className="has-text-grey">
                medlem 6857 (fd ledare i Brynäs Juniorer, Hockeygymnasiet och fd
                medlem i valberedningen)
              </span>
            </p>
            <p>
              Micke Petterson, Uppsala{" "}
              <span className="has-text-grey">
                ständig medlem 10004 (grundare och fd ordförande Brynäs
                Stockholm, fd medlem av medlemsrådet och hemsidesgruppen Brynäs
                IF)
              </span>
            </p>
            <p>
              Henrik Nordström, Gävle{" "}
              <span className="has-text-grey">medlem 6752</span>
            </p>
            <p>
              Håkan Fahlstedt, Eriksmåla{" "}
              <span className="has-text-grey">
                ständig medlem 7926 (fd ordförande Brooklyn Tigers)
              </span>
            </p>
            <p>
              Torbjörn Risve, Gävle{" "}
              <span className="has-text-grey">medlem 15323</span>
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
