import Memelist from "../components/Memelist";
import styles from "../styles/getDatabase.module.css";
import { Fragment, useEffect, useState } from "react";

let meme = {
  img: "https://i.imgflip.com/30b1gx.jpg",
  textTop: "Text Top",
  textBottom: "Text Bottom",
};

export default function getDatabase2() {
  const [databaseInfo, setDatabaseInfo] = useState([meme]);
  useEffect(() => {
    fetch("/api/storeData")
      .then((response) => response.json())
      .then((dataObtenido) => {
        setDatabaseInfo(dataObtenido);
      });
  }, []);

  return (
    <Fragment>
      <div className={styles.memeGrid}>
        {databaseInfo.map((element) => (
          <div style={{ position: "relative" }}>
            <Memelist
              img={element.img}
              textTop={element.textTop}
              textBottom={element.textBottom}
            ></Memelist>
          </div>
        ))}
      </div>
    </Fragment>
    // Explicar por que database info necesita un valor inicial (is loading)
    // Ternary operator
    // Function organization
  );
}
