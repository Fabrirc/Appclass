import { useRef, useState } from "react";

export default function Input() {
  const [post1, setPost1] = useState("Aqui tu post");
  const [post2, setPost2] = useState("Aqui tu post");

  const elementoInput1 = useRef();
  const elementoInput2 = useRef();

  function postear1() {
    setPost1(elementoInput1.current.value);
  }

  function postear2() {
    setPost2(elementoInput2.current.value);
  }

  return (
    <div>
      <input ref={elementoInput1}></input>
      <button value={post1} onClick={postear1}>
        Post
      </button>
      <input ref={elementoInput2}></input>
      <button value={post2} onClick={postear2}>
        Post
      </button>
    </div>
  );
}
