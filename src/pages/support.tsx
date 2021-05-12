import React from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Support() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <article>
          <header>
            <h1 className="title is-2 mb-5">Stötta vårat arbete</h1>
          </header>
          <div className="content">
            <div className="mb-5">
              Här kan du visa ditt stöd för vårat arbete med att renovera Brynäs
              IF
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd4YSwuQ7y_i0CImQ6OuATdqjwW-TTWJs4V2pxvUkConTcaCg/viewform?usp=sf_link"
              target="_blank"
            >
              Fyll i detta formulär
            </a>
            {/* <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd4YSwuQ7y_i0CImQ6OuATdqjwW-TTWJs4V2pxvUkConTcaCg/viewform?embedded=true"
              width="640"
              height="696"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Läser in …
            </iframe> */}
            <table className="table mt-6">
              <thead>
                <tr>
                  <th>Namn</th>
                  <th>Medlem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Håkan Fahlstedt</td>
                  <td>Ständig 7926</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </Layout>
  );
}
