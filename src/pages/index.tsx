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
          <div className="content">
            <p>
              Vi bygger förnärvarande om vår sida. Vid frågor använd
              kontaktformuläret.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
