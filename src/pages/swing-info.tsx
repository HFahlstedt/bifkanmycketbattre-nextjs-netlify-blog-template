import React from "react";
import Layout from "../components/Layout";
import { LinkedIn } from "../components/LinkedIn";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function SwingInfo() {
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
                  <img src="/images/swing.png" alt="[Lise-Lotte Swing]" />
                </figure>
              </div>
              <div className="column">
                <header>
                  <h1 className="title is-3 mb-2">Lise-Lotte Swing</h1>
                </header>
                <p>Ledamot</p>
                <LinkedIn link="https://www.linkedin.com/in/lise-lotte-swing-6908b0bb" />
              </div>
            </div>
            <p>
              Mitt namn är Lise-Lotte Swing är 52 år och bor sedan 10 år i
              Bomhus Gävle med min man och våra två gemensamma barn, 19 och 21
              år gamla. Till familjen hör också en bonusdotter på 29 år som bor
              på annan ort. Trots att jag själv aldrig utövat lagidrott utan
              varit en hästtjej under min uppväxt så har jag tillbringat väldigt
              mycket tid på olika idrottsarenor, främst i Gästrikland, då vår
              son spelat både fotboll och ishockey. Detta att vara en del av
              föreningslivet och se glädjen, och även tårarna, på barn och
              ungdomar när de idrottar är en sån förmån att få delta i. Allt
              runtomkring - träningar, matcher, cuper, föräldrar och
              barn/ungdomar – det skulle fler uppleva.
            </p>
            <p>
              Mitt engagemang inom föreningslivet började när vi bodde i
              Östhammar och i Östhammars Sportklubb där bägge våra barn började
              sin idrottsresa. Sonen i både fotbolls- och hockeyskola och
              dottern i fotbollsskola. Dotterns idrottsintresse svalnade men
              sonens bestod. När vi flyttade till Gävle var IK Huge den
              självklara föreningen att börja idrotta i. I IK Huge blev jag
              kvar, trots att sonen gått vidare till en annan klubb då IK Huge
              inte kan erbjuda juniorhockey, och är sedan några år tillbaka
              ekonomiansvarig
            </p>
            <p>
              Min yrkesbana består av mycket siffror då jag är ekonom och jobbar
              på skogsavdelningen på BillerudKorsnäs i Gävle. Min uppgift är
              att, tillsammans med min grupp, sammanställa hela BillerudKorsnäs
              koncernens kostnader för vedråvara varje månad för att ge korrekt
              information till de olika produktionsanläggningarna vad en stor
              del av deras råvarukostnad för deras produkter är.
            </p>
            <p>
              Jag är, och har alltid, varit Brynäsare. Innan jag hade egen
              familj så var jag lite ensam i att heja på Brynäs – hela övriga
              familjen hejade på Leksand. Nu är jag dessutom gift med en
              Leksands-supporter men det är helt OK.
            </p>
            <p>
              Det jag vill och tycker jag kan bidra med i Brynäs organisation är
              att lyfta dialogen kring hur vi får fler att fortsätta idrotta så
              långt upp i åldrarna som möjligt. Det måste finnas en ”röd tråd”,
              ända från barn- och ungdomsidrotten upp på elitnivå på både Dam
              och Herrsidan. Den röda tråden måste innefatta även regionens alla
              föreningar för detta med idrott är för alla och alla ska kunna
              vara med så länge som det finns ett intresse från den enskilde
              individen.
            </p>
            <p>
              Brynäs IF ska vara ett föredöme för regionens idrottsrörelse men
              just nu har föreningen stora utmaningar att jobba med och där vill
              jag vara en del i bidra till att återigen sätta Brynäs IF på
              kartan som den förebild de förtjänar att vara.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
