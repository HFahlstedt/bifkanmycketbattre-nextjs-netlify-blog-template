import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Media() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <header>
            <h1 className="title is-2 mb-5">Förekomster i media</h1>
          </header>
          <div className="content">
            <div className="mb-5">
              Här samlar vi länkar till artiklar mm där vi förekommit på något
              sätt i media.
            </div>
            <p>
              <a href="https://www.arbetarbladet.se/logga-in/de-vill-ta-brynas-ur-krisen-och-kraver-hela-styrelsen-maste-ga">
                https://www.arbetarbladet.se/logga-in/de-vill-ta-brynas-ur-krisen-och-kraver-hela-styrelsen-maste-ga
              </a>
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
