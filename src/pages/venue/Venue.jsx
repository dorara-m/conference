import PageHeader from "../../components/pageHeader/pageHeader";
import "./venue.scss";

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
        <div className="venue_items">
          <div className="venue_item">
            <h2>Lecture Hall</h2>
            <div className="venue_text">November Hall 2F (Small hall)</div>
            <div className="venue_img">
              <img src="/venue/img01.jpg" alt="" />
            </div>
          </div>
          <div className="venue_item">
            <h2>Posters</h2>
            <div className="venue_text">BLOSSOM CAFÉ 3F</div>
            <div className="venue_img">
              <img src="/venue/img07.jpg" alt="" />
            </div>
          </div>
          <div className="venue_item">
            <h2>Cafes and Restaurant</h2>
            <ul>
              <li>
                <div className="venue_text">Academic theater 1F, 2F, 3F</div>
                <div className="venue_img">
                  <img src="/venue/img03.jpg" alt="" />
                </div>
              </li>
              <li>
                <div className="venue_text">Restaurant and Bakery Cafe</div>
                <div className="venue_img">
                  <img src="/venue/report01.jpg" alt="" />
                </div>
              </li>
            </ul>
          </div>
          <div className="venue_item">
            <h2>Campus Map</h2>
            <div className="venue_img">
              <img src="/venue/pic_campus_map01.jpg" alt="" />
            </div>
          </div>
        </div>
        <ul className="venue_links">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <div className="venue_links_title">{link.name}</div>
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
