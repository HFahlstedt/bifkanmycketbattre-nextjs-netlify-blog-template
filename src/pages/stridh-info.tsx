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
                  <img src="/images/stridh.png" alt="[Jonny Stridh]" />
                </figure>
              </div>
              <div className="column">
                <header>
                  <h1 className="title is-3 mb-2">Jonny Stridh</h1>
                </header>
                <p>Ledamot</p>
              </div>
            </div>
            <p>
              Mitt namn är Jonny Stridh. Jag är 60 år och gift med Ulrika. Vi
              bor i Norrköping och har 2 vuxna och utflugna pojkar. Vi är alla
              inbitna Brynäsare och en hockeytokig familj.
            </p>
            <p>
              Jag växte upp i Hudiksvall där jag fick min tidiga
              hockeyuppfostran i Strands IF. Som 18-åring kom jag till Gävle och
              spelade 4 år med Strömsbro i div.1 innan jag 1983 fick möjligheten
              att representera Brynäs under 5 säsonger (1983–88). Jag fick då
              också äran att vara lagkapten under 3 säsonger i Sveriges finaste
              och viktigaste idrottsförening.
            </p>
            <p>
              Mitt civila arbete som konsult inom processindustri gjorde att jag
              flyttade till Norrköping 1988 och där representerade jag Vita
              Hästen i division 1 och i allsvenskan och var ytterst nära att gå
              upp i Elitserien med dem 1990.
            </p>
            <p>
              Efter avslutad spelarkarriär har jag verkat i Vita Hästen under 20
              års tid som tränare för A-laget i tre olika omgångar och som
              tränare för yngre lag alltifrån Björnligan upp till juniorerna.
              Vid tre olika sejourer som juniortränare tog jag vid två
              tillfällen upp J20 till Elit och J18 till Elit vid ett tillfälle.
              Jag vill med det säga att jag anser mig känna en hockeyförenings
              alla byggstenar. Från det lilla till det stora. Och jag tror att
              sådana erfarenheter är viktiga att ta med sig in i styrelsearbete.
              Jag anser att uttrycket ”ingen kedja är starkare än dess svagaste
              länk” också till fullo kan appliceras på en idrottsförening.
            </p>
            <p>
              Jag har också, vilket jag menar i denna situation är av yttersta
              vikt, erfarenhet av styrelsearbete. Jag var under fem år vice
              ordförande och sportsligt ansvarig i Vita Hästen. Jag hade också
              ansvar för hockey gymnasiet under några år.
            </p>
            <p>
              I mitt yrkesverksamma liv har jag lång erfarenhet av att leda
              organisationer på olika nivåer och jag har där dragit nytta av
              erfarenheterna från idrotten i mitt ledarskap. Ledarskap för mig
              handlar om att ha en tydlig struktur där alla har sin roll i
              kedjan och där klimatet är sådant att individen känner trygghet i
              sin roll. Det måste finnas öppenhet och acceptans till
              oliktänkande för att eftersträva att ta vara på det bästa hos var
              och en i sin respektive roll
            </p>
            <p>
              Ett klimat som genomsyras av öppenhet, engagemang, glädje och
              beslutsamhet. Det är det klimat jag vill uppleva i Brynäs IF.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
