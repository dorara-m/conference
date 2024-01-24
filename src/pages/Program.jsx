import Layout from "../components/Layout/Layout";
import Section from "../components/section/section";
import TextList from "../components/textList/textList";

export default function Program() {
  return (
    <Layout>
      <Section heading="Speakers">
        <Section heading="Tutorial lectures" h3>
          <TextList
            list={[
              "Randall Kamien (UPENN) Materials Geometry",
              "Stephen Hyde (ANU) Triply Periodic Minimal Surfaces",
            ]}
          />
        </Section>
        <Section heading="Discussion Leader" h3>
          <TextList
            list={["Gerd Schröder‐Turk (Murdoch) Gyroids Everywhere"]}
          />
        </Section>
        <Section heading="Plenary lectures" h3>
          <TextList
            list={[
              "Myfanwy Evans (Potsdam) Topology & Geometry",
              "Gregory Grason (UMASS) Gyroid Physics",
              "Ulrich Wiesner (Cornell) Gyroid Materials",
              "Matthias Saba (Fribourg) Gyroid Photonics",
            ]}
          />
        </Section>
        <Section heading="Invited speakers" h3>
          <TextList
            list={[
              "Xiangbing Zeng (Sheffield) Liquid Crystals",
              "Takahiro Ichikawa (TUAT) Proton Conduction",
              "Kunio Awaga (Nagoya) Gyroid Molecules",
              "Philipp Schönhöfer (Michigan) Gyroid Simulation",
              "Justin Llandro (Sumitomo Chemical) Gyroid Magnetics",
              "Łucja Kowlewska (Warsaw) Cell Membranes",
              "Vinodkumar Saranathan (Krea) Gyroid Evolution",
            ]}
          />
        </Section>
      </Section>
    </Layout>
  );
}
