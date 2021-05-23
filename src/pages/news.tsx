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
            <h1 className="title is-2 mb-5">Senaste nytt</h1>
          </header>
          <div className="content">
            <div className="mb-5">
              <p>2021-05-16</p>
              <ul>
                <li>
                  Intervju i Brynäspodden:{" "}
                  <a href="https://poddtoppen.se/podcast/957828185/brynaspodden/brynaspodden-intervju-med-brynas-kan-battre-initiativet">
                    Intervju med Brynäs kan bättre initiativet
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p>2021-05-12</p>
              <ul>
                <li>
                  Artikel Arbetarbladet:{" "}
                  <a href="https://www.arbetarbladet.se/logga-in/de-vill-ta-brynas-ur-krisen-och-kraver-hela-styrelsen-maste-ga">
                    De vill ta Brynäs ur krisen – och kräver: "Hela styrelsen
                    måste gå"
                  </a>
                </li>
                <li>
                  Krönika Arbetarbladet:{" "}
                  <a href="https://www.arbetarbladet.se/artikel/stisse-aberg-det-har-ar-vad-brynas-behover-en-bra-omstart">
                    Stisse Åberg: Det här är vad Brynäs behöver – En Bra Omstart
                  </a>
                </li>
                <li>
                  Intervju Arbetarbladet:{" "}
                  <a href="https://www.arbetarbladet.se/artikel/han-vill-bli-brynas-nya-ordforande-och-forutspar-svart-for-sittande-styrelsen-vara-kvar">
                    Han vill bli Brynäs nya ordförande – och förutspår: "Svårt
                    för sittande styrelsen vara kvar"
                  </a>
                </li>
                <li>
                  Intervju Arbetarbladet:{" "}
                  <a href="https://www.arbetarbladet.se/artikel/storsponsorns-vd-vill-in-i-styrelsen-ett-satt-att-fa-till-forandring">
                    Storsponsorns vd vill in i styrelsen: "Ett sätt att få till
                    förändring"
                  </a>
                </li>
              </ul>
            </div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
