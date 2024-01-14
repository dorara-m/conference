import Section from "../components/section/section";

export default function Venue() {
  return (
    <div className="venue">
      <h1 className="hidden">Venue</h1>
      <Section heading="Venue">
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
