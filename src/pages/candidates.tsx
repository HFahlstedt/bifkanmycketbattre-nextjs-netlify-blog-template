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
              Vi kommer inom kort presentera våra kandidater till styrelse i
              Brynäs IF
            </p>
          </div>
          <div className="columns">
            <div className="column">
              <BoardMember name="Magnus Kangas" title="Ordförande" />
              <BoardMember name="" title="Ledamot" />
              <BoardMember name="" title="Ledamot" />
            </div>
            <div className="column">
              <BoardMember name="" title="Ledamot" />
              <BoardMember name="" title="Ledamot" />
            </div>
            <div className="column">
              <BoardMember name="" title="Ledamot" />
              <BoardMember name="" title="Ledamot" />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
