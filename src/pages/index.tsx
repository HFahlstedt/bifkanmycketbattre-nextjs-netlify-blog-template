import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container content">
        <article>
          <header>
            <h1 className="title is-2 mb-5">
              Inför Brynäs medlemsmöte den 10 februari kl 19
            </h1>
          </header>
          <div className="content">
            <p>
              Det är dags för ett nytt medlemsmöte. Med drygt två och en halv
              månader kvar av verksamhetsåret börjar det dra ihop sig både
              sportsligt och ekonomiskt säsongen 21/22. Förhoppningsvis kan
              damerna gå all in och ta guldet och herrarna spurta till sig en
              plats i slutspelet.
            </p>
            <p>
              Inför medlemsmötet är vi i Brynäs Kan Bättre intresserade av den
              mer långsiktiga utvecklingen inför de kommande åren. Till exempel
              vill vi som medlemmar veta mer om hur föreningen tänker när det
              gäller hur lagen skall byggas framöver. Bilden av Brynäs som
              förening är tilltufsad sedan ett antal år tillbaka, undantaget
              utvecklingen för SDHL-laget. Föreningen behöver öka tempot i
              förändringsarbetet för att börja motsvara förväntningarna från
              både medlemmar och omvärlden. Ett bra tillfälle att göra ett
              friskt och fräscht avstamp mot framtiden är när dussinet kontrakt
              i SHL-laget går ut i april.
            </p>
            <p>
              Vad skall känneteckna Brynäs spel framöver och vilka spelare
              behöver rekryteras för att bygga ett nytt lag som kan börja
              konkurrera med topplagen i SHL? Hur fortsätter lagbygget och
              utvecklingen av egna produkter för SDHL-laget? Hur skall
              juniorverksamheten renoveras och hur får Brynäs och Gästrikland ut
              maximalt av Gästrikemodellen? Vilka samarbetspartners behövs för
              att utbilda framtidens spelare och hur behöver
              scoutingverksamheten organiseras för att kunna rekrytera rätt
              spelare till Brynäs framöver?
            </p>
            <p>
              Vi förutsätter att det finns en plan som sportcheferna Grahm och
              Alcén jobbar efter. Medlemsmötet är ett lämpligt tillfälle att
              berätta för medlemmar hur planen ser ut och vad som behöver hända
              inför säsongen 22/23!
            </p>
            <p>
              Vi vill såklart även veta hur den ekonomiska utvecklingen ser ut
              den här säsongen efter det katastrofala resultatet 20/21.
            </p>
            <p>
              I samband med det extra årsmötet i slutet på november pratade
              klubbdirektör Håkan Svedman om att det jobbas på en treårsplan för
              föreningen. Det vore ett ypperligt tillfälle att berätta mer på
              medlemsmötet om hur arbetet med den planen fortskrider.
            </p>
            <p>
              Vi hoppas att så många som möjligt av Brynäs ca 5000 medlemmar tar
              chansen att lyssna och ställa frågor på medlemsmötet. Brynäs
              behöver aktiva medlemmar för att styra mot en ljus framtid!
            </p>
            <p>Med vänlig hälsning,</p>
          </div>
          <h2 className="title is-5 mb-3 bkb">Brynäs Kan Bättre</h2>
        </article>
      </div>
    </Layout>
  );
}
