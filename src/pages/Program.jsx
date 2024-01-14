import Section from "../components/section/section";

export default function Program() {
  return (
    <div className="Program">
      <h1 className="hidden">Program</h1>
      <Section heading="Speakers">
        <Section heading="Tutorial lectures" h3>
          <ul>
            <li>Randall Kamien (UPENN)</li>
            <li>Stephen Hyde (ANU)</li>
          </ul>
        </Section>
        <Section heading="??" h3>
          <ul>
            <li>Gerd Schröder‐Turk (Murdoch)</li>
          </ul>
        </Section>
        <Section heading="Plenary lectures" h3>
          <ul>
            <li>Ulrich Wiesner (Cornell)</li>
            <li>Gregory Grason (UMASS)</li>
            <li>Myfanwy Evans (Potsdam)</li>
            {/* <li>Not yet confirmed. Matthias Saba (Adolphe Merkle Institute)</li> */}
          </ul>
        </Section>
        <Section heading="Invited speakers" h3>
          <ul>
            <li>Xiangbing Zeng (Sheffield)</li>
            <li>Takahiro Ichikawa (TUAT)</li>
            <li>Kunio Awaga (Nagoya)</li>
            <li>Łucja Kowlewska (Warsaw)</li>
            <li>Vinodkumar Saranathan (Krea)</li>
            <li>Philipp Schönhöfer (Michigan)</li>
            {/* <li>Not yet confirmed. Justin Llandro (Tohoku)</li> */}
          </ul>
        </Section>
      </Section>
    </div>
  );
}
