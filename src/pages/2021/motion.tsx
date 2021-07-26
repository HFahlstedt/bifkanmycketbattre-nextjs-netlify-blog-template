import React from "react";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";

export default function Motion() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <header>
            <h1 className="title is-2 mb-5">Motion</h1>
          </header>
          <div className="content">
            <p>
              Inför årsmötet har vi lämnat in ett förslag på förändring i
              föreningens stadgar. Den gångna säsongen har kommunikationen från
              föreningen var minst sagt undermålig, och vi menar att öppenhet
              blir ett viktigt ledord i framtiden för Brynäs IF.{" "}
            </p>
            <p>
              För att skapa en öppnare förening föreslår vi ett antal
              förändringar i stadgarna för att skärpa både styrelse och
              valberednings åligganden gentemot medlemmarna. Allt med syftet att
              höja föreningsdemokratin i Brynäs IF och bidra till en ökad
              transparens och dialog med föreningens medlemmar.
            </p>
            <p>
              Förslaget innehåller bland annat förändringar i
              nomineringsprocessen, och ett tydliggörande kring styrelsens
              ansvar att kommunicera till medlemmarna. Stadgeförändring omfattar
              paragraferna 15, 17, 23, 24 och 28, och du kan läsa hela motionen
              nedan.
            </p>
          </div>
          <div className="content has-background-white has-text-black p-6">
            <p className="has-text-weight-bold">
              Till årsmötet Brynäs IF 2021-06-22
            </p>
            <p className="has-text-weight-bold">
              Motion angående förändring av föreningsstadgar Brynäs IF
            </p>
            <p>
              Öppenhet blir ett viktigt ledord i framtiden för Brynäs IF. Den
              gångna säsongen har kommunikationen från föreningen var minst sagt
              undermålig. Vi föreslår därför ett antal förändringar i stadgarna
              för att skärpa både styrelse och valberednings åligganden gentemot
              medlemmarna. Förändringar som många andra föreningar redan har
              genomfört t ex Leksand, Djurgården och IFK Göteborg. För att
              säkerställa att samtliga medlemmar i Brynäs får information hur
              arbetet går ska styrelsen regelbundet kommunicera hur arbetet
              fortskrider. Detta kan t ex ske via medlemsinformation och
              medlemsmöten samt andra möjligheter till dialog. Representationen
              skall också efterleva medlemssammansättningen.
            </p>
            <hr className="motion" />
            <h4 className="motion">Paragraf 23 och 24</h4>
            <p>
              Vi föreslår:{" "}
              <span className="has-text-weight-bold uline">
                Att fet understruken text
              </span>{" "}
              i § 23 och § 24 läggs till i stadgarna.
            </p>
            <section className="times mb-6">
              <h5>STYRELSEN</h5>
              <h6>§ 23 Sammansättning</h6>
              <p>
                Styrelsen består av ordförande samt sex övriga ledamöter.
                Styrelsen utser inom sig vice ordförande.{" "}
                <span className="has-text-weight-bold uline">
                  Strävan skall vara att styrelsen ska bestå av både män och
                  kvinnor.
                </span>{" "}
                Vid mötena förs protokoll. Beslut och avvikande mening ska
                antecknas i protokollet.
              </p>

              <p>
                Styrelsen kan adjungera person till ett eller flera möten. En
                sådan person har inte rösträtt, men väl yttrande‐ och
                förslagsrätt.
              </p>

              <p>
                Ledamot som avgår under mandatperioden kan ersättas först vid
                årsmöte.
              </p>
              <h6>§ 24 Styrelsens åligganden</h6>
              <p>
                Mellan årsmötena är styrelsen föreningens beslutande organ och
                ansvarar för föreningens verksamhet.
              </p>
              <p>
                Styrelsen ska utse bolagsstyrelse inom helägda dotterbolag och
                utse representanter i delägda bolag. Styrelsen ska inom ramen
                för stadgarna och RF:s samt vederbörande SIF:s stadgar ansvara
                för föreningens verksamhet enligt fastställda planer samt
                tillvarata medlemmarnas intressen.
              </p>
              <p>Det åligger styrelsen särskilt att:</p>
              <ul>
                <li>
                  tillse att för föreningen gällande lagar och bindande regler
                  följs
                </li>
                <li>verkställa av årsmötet fattade beslut</li>
                <li>
                  till föreningens årsmöte framlägga verksamhetsberättelse med
                  resultat‐ och balansräkning samt verksamhetsplan och budget
                  för kommande verksamhetsår
                </li>
                <li>ansvara för och förvalta föreningens medel</li>
                <li>anställa klubbdirektör</li>
                <li>
                  tillse att planering, ledning och uppföljning sker inom
                  föreningen
                </li>
                <li>tillställa revisorerna räkenskaper mm enligt § 29</li>
                <li>
                  i särskild ordning meddela föreskrifter och riktlinjer
                  gällande styrelsens och klubbdirektörens arbete
                </li>
                <li className="has-text-weight-bold uline">
                  under året ha minst en medlemsträff utöver årsmötet för att
                  informera om det aktuella läget i föreningen
                </li>
                <li className="has-text-weight-bold uline">
                  skall under året verka för en god kommunikation med
                  medlemmarna bl.a. genom att på hemsidan fortlöpande informera
                  om sitt arbete
                </li>
              </ul>
              <p>
                Ordföranden är föreningens officiella representant. Ordföranden
                leder styrelsens möten och arbete. Vid förfall för ordföranden
                inträder vice ordföranden i dennes ställe. I övrigt fördelas
                ansvarsområdena bland styrelsens ledamöter efter beslut i
                styrelsen.
              </p>
            </section>
            <hr className="motion" />
            <h4 className="motion">Paragraf 28</h4>
            <section className="mb-6">
              <p>
                Valberedningens kommunikation med medlemmarna samt deras
                beredande arbete konkretiseras också. En utökning av antalet
                ledamöter föreslås för att man bättre ska kunna möta upp
                medlemmarnas krav och bli mer representativa för
                medlemssammansättningen.
              </p>
              <p>
                Vi ändrar också nomineringstider för att ge medlemmarna större
                inflytande.
              </p>

              <p>
                Vi föreslår:{" "}
                <span className="has-text-weight-bold uline">
                  Att fet understruken text
                </span>{" "}
                i § 28 läggs till i stadgarna samt att text med röd stil tas
                bort.
              </p>
            </section>

            <section className="times mb-6">
              <h5>VALBEREDNING</h5>
              <h6>§ 28 Sammansättning och åligganden</h6>
              <p>
                Valberedningen består av ordförande och{" "}
                <span className="has-text-weight-bold uline">fyra</span>{" "}
                <span className="has-text-danger">(två)</span> övriga ledamöter
                valda av årsmötet. Valberedningen utser bland sina ledamöter
                vice ordförande.{" "}
                <span className="has-text-weight-bold uline">
                  Strävan skall vara att valberedningen ska bestå av både män
                  och kvinnor.
                </span>{" "}
                Valberedningen sammanträder när ordförande eller minst halva
                antalet ledamöter så bestämmer.
              </p>

              <p className="has-text-weight-bold uline">
                Valberedningen ska bereda valen inför kommande årsmöte genom att
                kartlägga kompetensbehovet och lagsammansättningen i styrelsen.
              </p>
              <p className="has-text-weight-bold uline">
                Valberedningen ska fortlöpande under verksamhetsåret följa
                styrelsens arbete genom samtal med samtliga styrelsemedlemmar.
                Valberedningens representant skall kallas till minst ett
                styrelsemöte och ha tillgång till styrelseprotokollen. Man ska
                också ha löpande kontakt med revisorerna.
              </p>
              <p className="has-text-weight-bold uline">
                För att kunna inhämta ett brett underlag för sin analys ska
                valberedningen även lyssna av organisationen och
                samarbetspartners utöver sin kontinuerliga medlemskontakt.
              </p>
              <p className="has-text-weight-bold uline">
                Valberedningen skall under året verka för en god kommunikation
                med medlemmarna bl.a. genom att på hemsidan fortlöpande
                informera om sitt arbete. Valberedningen ska innan sista
                februari presentera föreningens kompetensbehov till kommande
                verksamhetsår inför årsmötet.
              </p>
              <p className="has-text-weight-bold uline">
                Röstberättigad medlem har rätt att till valberedningen lämna
                förslag på kandidater till styrelsen senast tre veckor innan
                årsmötet. Dessa kandidater skall presenteras på hemsidan senast
                två veckor innan årsmötet.
              </p>
            </section>
            <section className="has-text-danger times mb-6">
              <h4 className="has-text-danger">DETTA UTGÅR:</h4>
              <p>
                Valberedningen ska senast åtta veckor före årsmötet ha samtal
                med ordförande, styrelseledamöter och revisorer, vars
                mandatperiod löper ut.
              </p>
              <p>
                Valberedningen ska pröva kandidater som föreslagits av
                röstberättigad medlem senast fyra veckor före årsmötet. Därefter
                får röstberättigad medlem inte föreslå nya kandidater.{" "}
              </p>
            </section>
            <hr className="motion" />
            <h4 className="motion">Paragraf 15 och 17</h4>
            <section className="mb-6">
              <p>
                Ett förtydligande av hur valberedningen presenterar sin analys
                ska göras. Dessutom krav på närvaro för kandidater då
                nomineringsprocessen har förändrats så att såväl valberedning
                och medlemmar får möjlighet att ställa frågor till kandidaterna.
              </p>
              <p>
                Vi föreslår:{" "}
                <span className="has-text-weight-bold uline">
                  Att fet understruken text
                </span>{" "}
                i § 15 och 17 läggs till i stadgarna.
              </p>
            </section>

            <section className="times mb-6">
              <h5>ÅRSMÖTE</h5>
              <h6>§ 15 Tid och kallelse</h6>
              <p>
                Årsmötet är föreningens högsta beslutande organ. Det hålls i
                Gävle kommun senast fyra månader efter avslutat verksamhetsår.
              </p>
              <p>
                Kallelse till mötet ska utfärdas av styrelsen minst 60 dagar
                före mötet via hemsidan och annonser i lokalpressen. Av
                kallelsen ska framgå när motioner ska vara inkomna. En
                ytterligare kallelse utfärdas på samma sätt senast 14 dagar före
                mötet. Den anslås också tillsammans med dagordningen för mötet
                på föreningens kansli. Om det finns förslag om stadgeändring
                eller annan fråga av väsentlig betydelse för föreningen eller
                dess medlemmar, så ska det framgå av kallelsen. Av denna ska
                också framgå var möteshandlingarna finns tillgängliga.
              </p>
              <p className="has-text-weight-bold uline">
                Valberedningens förslag på styrelsemedlemmar samt revisorer
                skall finnas tillgängliga på hemsidan och på kansliet senast
                fyra veckor innan årsmötet. Kandidaterna skall även presenteras
                på hemsidan, tillsammans med valberedningens analys, vid samma
                tidpunkt.
              </p>
              <p>
                En vecka före mötet ska följande handlingar finnas tillgängliga
                för medlemmarna: Verksamhets‐ och förvaltningsberättelse,
                revisorernas berättelser, valberedningens förslag,
                verksamhetsplan med budget, styrelsens förslag samt inkomna
                motioner med styrelsens yttranden över dem.
              </p>
              <h6>§ 17 Ärenden vid årsmötet (dagordning)</h6>
              <p>
                Vid årsmötet ska följande frågor behandlas och protokollföras:
              </p>
              <ol>
                <li>Fastställande av röstlängd för mötet</li>
                <li>Fråga om mötets behöriga utlysande</li>
                <li>Fastställande av föredragningslista </li>
                <li>Val av ordförande och sekreterare för mötet </li>
                <li>Val av protokolljusterare och rösträknare </li>
                <li>
                  Styrelsens verksamhetsberättelse för det senaste
                  verksamhetsåret{" "}
                </li>
                <li>
                  Styrelsens förvaltningsberättelse för det senaste
                  räkenskapsåret{" "}
                </li>
                <li>
                  Revisorernas berättelse över styrelsens förvaltning under det
                  senaste verksamhets/räkenskapsåret{" "}
                </li>
                <li>
                  Fråga om ansvarsfrihet för styrelsen för den tid revisionen
                  avser{" "}
                </li>
                <li>Fastställande av medlemsavgifter </li>
                <li>
                  Fastställande av verksamhetsplan samt behandling av budget för
                  det kommande verksamhets/räkenskapsåret{" "}
                </li>
                <li>
                  Behandling av styrelsens förslag av i rätt tid inkomna
                  motioner.{" "}
                </li>
                <li>Val av </li>
                <ol type="a">
                  <li>ordförande för en tid av ett år </li>
                  <li>
                    övriga ledamöter i styrelsen växelvis för en period av två
                    år{" "}
                  </li>
                  <li>två revisorer jämte suppleant för en tid av ett år </li>
                  <li>
                    valberedning. Ordförande väljs på en tid av två år samt
                    övriga ledamöter växelvis för en period om två år{" "}
                  </li>
                </ol>
                <li>Övriga frågor</li>
              </ol>
              <p className="has-text-weight-bold uline">
                Styrelse eller revisorskandidater skall finnas tillgängliga vid
                årsmötet (fysisk eller digitalt) för att svara på medlemmarnas
                frågor. Vid laga förfall kan årsmötet ge dispens från detta med
                majoritetsbeslut.
              </p>{" "}
              <p>
                Beslut i fråga av större ekonomisk betydelse för föreningen
                eller medlemmarna eller ändring av stadgarna får inte fattas, om
                inte frågan funnits med i kallelsen till mötet.
              </p>
            </section>

            <section>
              <p>
                Allt detta för att transparens, dialog samt föreningsdemokrati
                ska bli bättre.
              </p>
              <p>Jonas Sundqvist medlem 6857 </p>
              <p>Paul Eriksson ständig medlem 167 </p>
              <p>Micke Petterson ständig medlem 10004 </p>
              <p>Henrik Nordström medlem 6752 </p>
              <p>Jon Pierre ständig medlem 1967 </p>
              <p>Dan Ekholm medlem 11164</p>
              <p>Håkan Fahlstedt ständig medlem 7926 </p>
              <p>Torbjörn Risve medlem 15323</p>
              <p>Stefan Olsson medlem 41103</p>
            </section>
          </div>
        </article>
      </div>
    </Layout>
  );
}
