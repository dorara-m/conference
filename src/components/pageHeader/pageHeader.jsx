import styles from "./pageHeader.module.scss";

export default function pageHeader(props) {
  return (
    <div className={`${styles.pageHeader} js-pageHeader`}>
      <div className="container">
        <h1>{props.heading}</h1>
      </div>
    </div>
  );
}
