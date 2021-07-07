import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function HundredFollowUp() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <header>
            <h1 className="title is-2 mb-5">Uppföljning av 100-dagarsplanen</h1>
          </header>
          <div className="content">
            <div className="mb-5">
              Inför årsmötet 2021, lanserade vårat förslag till styrelse en gemensam <a href="/2021/100days">100-dagarsplan</a>.
              Här kommer vi att följa upp detta och ge vår syn på hur de lyckas med genomförandet.
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
