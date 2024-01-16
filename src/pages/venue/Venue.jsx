import PageHeader from "../../components/pageHeader/pageHeader";
import styles from "./Venue.module.scss";

export default function Venue() {
  const links = [
    {
      name: "Campus Location",
      link: "https://www.kindai.ac.jp/english/visit/",
    },
    {
      name: "Route",
      link: "https://www.kindai.ac.jp/english/files/visit/visit.pdf",
    },
    {
      name: "Kindai University",
      link: "https://www.kindai.ac.jp/english/",
    },
    {
      name: "Osaka",
      link: "https://www.japan.travel/en/destinations/kansai/osaka/",
    },
  ];

  return (
    <div className="venue">
      <PageHeader heading="Venue" />
      <div className="container">
        <div className={styles.items}>
          <div className={styles.item}>
            <h2>Lecture Hall</h2>
            <div className={styles.text}>November Hall 2F (Small hall)</div>
            <div className={styles.img}>
              <img src="/venue/img01.jpg" alt="" />
            </div>
          </div>
          <div className={styles.item}>
            <h2>Posters</h2>
            <div className={styles.text}>BLOSSOM CAFÉ 3F</div>
            <div className={styles.img}>
              <img src="/venue/img07.jpg" alt="" />
            </div>
          </div>
          <div className={styles.item}>
            <h2>Cafes and Restaurant</h2>
            <ul>
              <li>
                <div className={styles.text}>Academic theater 1F, 2F, 3F</div>
                <div className={styles.img}>
                  <img src="/venue/img03.jpg" alt="" />
                </div>
              </li>
              <li>
                <div className={styles.text}>Restaurant and Bakery Cafe</div>
                <div className={styles.img}>
                  <img src="/venue/report01.jpg" alt="" />
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h2>Campus Map</h2>
            <div className={styles.img}>
              <img src="/venue/pic_campus_map01.jpg" alt="" />
            </div>
          </div>
        </div>
        <ul className={styles.links}>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <div className={styles.title}>{link.name}</div>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  Visit Link
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
