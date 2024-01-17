import PageHeader from "../components/pageHeader/pageHeader";
import Section from "../components/section/section";
import TextList from "../components/textList/textList";

export default function Program() {
  return (
    <div className="Program">
      <PageHeader heading="Program" />
      <Section heading="Speakers">
        <Section heading="Tutorial lectures" h3>
          <TextList list={["Randall Kamien (UPENN)", "Stephen Hyde (ANU)"]} />
        </Section>
        <Section heading="Discussion Leader" h3>
          <TextList list={["Gerd Schröder‐Turk (Murdoch)"]} />
        </Section>
        <Section heading="Plenary lectures" h3>
          <TextList
            list={[
              "Ulrich Wiesner (Cornell)",
              "Gregory Grason (UMASS)",
              "Myfanwy Evans (Potsdam)",
              // "Not yet confirmed. Matthias Saba (Adolphe Merkle Institute)",
            ]}
          />
        </Section>
        <Section heading="Invited speakers" h3>
          <TextList
            list={[
              "Xiangbing Zeng (Sheffield)",
              "Takahiro Ichikawa (TUAT)",
              "Kunio Awaga (Nagoya)",
              "Łucja Kowlewska (Warsaw)",
              "Vinodkumar Saranathan (Krea)",
              "Philipp Schönhöfer (Michigan)",
              "Justin Llandro (Sumitomo Chemical)",
              // "Not yet confirmed. Justin Llandro (Tohoku)",
            ]}
          />
        </Section>
      </Section>
    </div>
  );
}
