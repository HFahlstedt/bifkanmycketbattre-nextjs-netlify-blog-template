import React from "react";
import Layout from "../components/Layout";
import { LinkedIn } from "../components/LinkedIn";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function HansaInfo() {
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
                  <img src="/images/hansa.png" alt="[Hans-Göran Karlsson]" />
                </figure>
              </div>
              <div className="column">
                <header>
                  <h1 className="title is-3 mb-2">Hans-Göran Karlsson</h1>
                </header>
                <p>Ledamot</p>
                <LinkedIn link="https://www.linkedin.com/in/hans-g%C3%B6ran-karlsson" />
              </div>
            </div>
            <p>
              Mitt namn är Hans-Göran Karlsson men kallas ofta Hansa. Jag är
              gift och har tre barn samt 5st. barnbarn. Jag och min fru bor i
              Gävle och brukar säga att jag är född Brynäsare. Växte upp ett
              stenkast från Brynäsvallen där det blev spel i Arsenalligan samt
              Brynäs pojklag i hockey. 1976/1977 var jag med och spelade i
              juniorlaget som tog Brynäs första SM-guld. Efter juniortiden
              spelade jag ett antal år i Skutskärs A-lag. Eftersom jag varit
              aktiv både inom affärs- och hockeyvärlden har jag ett stort
              nätverk inom båda dessa världar som kan vara nyttig för Brynäs IF.
            </p>
            <p>
              Min yrkesverksamma bakgrund har handlat mycket om försäljning och
              marknadsföring. Som 29 åring fick jag mitt första
              försäljningschefsjobb inom internationella transporter. Men 2001
              förvärvade jag mitt första företag och drev sedan tre bolag fram
              till 2008 då Brynäs IF rekryterade mig som KD/VD. Jag har stor
              erfarenhet av leda både små och medelstora organisationer och
              framför allt med förändringsarbete. Har ofta gått in
              organisationer med ekonomiska problem och vänt de till lyckosamma
              organisationer. Alltid genom att jobba tillsammans med mina
              medarbetare. Mitt mantra är att människorna i en organisation är
              de som skapar resultaten. Därför är mina ledord, delaktighet,
              ansvar och ärlighet.
            </p>
            <p>
              En viktig hörnsten för Brynäs är att utveckla unga hockeytalanger
              för att åter bli ledande inom Svensk Hockey. Vi måste skapa
              ekonomiska muskler för att kunna utveckla detta arbete. Att få
              fram unga hungriga och duktiga talanger är en mycket viktig del
              för att bygga våra elitlag på herr- och damsidan
            </p>
            <p>
              Det är också viktigt att våra samarbetspartners, medlemmar och
              fans känner engagemang och delaktighet i Brynäs IF. I närtid
              handlar det om att återbygga förtroende för vårt kära Brynäs IF.
              Men samtidig lägga en strategi och plan för de närmaste 5 åren som
              ska säkerställa både ekonomi och sportsliga framgångar på alla
              plan. En annan viktig faktor är att vi blir en attraktiv
              arbetsgivare som skapar en arbetsmiljö där man har roligt på
              jobbet och drivs av att skapa resultat. Det är dags för en
              förändring i Brynäs IF där vi ska gå från negativa rubriker till
              en vinnande och positiv kultur
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
