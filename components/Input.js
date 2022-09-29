import { useRef, useState } from "react";

export default function Input() {
  const [post, setPost] = useState("Aqui tu post");

  const elementoInput = useRef();

  function postear() {
    setPost(elementoInput.current.value);
  }

  return (
    <div>
      <h1>Tu input aqui</h1>
      <input ref={elementoInput}></input>
      <button value={post} onClick={postear}>
        Post
      </button>
      <h1>{post}</h1>
    </div>
  );
}
