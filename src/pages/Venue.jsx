import PageHeader from "../components/pageHeader/pageHeader";
import Section from "../components/section/section";

export default function Venue() {
  return (
    <div className="venue">
      <PageHeader heading="Venue" />
      <Section>
        <div className="imageList">
          <div>
            <img src="/venue/pic_campus_map01.jpg" alt="" />
          </div>
          <div>
            <img src="/venue/img_01.jpg" alt="" />
          </div>
          <div>
            <img src="/venue/img_03.jpg" alt="" />
          </div>
          <div>
            <img src="/venue/img_07.jpg" alt="" />
          </div>
          <div>
            <img src="/venue/report_01.jpg" alt="" />
          </div>
        </div>
      </Section>
    </div>
  );
}
