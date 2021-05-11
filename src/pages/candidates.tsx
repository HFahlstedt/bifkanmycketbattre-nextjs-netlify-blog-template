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
          <div className="columns">
            <div className="column">
              <BoardMember
                name="Ordförande Ordförandesson"
                title="Ordförande"
              />
              <BoardMember name="Ledamot 1" title="Ledamot" />
              <BoardMember name="Ledamot 2" title="Ledamot" />
            </div>
            <div className="column">
              <BoardMember name="Ledamot 3" title="Ledamot" />
              <BoardMember name="Ledamot 4" title="Ledamot" />
            </div>
            <div className="column">
              <BoardMember name="Ledamot 5" title="Ledamot" />
              <BoardMember name="Ledamot 6" title="Ledamot" />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
