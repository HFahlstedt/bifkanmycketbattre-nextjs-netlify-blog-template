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
            <Question question="Vilka är ni?">
              Vi är stort antal engagerade medlemmar som har verkat i och runt
              föreningen under lång tid, och som just nu känner stor oro för
              Brynäs IF. Vi är i dagsläget över 100 personer som alla tycker
              samma sak. Brynäs kan bättre och Brynäs behöver en nystart. Vi
              hoppas på att bli fler.{" "}
            </Question>
            <Question question="Vad vill ni?">
              Vi har tappat förtroende för nuvarande styrelse, och tror inte att
              de är rätt personer att fortsatt leda Brynäs. Föreningen behöver
              en nystart och därmed också en ny styrelse. Har ni förslag på hur
              en ny styrelse skulle kunna se ut? Vi har en idé på vilka
              kompetenser som behövs i styrelsen för att kunna göra en riktig
              nystart och därmed också ett konkret förslag på ett antal namn som
              är beredda att kliva in i styrelsen i föreningens ansträngda läge.
            </Question>
            <Question question="Varför går ni inte den officiella vägen via Valberedningen?">
              Vi har försökt. Vi har haft många samtal med valberedningen för
              att berätta vad vi ser händer i och runt föreningen, och vad som
              behöver göras för att vända den negativa trenden. Tyvärr väljer de
              att inte ha dialog med oss. De delar inte med sig av sin syn på
              vad de anser att Brynäs behöver och avstår därmed att vara den
              samlade kraft som Brynäs skulle behöva nu. De hänvisar enbart till
              att deras förslag kommer att presenteras en vecka innan årsmötet.
            </Question>
            <Question question="Vad anser ni har gått snett i Brynäs?">
              När vi som medlemmar betraktar den negativa utvecklingen sedan
              SM-guldet 2012 är det några orsaker som sticker ut och som kan ge
              en förklaring till att det ser ut som det gör idag.
              <ul>
                <li>
                  det har saknats en gemensam bild av vad Brynäs står för och
                  hur vägen framåt skall se ut
                </li>
                <li>
                  ett antal misslyckade rekryteringar till viktiga befattningar
                  i föreningen, från klubbdirektör till tränare och spelare
                </li>
                <li>
                  otillräcklig ledning, styrning och uppföljning · bristfällig
                  kommunikation
                </li>
                <li>
                  de sportsliga resultaten har försämrats i takt med att allt
                  fler tränare sparkats
                </li>
              </ul>
            </Question>
            <Question question="Vad behöver hända i Brynäs?">
              Brynäs IF behöver:
              <ul>
                <li>
                  ett tydligt ledarskap för att återskapa förtroendet för
                  föreningen
                </li>
                <li>
                  fokusera på ordning och reda och på att bygga upp en stabil
                  ekonomi de kommande åren
                </li>
                <li>
                  bygga upp organisationen (inte minst sportorganisationen) igen
                  med individer som fungerar som ett lag för att tillsammans
                  skapa en framgångsrik framtid
                </li>
              </ul>
            </Question>
          </div>
        </article>
      </div>
    </Layout>
  );
}
