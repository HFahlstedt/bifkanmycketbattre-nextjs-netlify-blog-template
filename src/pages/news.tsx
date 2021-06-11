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
              <p>2021-06-08</p>
              <ul>
                <li>
                  Information om föranmälan m.m.:{" "}
                  <a href="https://www.brynas.se/article/iugwakpmj-1ekad/kallelse-till-brynas-if-s-arsmote-2021">
                    Kallelse till Brynäs årsmöte
                  </a>
                </li>
              </ul>
              <p>2021-06-01</p>
              <ul>
                <li>
                  Krönika på Svenska Fans:{" "}
                  <a href="https://www.svenskafans.com/hockeyzon/kronika-sjalvinsikten-gar-ur-nar-prestigen-tar-over-631002">
                    Krönika: När prestigen tar över går självinsikten ur
                  </a>
                </li>
              </ul>
              <p>2021-05-31</p>
              <ul>
                <li>
                  Intervju i SVT Gävleborg:{" "}
                  <a href="https://www.svt.se/nyheter/lokalt/gavleborg/grupp-foreslar-ny-styrelse-till-brynas-tv-kock-bland-namnen">
                    Gruppen Brynäs kan bättre föreslår ny styrelse – TV-kocken
                    Markus Aujalay bland namnen
                  </a>
                </li>
              </ul>
              <p>2021-05-29</p>
              <ul>
                <li>
                  Intervju med Ulrika Spåls i Arbetarbladet:{" "}
                  <a href="https://www.gd.se/artikel/spals-om-kritiken-mot-brynas-styrelse-och-vagen-hon-vill-ta-vi-far-odmjukt-titta-pa-hur-vi-agerat">
                    Spåls om kritiken mot Brynäs styrelse och vägen hon vill ta:
                    ”Vi får ödmjukt titta på hur vi agerat”
                  </a>
                </li>
              </ul>
              <p>2021-05-23</p>
              <ul>
                <li>
                  Intervju i Arbetarbladet:{" "}
                  <a href="https://www.arbetarbladet.se/artikel/ny-fran-kritik-mot-brynasledningen-det-har-maste-stoppas-nu-det-ar-sa-fel-pa-alla-plan">
                    Ny frän kritik mot Brynäsledningen: "Det här måste stoppas
                    nu – det är så fel på alla plan"
                  </a>
                </li>
              </ul>
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
