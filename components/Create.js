import { useEffect, useState } from "react";
import { Fragment } from "react";
import { useRef } from "react";
import styles from "./Create.module.css";

export default function Create() {
  const [string, setString] = useState("");
  const [memes, setMemes] = useState();
  const [valorI, setValorI] = useState(1);
  const [post1, setPost1] = useState("Texto 1");
  const [post2, setPost2] = useState("Texto 2");

  const elementoInput1 = useRef();
  const elementoInput2 = useRef();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((dataObtenido) => {
        setMemes(dataObtenido);
        setString(dataObtenido.data.memes[0].url);
      });
  }, []);

  function suma() {
    setValorI(valorI + 1);
    console.log(valorI);
    setString(memes.data.memes[valorI].url);
  }

  function postear1() {
    setPost1(elementoInput1.current.value);
  }

  function postear2() {
    setPost2(elementoInput2.current.value);
  }

  function guardarMeme(event) {
    event.preventDefault();

    let memeData = {
      img: string,
      textTop: post1,
      textBottom: post2,
    };

    console.log(memeData);
  }

  return (
    <Fragment>
      <div className={styles.inputs}>
        <form onSubmit={guardarMeme}>
          <button>Submit Meme</button>
        </form>
        <input ref={elementoInput1}></input>
        <button value={post1} onClick={postear1}>
          Text top
        </button>
        <input ref={elementoInput2}></input>
        <button value={post2} onClick={postear2}>
          Text bottom
        </button>
      </div>
      <div className={styles.meme}>
        <button onClick={suma}>Next</button>
        <div className={styles.memeImg}>
          <img src={string} alt="image"></img>
          <div className={styles.texto1}>{post1}</div>
          <div className={styles.texto2}>{post2}</div>
        </div>
      </div>
    </Fragment>
  );
}

// 1. Arreglar a que los inputs creados
// esten dentro de form y que solo el boton submit sea
// el que triggers el event listener "onSubmit"
