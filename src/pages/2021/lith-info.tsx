import React from "react";
import Layout from "../../components/Layout";
import { LinkedIn } from "../../components/LinkedIn";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";

export default function LithInfo() {
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
                  <img src="/images/lith.png" alt="[Elin Lith]" />
                </figure>
              </div>
              <div className="column">
                <header>
                  <h1 className="title is-3 mb-2">Elin Lith</h1>
                </header>
                <p>Ledamot</p>
                <LinkedIn link="https://www.linkedin.com/in/elin-lith-52406a74" />
              </div>
            </div>
            <p>
              Jag heter Elin Lith, är 35 år och är Brynäsare sedan tidig
              barndom, mest tack vare min morfar som var aktiv och arbetade för
              föreningen. Som liten fick jag följa med morfar på jobbet och jag
              inspirerades av vinnarmentaliteten i den gamla Gavlerinken. Efter
              studierna vid Lunds Universitet började jag jobba för Brynäs IF
              och det blev över 10 år inom föreningen. Jag haft olika ledande
              befattningar, bland annat som souveniransvarig, försäljningschef
              publik marknad och kommunikationschef. När jag nyligen fick frågan
              om att kandidera till styrelsen var svaret tveklöst JA! Jag vill
              vara en kraft för att få föreningen på fötter igen. Jag är
              öppensinnad, positiv, envist lösningsfokuserad och övertygad om
              att nya möjligheter väntar för Brynäs IF. Jag vill bidra till att
              skapa rätt förutsättningar för att föreningen ska nå nya höjder
              och jag vill verka i en styrelse som arbetar långsiktigt, modigt
              och tillsammans med medlemmarna.
            </p>
            <p>
              Idag arbetar jag som enhetschef inom Pensionsmyndigheten och
              ansvarar för enhet med ca 100 medarbetare på olika kontor runt om
              i Sverige. Enheten ansvarar för kundservice, kommunicerar till och
              guidar pensionärer och pensionssparare. I min roll som enhetschef
              vid en myndighet har jag fått möjlighet att utveckla mina
              kunskaper och mitt engagemang för frågor inom kommunikation,
              personalutveckling och arbetsmiljö. Jag är en chef med flera års
              erfarenhet av att driva strategiska förändringsprocesser och som
              ledare är jag involverande, engagerad och jag vet att medarbetarna
              är den främsta tillgången för att nå uppsatta mål
            </p>
            <p>
              Från mina drygt 10 år som anställd inom Brynäs IF bär jag med mig
              många värdefulla erfarenheter. Jag känner väl till vilka
              förutsättningar som krävs för att arbeta med ett starkt varumärke
              som engagerar och berör människor över hela Sverige. Brynäs IF är
              för mig en förening som går framåt och vågar se långsiktigt. Under
              min tid i ledningsgruppen för Brynäs IF var jag med och arbetade
              fram konceptet den rena matchdräkten och föreningens partnerskap
              med UNICEF Sverige
            </p>
            <p>
              Om det blir aktuellt med mig som ledamot i styrelsen så vill jag
              främst engagera mig för att skapa en välfungerande organisation
              och en sund ekonomisk grund. Jag vill att kommunikationen ska
              präglas av öppenhet och inkludera medlemmar och partnerföretag,
              tillsammans ska vi arbeta med långsiktighet och med stort tålamod
              för att återuppbygga förtroendet och nå nya framgångar.
            </p>
            <p>
              Jag är född in i en familj med stort hockeyintresse, såklart
              mycket tack vare min morfar Bosse Hessel som var aktiv och
              arbetade för föreningen i princip hela sitt liv. Morfar var
              lagledare under 60- och 70-talet och sedan arbetade han vidare
              inom föreningen som kanslist och kamrer. Som liten fick jag följa
              med morfar på jobbet och inspirerades av ekonomiska uppställningar
              med ”debet och kredit”, men kanske främst av den sportsliga
              vinnarmentaliteten och gemenskapen av föreningsandan som fanns i
              den gamla Gavlerinken
            </p>
            <p>
              Jag är civilekonom och har en masterexamen från Lunds universitet,
              där jag studerade programmet Service Management. Det är en
              tvärvetenskaplig ekonomisk utbildning med stort fokus på
              kommunikation, marknadsföring och ledarskap. Under min
              utbytestermin i Barcelona valde jag att fördjupa mina studier
              ytterligare inom sport management, förändringsledning och
              kommunikation.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
