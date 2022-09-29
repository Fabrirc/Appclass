import "../styles/globals.css";
import { Fragment } from "react";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
