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
            <h1 className="title is-2 mb-5">Media</h1>
          </header>
          <div className="content">
            <p>
              <a href="https://www.arbetarbladet.se/logga-in/de-vill-ta-brynas-ur-krisen-och-kraver-hela-styrelsen-maste-ga">
                https://www.arbetarbladet.se/logga-in/de-vill-ta-brynas-ur-krisen-och-kraver-hela-styrelsen-maste-ga
              </a>
            </p>
            <p>
              <a href="https://www.arbetarbladet.se/artikel/stisse-aberg-det-har-ar-vad-brynas-behover-en-bra-omstart">
                https://www.arbetarbladet.se/artikel/stisse-aberg-det-har-ar-vad-brynas-behover-en-bra-omstart
              </a>
            </p>
            <p>
              <a href="https://www.arbetarbladet.se/artikel/han-vill-bli-brynas-nya-ordforande-och-forutspar-svart-for-sittande-styrelsen-vara-kvar">
                https://www.arbetarbladet.se/artikel/han-vill-bli-brynas-nya-ordforande-och-forutspar-svart-for-sittande-styrelsen-vara-kvar
              </a>
            </p>
            <p>
              <a href="https://www.arbetarbladet.se/artikel/storsponsorns-vd-vill-in-i-styrelsen-ett-satt-att-fa-till-forandring">
                https://www.arbetarbladet.se/artikel/storsponsorns-vd-vill-in-i-styrelsen-ett-satt-att-fa-till-forandring
              </a>
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
