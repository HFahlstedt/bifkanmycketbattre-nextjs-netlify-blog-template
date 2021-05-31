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
            <h1 className="title is-2 mb-5">De 100 första dagarna</h1>
          </header>
          <div className="content">
            <p>
              Här kommer en konkret handlingsplan för de 100 första dagarna
              publiceras
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
