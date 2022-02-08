import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import Question from "../components/Question";

export default function Faq() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className={"container"}>
        <article>
          <header>
            <h1 className="title is-2 mb-5">Frågor och svar</h1>
          </header>
          <div className="content">
            <Question question="Vilka är vi?">
              Ett snabbt svar på den frågan fås genom att kika in under rubriken{" "}
              <a href="/about">Vilka är vi</a>. Där finns namn och bakgrund
              beskriven på medlemmarna i{" "}
              <span className="has-text-weight-bold">Brynäs Kan Bättre</span>.
              Vi är ett antal medlemmar som tycker att utvecklingen i Brynäs har
              varit på väg åt fel håll ett längre tag. Det kulminerade under
              vintern/våren 2021. Det räcker nu! Vi vill se ett bättre Brynäs!
              Under parollen ”Brynäs kan bättre. Mycket bättre.” försöker vi som
              medlemmar påverka så att Brynäs påbörjar en förbättringsresa inom
              alla områden och tar upp konkurrensen med de bästa.
            </Question>
            <Question question="Är det samma medlemmar i Brynäs Kan Bättre som i Brynäs styrelse?">
              <p>Nej, det är det inte.</p>
              <p>
                Ingen i{" "}
                <span className="has-text-weight-bold">Brynäs Kan Bättre</span>{" "}
                har blivit vald till Brynäs styrelse. Ingen i Brynäs styrelse
                har varit med i{" "}
                <span className="has-text-weight-bold">Brynäs Kan Bättre</span>.
                Medlemmarna i{" "}
                <span className="has-text-weight-bold">Brynäs Kan Bättre</span>{" "}
                var med och föreslog kandidater till Brynäs styrelse som sedan
                Brynäs medlemmar röstade på vid årsmötet i juni 2021. Brynäs
                styrelse är vald av Brynäs medlemmar.{" "}
                <span className="has-text-weight-bold">Brynäs Kan Bättre</span>{" "}
                består av medlemmar i Brynäs som har valt att göra rösterna
                hörda för att som engagerade medlemmar i föreningen Brynäs IF
                höja kraven på Brynäs ledning efter ett antal år av sportslig
                stagnation. Vi är övertygade om att Brynäs kan bättre. Mycket
                bättre. Det jobbar vi för.
              </p>
              <p>
                Under <a href="/about">Vilka är vi</a> finns information om
                vilka som är med i{" "}
                <span className="has-text-weight-bold">Brynäs Kan Bättre</span>.
                Medlemmarna i Brynäs IF styrelse hittar man enklast via{" "}
                <a href="https://www.brynas.se" target="_blank">
                  www.brynas.se
                </a>
                .
              </p>
            </Question>
            <Question question="Går det att kritisera de kandidater ni själva varit med och föreslagit till Brynäs styrelse?">
              Ja, vägen framåt kräver att Brynäs IF bygger en stark
              vinnarkultur. Då får du räkna med att bedömas och kritiseras
              oavsett om du spelar i Brynäströjan eller ingår i Brynäs styrelse
              och ledning. Med 100-dagarsprogrammet flyttade den nya styrelsen
              välbehövligt upp förväntningarna på en ny nivå jämfört med
              föregående styrelse. Kommunikationen var ett område som särskilt
              kritiserades av både medlemmar och kandidater till den nya
              styrelsen inför årsmötet. Då finns det mycket att leva upp till
              när förtroendet som styrelsemedlem fås att ansvara för att leda
              Brynäs IF. Det gäller att vinna medlemmarnas och omvärldens
              förtroende om viljan att fortsätta ansvara för Brynäs utveckling
              finns. Då är kommunikation och dialog ett viktigt verktyg. Som
              engagerade medlemmar i Brynäs IF och{" "}
              <span className="has-text-weight-bold">Brynäs Kan Bättre</span>{" "}
              ser vi det som vårt ansvar att komma med konstruktiv kritik till
              de som har fått ansvaret att leda Brynäs IF. Brynäs styrelse och
              ledning behöver visa vägen framåt genom att samla alla Brynäsare
              till att göra framtidsresan tillsammans! Ett hållbart Brynäs
              kräver både inkludering och involvering av alla intressenter som
              vill satsa på Brynäs, inte minst dess medlemmar.
            </Question>
            <Question question="Är det viktigt att engagera sig i Brynäs framtid som medlem i föreningen?">
              Ja, vi tycker det. Vår bedömning är att desto större engagemang
              från Brynäs medlemmar, desto bättre verksamhet kommer Brynäs IF
              att bedriva. Styrelser, ledning, tränare och spelare kommer och
              går. Brynäs IF är dess fans och medlemmar! Det är Brynäs medlemmar
              som ”äger” föreningen” och med det följer även ett ansvar att
              komma med förväntningar om framtidens Brynäs IF! Vi jobbar för att
              öka engagemanget kring Brynäs och hoppas att fler vill vara med
              att höja förväntningar och krav på Brynäs IF, dess ledning,
              medarbetare, tränare och spelare. Det är vägen till framgång!
            </Question>
            <Question question="Hur kommer jag i kontakt med Brynäs Kan Bättre om jag har frågor eller funderingar?">
              Enklast är att använda{" "}
              <a href="/contactpage">Kontaktformuläret</a>.
            </Question>
          </div>
        </article>
      </div>
    </Layout>
  );
}
