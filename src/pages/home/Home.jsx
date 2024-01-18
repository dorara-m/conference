import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className="container">
          <div className={styles.textArea}>
            <h1>Gyroid is everywhere</h1>
            <div className={styles.subTitle}>
              Alan Schoen
              <br />
              100th birth anniversary
            </div>
            <dl>
              <dt>Date</dt>
              <dd>November 19-22, 2024</dd>
              <dt>Venue</dt>
              <dd>Kindai University</dd>
              <dt>Organizers</dt>
              <dd>
                <ul>
                  <li>Toyota Riken</li>
                  <li>Kindai University</li>
                </ul>
              </dd>
            </dl>
          </div>
          <div className={styles.imgArea}>
            <div className={styles.img01}>
              <img src="/teacher.png" alt="" />
            </div>
            <div className={styles.img02}>
              <img src="/gyroid.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
