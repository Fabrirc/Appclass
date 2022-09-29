import { Fragment } from "react";
import { useEffect, useState } from "react";

// "/api/hello"

export default function addDatabase1() {
  //   const [databaseInfo, setDatabaseInfo] = useState("Info");
  useEffect(() => {
    fetch("/api/storeData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pregunta: "pregunta test",
        respuesta: "respuesta test",
      }),
    });
    //   .then((response) => response.json())
    //   .then((dataObtenido) => {
    //     setDatabaseInfo(dataObtenido[0].respuesta);
    //   }
    //   );
  }, []);

  return (
    <Fragment>
      <div>lorem</div>
    </Fragment>
  );
}
