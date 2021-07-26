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
              Tack för stödet! Nu börjar det verkliga arbetet.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}
