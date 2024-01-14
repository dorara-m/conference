import Section from "../components/section/section";

export default function About() {
  return (
    <div className="About">
      <h1 className="hidden">About</h1>
      <Section heading="Greeting">
        <p>
          Alan Hugh Schoen was an American physicist and computer scientist
          renowned for his discovery of the gyroid, an infinitely connected
          triply periodic minimal surface. He was born on December 11, 1924, in
          Mount Vernon, New York, and unfortunately, he passed away on July 26,
          2023, in Carbondale, Illinois, United States.
        </p>
        <p>
          In commemoration of his 100th birth anniversary, we are organizing a
          symposium entitled “Alan Schoen 100th birth anniversary – Gyroid is
          everywhere” from November 19 to November 22, 2024, at Kindai
          University, Osaka, Japan. This symposium is made possible through the
          support of Toyota Riken, The Simons Foundation, and Kindai University
          and Kindai University.
        </p>
        <p>
          The international symposium aims to achieve the following three
          objectives:
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
        </p>
        <p>
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
          <ul>
            <li>Stephen T. Hyde (ANU)</li>
            <li>Randall D. Kamien (UPENN)</li>
            <li>Yushu Matsuhita (Toyota Riken)</li>
            <li>Gerd Schröder‐Turk (Murdoch)</li>
          </ul>
        </Section>
        <Section heading="Local organizers" h3>
          <ul>
            <li>Tomonari Dotera (Kindai) chair</li>
            <li>Atsushi Takano (Nagoya)</li>
            <li>Takahiro Ichikawa (TUAT)</li>
            <li>Akiko Sugahara (Kindai)</li>
          </ul>
        </Section>
      </Section>
      <Section heading="Support"></Section>
      <Section heading="Important dates" hasBg>
        <p>
          1st circular <strong>2023/12/24</strong>
        </p>
      </Section>
    </div>
  );
}
