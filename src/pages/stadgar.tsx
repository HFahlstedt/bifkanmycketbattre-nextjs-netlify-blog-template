import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Stadgar() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <header>
            <h1 className="title is-2 mb-5">Stadgeändring</h1>
          </header>
          <div className="content">
            <div className="mb-5">
              Till årsmötet 2021 inkom vi med en motion där vi föreslog ett
              antal ändringar i de nuvarande stadgarna, årsmötet beslutade att
              vald styrelse skulle behandla förslaget och kalla till ett extra
              årsmöte för att klubba igenom förändringarna. På denna sida kommer
              uppföljning av detta att ske.
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
