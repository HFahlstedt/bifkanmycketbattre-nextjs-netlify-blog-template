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
            <p>
              Jonas Sundqvist,{" "}
              <span className="has-text-grey">
                medlem 6857 (fd ledare i Brynäs Juniorer, Hockeygymnasiet och fd
                medlem i valberedningen)
              </span>
            </p>
            <p>
              Paul "Palle" Eriksson,{" "}
              <span className="has-text-grey">
                (fd ordförande i valberedningen)
              </span>
            </p>
            <p>
              Micke Petterson,{" "}
              <span className="has-text-grey">
                ständig medlem 10004 (grundare och fd ordförande Brynäs
                Stockholm, fd medlem av medlemsrådet och hemsidesgruppen Brynäs
                IF)
              </span>
            </p>
            <p>
              Henrik Nordström,{" "}
              <span className="has-text-grey">medlem 6752</span>
            </p>
            <p>
              Jon Pierre, <span className="has-text-grey">ständig medlem</span>
            </p>
            <p>
              Dan Ekholm,{" "}
              <span className="has-text-grey">
                medlem 11164 (fd medlem i valberedningen och mångårigt engagerad
                inom Brynäs IF)
              </span>
            </p>
            <p>
              Håkan Fahlstedt,{" "}
              <span className="has-text-grey">
                ständig medlem 7926 (fd ordförande Brooklyn Tigers)
              </span>
            </p>
            <p>
              Torbjörn Risve,{" "}
              <span className="has-text-grey">medlem 15323</span>
            </p>
            <p>
              Stefan Olsson, <span className="has-text-grey">medlem 41103</span>
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
