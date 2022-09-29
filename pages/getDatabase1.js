import { Fragment } from "react";
import { useEffect, useState } from "react";

// "/api/hello"

export default function getDatabase1() {
  const [databaseInfo, setDatabaseInfo] = useState("Info");
  useEffect(() => {
    fetch("/api/storeData")
      .then((response) => response.json())
      .then((dataObtenido) => {
        console.log(dataObtenido);
        setDatabaseInfo(dataObtenido[0].respuesta);
      });
  }, []);

  return (
    <Fragment>
      <div>{databaseInfo}</div>
    </Fragment>
  );
}
