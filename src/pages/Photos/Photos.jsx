import PageHeader from "../../components/pageHeader/pageHeader";
import ImageGallery from "../../components/imageGallery/imageGallery";
import Section from "../../components/section/section";
import styles from "./Photos.module.scss";

export default function Photos() {
  return (
    <div className="Photos">
      <PageHeader heading="Photos" />
      <ImageGallery />
      <Section heading="Useful Links">
        <p className={styles.linksText}>
          ‘Shapes of Soap Films’: Triply-Periodic Minimal Surfaces (Alan H.
          Schoen)
        </p>
        <ul className={styles.links}>
          <li>
            <iframe
              src="https://www.youtube.com/embed/JulrXPr19hs?si=c8BNW3CTz93pn7CZ"
              title="part1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className={styles.linksTitle}>Part1</div>
          </li>
          <li>
            <iframe
              src="https://www.youtube.com/embed/-9bB00XShWQ?si=3qnYZeDM23dXggC7"
              title="part2"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className={styles.linksTitle}>Part2</div>
          </li>
          <li>
            <iframe
              src="https://www.youtube.com/embed/bokgQhFoMjY?si=bFfR-TBkYw_0Ht6W"
              title="Part3"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className={styles.linksTitle}>Part3</div>
          </li>
          <li>
            <iframe
              src="https://www.youtube.com/embed/3APTe-VubOI?si=KYzPSxPGYmeup97a"
              title="Part4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className={styles.linksTitle}>Part4</div>
          </li>
        </ul>
      </Section>
    </div>
  );
}
