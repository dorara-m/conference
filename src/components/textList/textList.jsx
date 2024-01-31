import clsx from "clsx";
import styles from "./textList.module.scss";

export default function TextList(props) {
  return (
    <ul
      className={clsx({
        [styles.list]: true,
        [styles["-strong"]]: props.strong,
      })}
    >
      {props.list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}
