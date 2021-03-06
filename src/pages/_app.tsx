import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "bulma/css/bulma.css";
import "../../public/styles/site.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
