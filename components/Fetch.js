import { useEffect, useState } from "react";
import { Fragment } from "react";

export default function Fetch() {
  const [string, setString] = useState("");
  const [memes, setMemes] = useState();
  const [valorI, setValorI] = useState(0);

  //poner la url como valor a la propiedad src

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((dataObtenido) => {
        setMemes(dataObtenido);
        setString(dataObtenido.data.memes[0].url);
      });
  }, []);

  // setTimeout(() => console.log(cambio), 2000);

  function suma() {
    setValorI(valorI + 1);
    setString(memes.data.memes[valorI].url);
  }

  return (
    <Fragment>
      <button onClick={suma}>Next</button>
      <img src={string} alt="image"></img>
    </Fragment>
  );
}
