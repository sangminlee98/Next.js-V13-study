import Counter from "@/components/Counter";
import styles from "./page.module.css";

export default function Home() {
  console.log("안녕 - 서버");
  return (
    <>
      <h1>홈페이지다!</h1>
      <Counter />
    </>
  );
}
