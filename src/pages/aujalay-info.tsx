import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function AujalayInfo() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <div className="content">
            <div className="columns">
              <div className="column is-one-fifth">
                <figure className="image">
                  <img src="/images/aujalay.jpeg" alt="[Markus Aujalay]" />
                </figure>
              </div>
              <div className="column">
                <header>
                  <h1 className="title is-3 mb-2">Markus Aujalay</h1>
                </header>
                <p>Ledamot</p>
              </div>
            </div>
            <p>
              Markus Aujalay är en välkänd TV-profil och Brynäsare. Han är en
              framgångsrik kock och entreprenör som driver egna restauranger i
              Stockholm vid sidan om matlagningsprogram i TV4. Markus kan med
              sin entusiasm och sin entreprenörsanda bidra med att se vår
              verksamhet med nya ögon och söka nya vägar och infallsvinklar för
              att utveckla varumärket, event och restaurang i Monitor ERP Arena.
            </p>
            <p>
              Markus driver restaurangrörelsen i Winterviken i Stockholm,
              Fjällpuben i Åre, restaurang Tegelbacken och medverkar som
              jurymedlem i programmet Sveriges mästerkock och Sveriges yngsta
              mästerkock på TV4. Markus har även skrivit ett antal kokböcker och
              är en känd mediaprofil
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
