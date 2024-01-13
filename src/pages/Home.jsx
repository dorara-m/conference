import Header from "../components/header/header";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <main>
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
      </main>
    </div>
  );
}
