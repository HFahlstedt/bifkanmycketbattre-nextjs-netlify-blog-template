import React from "react";
import BoardMember from "../components/BoardMember";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Candidates() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <header>
            <h1 className="title is-2 mb-5">Våra kandidater</h1>
          </header>
          <div className="content">
            <p>
              Vi kommer inom kort presentera våra kandidater till styrelsen i
              Brynäs IF
            </p>
          </div>
          <div className="columns">
            <div className="column">
              <BoardMember
                name="Magnus Kangas"
                title="Ordförande"
                image="/images/kangas.jpeg"
                moreInfo="kangas-info"
              />
              <BoardMember
                name="Jonny Stridh"
                title="Ledamot"
                image="/images/stridh.png"
                moreInfo="stridh-info"
              />
              <BoardMember name="Markus Aujalay" title="Ledamot" />
            </div>
            <div className="column">
              <BoardMember
                name="Hans-Göran Karlsson"
                title="Ledamot"
                image="/images/hansa.png"
                moreInfo="hansa-info"
              />
              <BoardMember
                name="Robert Lipskog"
                title="Ledamot"
                image="/images/lipskog.png"
                moreInfo="lipskog-info"
              />
            </div>
            <div className="column">
              <BoardMember
                name="Elin Lith"
                title="Ledamot"
                image="/images/lith.jpg"
                moreInfo="lith-info"
              />
              <BoardMember
                name="Lise-Lotte Swing"
                title="Ledamot"
                image="/images/swing.png"
                moreInfo="swing-info"
              />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
