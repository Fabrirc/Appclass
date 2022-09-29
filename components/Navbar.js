import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Link href="/">Counter</Link>
      <Link href="/meme">Meme</Link>
      <Link href="/data">Data</Link>
      <Link href="/create">Create</Link>
      <Link href="/database">Database</Link>
      <Link href="/getDatabase1">Get Database1</Link>
      <Link href="/addDatabase1">Add Database1</Link>
      <Link href="/addDatabase2">Add Database2</Link>
      <Link href="/getDatabase2">Get Database2</Link>
    </div>
  );
}
