import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function StridhInfo() {
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
                  <img src="/images/lipskog_small.png" alt="[Robert Lipskog]" />
                </figure>
              </div>
              <div className="column">
                <header>
                  <h1 className="title is-3 mb-2">Robert Lipskog</h1>
                </header>
                <p>Ledamot</p>
              </div>
            </div>
            <p>
              Mitt namn är Robert Lipskog och bor mitt i Gävle med min familj
              sedan 8år. Familjen består av mina 2 barn, sambo, hund och två
              hästar. Höll nästan på att glömma En Volvo ;-). Själv har jag
              ingen erfarenhet av att spela hockey men är oerhört förtjust i att
              träna och vara i tävlingsmiljöer.
            </p>
            <p>
              Idrott är för mig inte bara tävlingen utan även gemenskapen och
              den härliga kraften som samlas kring ett intresse. Det är starkt
              och viktigt för inte bara för alla supportrar utan hela Gävle.
              Brynäs IF är viktigt för oss som bor här.
            </p>
            <p>
              Jag som person har ett starkt utvecklingsdriv och har under alla
              år tagit mig an utmaningar som varit stora i organisationer.
              Gillar att se potential i organisationer och företag som har
              svackor för att skapa lag som kan vända till något positivt. Tar
              sällan den enkla vägen utan tar saker för vad de är och har ingen
              prestige i att ”ombestämma” mig om det inte blir som vi tänkt
            </p>
            <p>
              Mina tankar kring Brynäs är ganska enkla, jag vill vara med och
              skapa en organisation som är ”Vinnare på och vid sidan av isen”.
              Upplever i grunden en otroligt stark vilja i föreningen med
              målsättningar och krav som ska infrias. Målsättningarna är höga
              och planerna stora men har över tid saknat den röda tråden till
              att förverkliga det man vill.
            </p>
            <p>
              Det som saknas är människorna och uppföljningen av detaljerna som
              ska förverkliga målen. Under de åren vi varit partner har vi sett
              fantastiska saker hända inom Brynäs men också sett problem långt
              innan de kommit till känna via media. De flesta hade helt kunnat
              undvikas med starkt och tydligt ledarskap på plats.
            </p>
            <p>
              De viktigaste delarna inom Brynäs jag önskar ske förändringar på
              är:
            </p>
            <ul>
              <li>
                Sportchefen den viktigaste rollen för att bygga kommande
                framgång. Strategiskt avgörande roll där resurser ska till. För
                att bli topplag måste en topprekrytering ske. Brynäs ska bli en
                attraktiv arbetsgivare där vi leder framgång långsiktigt.
              </li>
              <li>
                Satsning på Egna produkter. Bli en topporganisation för att
                skola kommande toppspelare. Tydlig strategi och rekrytering för
                att komma dit
              </li>
              <li>
                Upplevelsen, tillsammans skapa en fantastisk känsla i och kring
                Arenan. Det är upplevelsen av spänning, oro och glöd som ska
                vara hela vägen.
              </li>
            </ul>
            <p>
              Vill ni att jag representerar er i styrelsen är jag ödmjuk men
              otroligt stolt inför uppgiften. Lovar att utveckla, ifrågasätta
              och hjälpa med all den kraft jag har.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
