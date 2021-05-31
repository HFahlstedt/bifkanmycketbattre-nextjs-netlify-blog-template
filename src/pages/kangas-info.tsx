import React from "react";
import Layout from "../components/Layout";
import { LinkedIn } from "../components/LinkedIn";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function KangasInfo() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <div className="content">
            <div className="columns">
              <div className="column is-one-fifth">
                <figure className="image">
                  <img src="/images/kangas.jpeg" alt="[Magnus Kangas]" />
                </figure>
              </div>
              <div className="column">
                <header>
                  <h1 className="title is-3 mb-2">Magnus Kangas</h1>
                </header>
                <p>Ordförande</p>
                <LinkedIn link="https://www.linkedin.com/in/magnuskangas/" />
              </div>
            </div>
            <p>
              Mitt namn är Magnus Kangas, jag är gift och har fyra grabbar. Vi
              bor i Sundsvall efter att tillbringat ca 8 år i Gävle med omnejd.
              Jag har aldrig spelat hockey själv men har ett stort intresse för
              idrotten som sådan och för Brynäs IF i synnerhet. Att Brynäs IF är
              mitt lag beror nog en hel del på att jag ursprungligen kommer från
              Kiruna som fostrat många spelare åt Brynäs IF. Som kuriosa så
              bodde min mormor och morfar granne med Tord Lundström.
            </p>
            <p>
              Min yrkesverksamma bakgrund är att leda organisationer inom
              processindustrin. Jag har stora erfarenheter av att bygga
              värdeskapande team och driva förändringar i verksamheter som
              påkallats av en föränderlig omvärld. De ledord jag försöker leva
              efter är Delaktighet, Laganda och Förtroende.
            </p>
            <p>
              Jag vill att alla intressenter runt Brynäs IF, medlemmar,
              supportrar, sponsorer, anställda, etc., ska känna sig delaktiga i
              Brynäs IF som förening. Vi ska tillsammans skapa vinnare både på
              och vid sidan av isen.
            </p>
            <p>
              Om det blir aktuellt med mig som ordförande så är en av mina
              större uppgifter att skapa ett bra lag av styrelsen och den
              framtida klubbledningen. Vi ska så snart som möjligt ta fram en
              gemensam långsiktigt hållbar strategi för att bygga upp Brynäs IF
              som en vinnande förening med ishockeyn i centrum.
            </p>
            <p>
              Förtroendet för Brynäs IF:s styrelse måste återetableras och detta
              görs främst genom att kommunicera ofta och tydligt om vad som
              händer och i vilket syfte. Även detta kommer att leda till en
              känsla av delaktighet för oss alla som bryr oss om föreningen
              Brynäs IF.
            </p>
            <p>
              Det är viktigt att Brynäs IF den närmaste tiden fokuserar på att
              hantera den kris som föreningen befinner sig i. Den är allvarlig
              och kan ha ödesdigra konsekvenser om den inte hanteras rätt.
            </p>
            <p>
              Det som bland annat måste hända de första 100 dagarna som ny
              styrelse är följande:
            </p>
            <ul>
              <li>Återskapa ett förtroende för styrelsen och klubbledningen</li>
              <li>
                Rekrytera nyckelpersoner för positionerna som klubbdirektör,
                sportchef och tränare
              </li>
              <li>
                Skapa en struktur inom föreningen som säkerställer att vi har en
                sund ekonomin. Ekonomin är ett område som behöver genomlysas och
                hanteras så att Brynäs IF i framtiden är berättigad till en
                elitlicens och därmed spel i SHL
              </li>
              <li>
                Tillsammans med den nya klubbledningen utarbeta en strategi med
                tillhörande aktiviteter vilka ska leda till att vi åter blir ett
                vinnande lag på herrsidan (SHL och juniorerna) och att damerna
                förankras i toppen av SDHL
              </li>
            </ul>
            <p>
              Jag inser att det kommer att krävas mycket hårt arbete, många
              timmar och ett starkt ledarskap att vända på den negativa trend
              som Brynäs IF befinner sig i och för att återskapa en förening som
              genomsyras av att vi tillsammans skapar vinnare både på och vid
              sidan av isen.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
