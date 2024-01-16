import clsx from "clsx";
import styles from "./section.module.scss";

export default function Section(props) {
  return (
    <section
      className={clsx({
        [styles.section]: true,
        [styles.bg]: props.hasBg,
        [styles.h3]: props.h3,
      })}
    >
      {!props.h3 ? (
        <div className="container">
          <h2>{props.heading}</h2>
          {props.children}
        </div>
      ) : (
        <>
          <h3>{props.heading}</h3>
          {props.children}
        </>
      )}
    </section>
  );
}
