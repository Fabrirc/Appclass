import styles from "./Memelist.module.css";

export default function Memelist(props) {
  return (
    <div className={styles.memebox}>
      <img src={props.img} alt="image"></img>
      <div className={styles.texto1}>{props.textTop}</div>
      <div className={styles.texto2}>{props.textBottom}</div>
    </div>
  );
}
