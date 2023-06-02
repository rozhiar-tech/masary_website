import "../styles/index.scss";
import "../../public/assets/css/custome.css";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
