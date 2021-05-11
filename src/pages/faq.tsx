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
              Vi är ett antal engagerade medlemmar som har verkat i och runt
              föreningen under lång tid, och som just nu känner stor oro för
              Brynäs IF. Vi vet att det i dagsläget är många som tycker likadant
              som oss. Brynäs kan bättre och Brynäs behöver en nystart på alla
              områden. Vi har erfarenhet av valberedningsarbete i Brynäs, av att
              jobba i föreningen och från engagemang i supporterföreningarna
              m.m.
            </Question>
            <Question question="Vad vill ni?">
              Vi har tappat förtroende för nuvarande styrelse, och tror inte att
              de är rätt personer att fortsatt leda Brynäs. Föreningen behöver
              en nystart och därmed också en ny styrelse för att starta
              renoveringsarbetet i Brynäs. På kort sikt handlar det om att skapa
              ordning och reda i föreningen och att bygga upp förtroende för
              föreningen. De närmaste säsongerna kommer att handla väldigt
              mycket om ekonomi, budget och att återskapa eget kapital för att
              möta licenskraven från ligan.
            </Question>
            <Question question="Har ni förslag på hur en ny styrelse skulle kunna se ut?">
              Vi har en idé på vilka kompetenser som behövs i styrelsen för att
              kunna göra en riktig nystart och därmed också ett konkret förslag
              på ett antal namn som är beredda att kliva in i styrelsen i
              föreningens ansträngda läge. Med tanke på att många
              nyckelkompetenser lämnat föreningen den senaste tiden har vi
              medvetet tänkt att det behöver finnas kunskap om föreningen och
              dess verksamhet bland de kandidater vi föreslår samtidigt som ny
              kraft behöver tillföras för att skapa förutsättning för dynamik
              och utveckling.
            </Question>
            <Question question="Varför går ni inte den officiella vägen via Valberedningen?">
              Vi har försökt. Vi har haft många samtal med valberedningen för
              att berätta vad vi ser händer i och runt föreningen, och vad som
              behöver göras för att vända den negativa trenden. Tyvärr väljer de
              att inte ha dialog med oss. De delar inte med sig av sin syn på
              vad de anser att Brynäs behöver och avstår därmed att vara den
              samlade kraft som Brynäs behöver nu. De hänvisar enbart till att
              deras förslag kommer att presenteras en vecka innan årsmötet.
              Medlemmarna står därmed utanför dialogen om vad Brynäs behöver för
              kompetenser och erfarenheter i styrelsen i detta utmanande läge.
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
            <Question question="Vad händer nu?">
              Vi ser ingen annan möjlighet än att själva som engagerade och
              oroade medlemmar lansera ett förslag med kandidater till ny
              styrelse som bygger på den bild vi redovisat ovan. Samtliga
              kandidater som vi lanserar vill och kan arbeta för att Brynäs IF
              får den välbehövliga nystart som behövs.
            </Question>
            <Question question="Vad menar ni med nystart?">
              Brynäs IF behöver återställa konkurrenskraften i alla delar av
              verksamheten. Brynäs behöver stärka den ekonomiska,
              organisatoriska och sportsliga förmågan. Rekrytering av nya
              medarbetare till organisationen blir nyckeln i renoveringsarbetet
              framöver. Hur bra den nya medarbetaren matchar kravprofilen för
              den aktuella rollen, och förmågan att jobba i lag med övriga
              kollegor ska sättas främst i rekryteringen.
            </Question>
            <Question question="Vilken blir styrelsens viktigaste roll?">
              Arbetet med att säkra en stabil ekonomi och ett eget kapital som
              möter kraven för elitlicens måste stå i fokus, och kommer att
              kräva ett stort tålamod de kommande säsongerna.
            </Question>
            <Question question="Hur ska medlemmarna kunna ha insyn i den nya styrelsens arbete?">
              Öppenhet blir ett viktigt ledord för den nya styrelsen. För att
              säkerställa att samtliga medlemmar i Brynäs får information hur
              arbetet går förväntas den nya styrelsen regelbundet kommunicera
              hur renoveringsarbetet fortskrider. Detta kan t ex ske via
              medlemsinformation och medlemsmöten samt andra möjligheter till
              dialog.
            </Question>
          </div>
        </article>
      </div>
    </Layout>
  );
}
