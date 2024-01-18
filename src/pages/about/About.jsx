import Layout from "../../components/Layout/Layout";
import Section from "../../components/section/section";
import TextList from "../../components/textList/textList";

import styles from "./About.module.scss";

export default function About() {
  return (
    <Layout>
      <Section heading="Greeting">
        <p className="paragraph">
          Alan Hugh Schoen was an American physicist and computer scientist
          renowned for his discovery of the gyroid, an infinitely connected
          triply periodic minimal surface. He was born on December 11, 1924, in
          Mount Vernon, New York, and unfortunately, he passed away on July 26,
          2023, in Carbondale, Illinois, United States.
        </p>
        <p className="paragraph">
          In commemoration of his 100th birth anniversary, we are organizing a
          symposium entitled “Alan Schoen 100th birth anniversary – Gyroid is
          everywhere” from November 19 to November 22, 2024, at Kindai
          University, Osaka, Japan. This symposium is made possible through the
          support of Toyota Riken, The Simons Foundation, and Kindai University.
        </p>
        <div className="paragraph">
          <p>
            The international symposium aims to achieve the following three
            objectives:
          </p>
          <ol>
            <li>
              Discover gyroid in nature and create unconventional materials,
              exemplified by molecular gyroids.
            </li>
            <li>
              Renovate existing soft gyroid research with unprecedented material
              design principles.
            </li>
            <li>
              Discover the foundational principles (geometry and topology) and
              novel functionalities of gyroids, leading to a rapid
              transformation and innovation in the material science of gyroids.
            </li>
          </ol>
        </div>
        <p className="paragraph">
          By setting these three goals – creation of gyroid substances,
          renovation of traditional gyroid research, and transformation of
          gyroid science – the symposium seeks to bring together researchers who
          align with these objectives. The symposium serves as a starting point
          to foster future gyroid science. As one of the strategies for
          strategic international collaboration, the event aims to gather
          top-tier theoretical researchers in the field of natural sciences
          along with a diverse group of experimental researchers in science and
          engineering. Encouraging interaction, promoting interdisciplinary
          collaboration, and facilitating reorganization of international
          collaboration, the symposium aims to transform and advance gyroid
          research worldwide into a new dimension of comprehensive research
          areas.
        </p>
      </Section>
      <Section heading="Organization" hasBg>
        <Section heading="International Advisors" h3>
          <TextList
            list={[
              "Stephen Hyde (ANU)",
              "Randall Kamien (UPENN)",
              "Yushu Matsushita (Toyota Riken)",
              "Gerd Schröder‐Turk (Murdoch)",
            ]}
          />
        </Section>
        <Section heading="Local organizers" h3>
          <TextList
            list={[
              "Tomonari Dotera (Kindai) chair",
              "Atsushi Takano (Nagoya)",
              "Takahiro Ichikawa (TUAT)",
              "Akiko Sugahara (Kindai)",
            ]}
          />
        </Section>
      </Section>
      <Section heading="Support">
        <ul className={styles.support}>
          <li>
            <img src="/support/logo01.png" alt="" />
          </li>
          <li>
            <img src="/support/logo02.png" alt="" />
          </li>
          <li>
            <img src="/support/logo03.png" alt="" />
          </li>
        </ul>
      </Section>
      <Section heading="Abstract Submission Due" hasBg>
        <p className="paragraph">
          <strong>July 19, 2024</strong>
        </p>
      </Section>
      <Section heading="Contact">
        <p className="paragraph">
          <strong>gyroidiseverywhere@gmail.com</strong>
        </p>
      </Section>
    </Layout>
  );
}
