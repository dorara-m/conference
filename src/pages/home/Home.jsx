import "./Home.scss";

export default function Home() {
  return (
    <>
      <div className="Home">
        <div className="container">
          <div className="textArea">
            <h1>Gyroid is everywhere</h1>
            <div className="subText">
              Alan Schoen
              <br />
              100th birth anniversary
            </div>
            <dl>
              <dt>Date</dt>
              <dd>November 19-22, 2024</dd>
              <dt>Venue</dt>
              <dd>Kindai University</dd>
              <dt>Organizers</dt>
              <dd>
                <ul>
                  <li>Toyota Riken</li>
                  <li>Kindai University</li>
                </ul>
              </dd>
              <dt>Contact</dt>
              <dd>
                <a href="mailto:dotera@phys.kindai.ac.jp">
                  dotera@phys.kindai.ac.jp
                </a>
              </dd>
            </dl>
          </div>
          <div className="imgArea">
            <div className="img01">
              <img src="/teacher.png" alt="" />
            </div>
            <div className="img02">
              <img src="/gyroid.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="contact">
        <div className="container">
          <h2>Contact</h2>
          <a href="mailto:dotera@phys.kindai.ac.jp">dotera@phys.kindai.ac.jp</a>
        </div>
      </div> */}
    </>
  );
}
