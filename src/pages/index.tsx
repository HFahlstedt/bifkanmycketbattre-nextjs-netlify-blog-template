import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import styles from "../../public/styles/content.module.css";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className={"container"}>
        <article>
          <header>
            <h1>Brynäs kan bättre</h1>
          </header>
        </article>
      </div>
      <style jsx>{`
        .container {
          display: block;
          max-width: 46rem;
          width: 100%;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
          z-index: 0;
        }
        article {
          flex: 1 0 auto;
          font-size: 1.2rem;
        }
        h1 {
          margin: 0 0 0.5rem;
          font-size: 2.25rem;
        }

        @media (min-width: 769px) {
          .container {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  );
}
