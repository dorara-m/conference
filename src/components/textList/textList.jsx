import styles from "./textList.module.scss";

export default function pageHeader(props) {
  return (
    <ul className={styles.list}>
      {props.list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}
