import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Mail1129() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <header>
            <h1 className="title is-2 mb-5">Mail inför extra årsmöte</h1>
          </header>
          <div className="content mail">
            <p>Hej!</p>
            <p>
              Det har snart gått sju månader av verksamhetsåret 21/22. Inför det
              extra årsmötet och särskilt punkten "Lägesrapport" ser vi fram
              emot att styrelse och ledning i Brynäs tar chansen att berätta hur
              planen för föreningen ser ut på kort och medellång sikt för att
              öka delaktigheten och intresset kring Brynäs.
            </p>
            <p>
              Vi ser att föreningen behöver inkludera alla engagerade Brynäsare
              för att samla kraften och skapa möjligheter att öka
              utvecklingstakten. Styrelse och ledning behöver visa vägen framåt!
              Det är därför viktigt att gå från att informera till att
              kommunicera med konkreta aktiviteter över hur Brynäs skall gå
              vidare inom prioriterade områden.
            </p>
            <h6>Här är några övergripande frågeställningar att belysa:</h6>
            <p>
              <ul>
                <li>
                  Var befinner sig Brynäs som förening nu och hur ser vägen
                  framåt ut?
                </li>

                <li>
                  Hur ser ansvarsfördelningen ut mellan styrelse och ledning i
                  det fortsatta arbetet med 100-dagarsplanen?
                </li>

                <li>
                  Hur har styrelsens arbete förändrats efter att arbetet med den
                  operativa 100-dagarsplanen landat hos Klubbdirektören?
                </li>

                <li>
                  Hur ser planen ut för att lyfta den strategiska
                  kommunikationen?
                </li>
              </ul>
            </p>
            <h6>
              Här kommer några prioriterade områden vi skulle vilja få mer
              detaljer kring:
            </h6>
            <h6>Sporten</h6>
            <p>
              <ul>
                <li>
                  Hur ser den sportsliga inriktningen ut långsiktigt? Hur spelar
                  Brynäs, hur tränar Brynäs? Vem ansvarar för att sätta de
                  viktiga sportfrågorna? När skall planen presenteras för
                  medlemmarna?
                </li>

                <li>
                  Vad görs på kort sikt för att säkra SHL/kontraktet och att
                  slippa kval?
                </li>

                <li>
                  Hur ser strategin ut inför säsongen 2022/23, hur ska
                  SHL-truppen byggas kopplat till hur Brynäs ska spela?
                </li>

                <li>
                  Hur tänker vi på Damsidan för att kunna bärga föreningens
                  första guld redan denna säsong?
                </li>

                <li>
                  Hur ska vi återigen få en konkurrenskraftig juniorsida med
                  ökad försörjning av egna spelare till våra representationslag?
                </li>
              </ul>
            </p>
            <h6>Arenaupplevelsen</h6>
            <p>
              Vilka aktiviteter prioriteras kring:
              <ul>
                <li>Intresset att besöka arenan?</li>
                <li>Restaurang, barer och kioskupplevelser?</li>
                <li>Souvenirbutik?</li>
                <li>
                  Publiken inklusive dialog med supporterklubbarna och
                  utveckling av ståplats?
                </li>
              </ul>
            </p>
            <h6>Ekonomirapportering</h6>
            <p>
              <ul>
                <li>
                  Resultat första halvåret, jämför med budget samt prognos för
                  helår?
                </li>
                <li>
                  Kassaflöde första halvåret, jämför med budget samt prognos för
                  helåret?
                </li>
                <li>
                  Intäktssidan, hur ligger vi till med publikintäkter samt
                  partner/reklamintäkter jämfört med plan?
                </li>
                <li>Kostnadssidan, hur ligger vi till jämfört med plan?</li>
                <li>Investeringsplan för innevarande år samt kommande år?</li>
              </ul>
            </p>
            <p>
              Med vänlig hälsning,
              <div className="mt-1">Brynäs Kan Bättre</div>
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
