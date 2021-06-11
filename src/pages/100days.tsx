import React, { useState } from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function About() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);
  const [toggle8, setToggle8] = useState(false);

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <header>
            <h1 className="title is-2">100 dagar</h1>
            <h2 className="subtitle is-5">
              Med fokus på ishockey ska Brynäs IF skapa vinnare på och vid sidan
              av isen
            </h2>
          </header>
          <p className="mb-6"></p>
          <div className="content">
            <h2 className="title is-3">Antaganden</h2>
            <h3 className="subtitle is-6">
              -som vi bygger vårt 100-dagarsprogram på​
            </h3>
            <p>
              Den nominerade styrelsen har inte haft full insyn i den dagliga
              verksamheten i Brynäs IF. Vi har löpande följt föreningen, haft
              otaliga konversationer med personer i och runt föreningen och
              tagit del av information via forum. ​ ​ ​
            </p>
            <p>
              Den information vi har haft tillgång till har vi sammanfattat i
              tre antaganden som vi sedan utgått från när vi utformat vårt
              100-dagarsprogram. Vi vet att vi behöver ha flexibilitet att
              justera i vårt 100-dagarsprogram när vi fått full insyn i
              föreningens organisatoriska och ekonomiska status. Vi ska
              kommunicera kring de justeringar vi gör i 100-dagarsprogrammet. ​
            </p>
            <h6>Antaganden​</h6>
            <ol>
              <li>
                Föreningen kommer att ha en ekonomisk utmaning efter ett
                verksamhetsår med förmodat stort negativt resultat. Framtidens
                ekonomiska förutsättningar är mycket osäkra som resultat av den
                situation Brynäs befinner sig i.​
              </li>
              <li>
                Föreningen har tappat medlemmar på grund av uteblivna sportsliga
                resultat i SHL samt avsaknad av delaktighet och transparens.
                Föreningen har tappat attraktionskraften i vad Brynäs IF står
                för.​
              </li>
              <li>
                Föreningen har haft en hög personalomsättning de senaste
                verksamhetsåren på grund av avsaknad av ordning och reda i
                organisationen. Det har påverkat personalen negativt, medfört en
                osund psykosocial arbetsmiljö, minskad arbetsglädje, stolthet
                och har lett till en hög personalomsättning.​
              </li>
            </ol>
            <h2 className="title is-3">De första 100 dagarna</h2>
            <h3 className="subtitle is-6">
              -för att skapa förutsättningar för den sportsliga verksamheten​
            </h3>

            <h4>Följande aktiviteter ska ske inom 100 dagar​</h4>
            <ol>
              <li className="mb-4">
                <div className="is-size-4 has-text-weight-bold">
                  Anställa en Sportchef
                </div>
                <div className="is-italic has-text-ligtht">
                  ”För att bygga den sportsliga organisationen från ungdoms-
                  till seniorhockey på herr- och damsidan”​
                </div>
                {toggle1 === false ? (
                  <a onClick={() => setToggle1(true)}>Läs mer...</a>
                ) : (
                  <>
                    <ul>
                      <li>Skapa en önskad profil för kommande sportchef</li>
                      <li>Säkerställa en kvalitativ rekryteringsprocess​</li>
                      <li>Identifiera lämpliga kandidater​</li>
                      <li>
                        Inleda konkreta diskussioner med ett urval av
                        identifierade kandidater​
                      </li>
                    </ul>
                    <a onClick={() => setToggle1(false)}>Dölj</a>
                  </>
                )}
              </li>
              <li className="mb-4">
                <div className="is-size-4 has-text-weight-bold">
                  Anställa en Klubbdirektör​
                </div>
                <div className="is-italic has-text-ligtht">
                  ”För att hantera de operativa frågeställningarna och bygga upp
                  en relevant organisation för den dagliga driften”​
                </div>
                {toggle2 === false ? (
                  <a onClick={() => setToggle2(true)}>Läs mer...</a>
                ) : (
                  <>
                    <ul>
                      <li>
                        Skapa en önskad profil för kommande klubbdirektör​
                      </li>
                      <li>Säkerställa en kvalitativ rekryteringsprocess</li>
                      <li>Identifiera lämpliga kandidater​</li>
                      <li>
                        Inleda konkreta diskussioner med ett urval av
                        identifierade kandidater
                      </li>
                    </ul>
                    <a onClick={() => setToggle2(false)}>Dölj</a>
                  </>
                )}
              </li>
              <li className="mb-4">
                <div className="is-size-4 has-text-weight-bold">
                  Sätta organisationen för BIF och BAAB​
                </div>
                <div className="is-italic has-text-ligtht">
                  ”För att få glädje och effektivitet i verksamheten där alla
                  känner till sitt ansvar och sina befogenheter”​
                </div>
                {toggle3 === false ? (
                  <a onClick={() => setToggle3(true)}>Läs mer...</a>
                ) : (
                  <>
                    <ul>
                      <li>
                        Identifiera en lämplig organisationsstruktur och
                        förankra den i verksamheten​
                      </li>
                      <li>
                        Bygg upp en systematik kring vilka ansvar och
                        befogenheter som respektive roll har i organisation
                        (rollbeskrivningar)​
                      </li>
                      <li>
                        Skapa en mötesstruktur för uppföljning och beslut​
                      </li>
                      <li>
                        Införa kontinuerliga medarbetarundersökningar som
                        analyseras och handlingsplaner för åtgärder​
                      </li>
                      <li>
                        Införa mentorskap mellan styrelsemedlemmar och anställd
                        personal​
                      </li>
                    </ul>
                    <a onClick={() => setToggle3(false)}>Dölj</a>
                  </>
                )}
              </li>
              <li>
                <div className="is-size-4 has-text-weight-bold">
                  Skapa ordning och reda i den operativa verksamheten​
                </div>
                <div className="is-italic has-text-ligtht">
                  "För att få kontroll över verksamheten, jobba med de relevanta
                  frågeställningarna och föreningens värdegrundsarbete”​
                </div>
                {toggle4 === false ? (
                  <a onClick={() => setToggle4(true)}>Läs mer...</a>
                ) : (
                  <>
                    <ul>
                      <li>
                        Genomlysa det senaste årens bokslut och
                        verksamhetsplaner
                      </li>
                      <li>
                        Via intervjuer få en bild av verksamhetens status och
                        dess påverkan på framtida intäkter och kostnader​
                      </li>
                      <li>Inbjuda till dialog med partners och sponsorer​</li>
                      <li>
                        Minimera användandet av konsulter. Inga på
                        nyckelbefattningar.​
                      </li>
                      <li>Säkerställa kvalitativa rekryteringsprocesser​</li>
                      <li>
                        Införa en striktare kostnadskontroll med hjälp av en
                        förankrad attestdelegering i organisationen​
                      </li>
                      <li>
                        Skapa en kostnadsmedvetenhet inom verksamheten för att
                        prioritera rätt kostnader​
                      </li>
                      <li>Arbeta med Brynäs IF värdegrund</li>
                    </ul>
                    <a onClick={() => setToggle4(false)}>Dölj</a>
                  </>
                )}
              </li>
              <li className="mb-4">
                <div className="is-size-4 has-text-weight-bold">
                  Skapa kommunikationsplattformar och mötes forum​
                </div>
                <div className="is-italic has-text-ligtht">
                  "För att få transparens, förtroende och delaktighet bland
                  medlemmarna, partners och övriga intressenter"​
                </div>
                {toggle5 === false ? (
                  <a onClick={() => setToggle5(true)}>Läs mer...</a>
                ) : (
                  <>
                    <ul>
                      <li>
                        Utveckla ”Privatpartners”. Vår ambition är att
                        information om föreningen skall vara tillgänglig för
                        alla intressenter​
                      </li>
                      <li>
                        Skapa en kommunikationsplan som sträcker sig över en
                        säsong som t.ex. kan innehålla följande,​
                        <ul>
                          <li>Månadsbrev</li>
                          <li>Medlems- och partnermöten​</li>
                          <li>Kvartalsinformation</li>
                          <li>Intervjuer med ledare/tränare/spelare/etc.​</li>
                          <li>Info om En Bra Start</li>
                        </ul>
                      </li>
                      <li>
                        Förstärka kommunikationsfunktionen med ytterligare
                        resurser. Kommunikationen är viktig och det bör finnas
                        en ansvarig utgivare med representation i
                        klubbledningen.{" "}
                      </li>
                      <li>
                        Kommunikationsstrategier för krishantering och arbeta
                        löpande med scenarioplanering för att hantera
                        oförutsedda händelser.
                      </li>
                      <li>
                        Omvärlds- och mediabevakning på agendan i såväl styrelse
                        som klubbledning.​
                      </li>
                      <li>Digitalisera medlemsdialogen</li>
                      <li>
                        Införa kommittéer under styrelsen som arbetsgrupper med
                        representanter från styrelsen och de anställda​
                      </li>
                      <li>
                        Införa offentliga Brynäs mailadresser åt respektive
                        styrelsemedlem och klubbledning så att nyckelpersoner
                        kan nås av medlemmar och intressenter.​
                      </li>
                    </ul>
                    <a onClick={() => setToggle5(false)}>Dölj</a>
                  </>
                )}
              </li>
              <li className="mb-4">
                <div className="is-size-4 has-text-weight-bold">
                  Sätta mål inför kommande säsong (verksamhetsplan)​
                </div>
                <div className="is-italic has-text-ligtht">
                  "För att skapa delaktighet genom gemensamma målsättningar med
                  möjlighet att följa/styra utvecklingen”​
                </div>
                {toggle6 === false ? (
                  <a onClick={() => setToggle6(true)}>Läs mer...</a>
                ) : (
                  <>
                    <ul>
                      <li>Genomlysa verksamheten för att förstå nuläget</li>
                      <li>
                        Genomföra SWOT (styrkor, svagheter, möjligheter och hot)
                        analyser per verksamhetsområde med berörda​
                      </li>
                      <li>
                        Ha enskilda samtal med de anställda för att förstå
                        möjligheter och hot mot verksamheten under kommande
                        säsong​
                      </li>
                      <li>
                        Införa ett antal nyckeltal som driver verksamheten i den
                        riktningen som styrelse och ledningen enas om
                      </li>
                      <li>
                        Bryta ner de övergripande nyckeltalen genom organisation
                        så att varje individ förstår sitt bidrag till framgång
                      </li>
                      <li>Skapa ett tydligt årshjul för verksamheten</li>
                      <li>
                        Genomföra en första mätning av en
                        medarbetarundersökning. Ska sedan vara återkommande och
                        löpande analyseras och tas fram handlingsplaner för
                        åtgärder​
                      </li>
                    </ul>
                    <a onClick={() => setToggle6(false)}>Dölj</a>
                  </>
                )}
              </li>
              <li className="mb-4">
                <div className="is-size-4 has-text-weight-bold">
                  Utveckla och skapa nya intäktsströmmar​
                </div>
                <div className="is-italic has-text-ligtht">
                  ”För att inte begränsa utvecklingen av den sportsliga
                  verksamheten behöver vi se över intäktsströmmarna”​
                </div>
                {toggle7 === false ? (
                  <a onClick={() => setToggle7(true)}>Läs mer...</a>
                ) : (
                  <>
                    <ul>
                      <li>
                        Utveckla nya och befintliga koncept såsom;
                        <ul>
                          <li>Privatpartners och publik marknad</li>
                          <li>
                            Försäljning av souvenirer, restaurang, konferens
                            m.m.​
                          </li>
                          <li>Morgondagens Brynäsare​</li>
                          <li>Etc.</li>
                        </ul>
                      </li>
                    </ul>
                    <a onClick={() => setToggle7(false)}>Dölj</a>
                  </>
                )}
              </li>
              <li>
                <div className="is-size-4 has-text-weight-bold">
                  Påbörja arbetet med att skapa en långsiktig strategi​
                </div>
                <div className="is-italic has-text-ligtht">
                  "Parallellt med den kortsiktiga planen (kommande säsongs
                  verksamhetsplan), så måste en mer långsiktig plan utformas och
                  kommuniceras för att säkerställa att vi skapar det Brynäs IF
                  vi vill ha i framtiden”​
                </div>
                {toggle8 === false ? (
                  <a onClick={() => setToggle8(true)}>Läs mer...</a>
                ) : (
                  <>
                    <ul>
                      <li>
                        Styrelsen, klubbledningen och nyckelpersoner genomför en
                        workshop/seminarium för att inleda strategiarbetet​
                      </li>
                      <li>
                        Genomföra en intressentanalys för att identifiera vilka
                        som bör/kan bidra till den långsiktiga strategin​
                      </li>
                      <li>
                        Driva och utveckla en plattform så att engagerade
                        medlemmar har ökad möjlighet att medverka och påverka.
                        Identifiera arbetsformerna för detta samarbete.​
                      </li>
                      <li>
                        Skapa en plan för att jobba med föreningens värdegrund
                        och den kultur vi vill skall genomsyra Brynäs IF​
                      </li>
                    </ul>
                    <a onClick={() => setToggle7(false)}>Dölj</a>
                  </>
                )}
              </li>
            </ol>
          </div>
        </article>
      </div>
    </Layout>
  );
}
