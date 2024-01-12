import "./reset.scss";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header_logo">
          <div className="header_logo_img">
            <img src="/gyroid-logo.png" alt="" />
          </div>
          <div className="header_logo_head">Gyroid is everywhere</div>
          <div className="header_logo_sub">
            Alan Schoen 100th birth anniversary
          </div>
        </div>
        <div className="header_menu">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Program</a>
            </li>
            <li>
              <a href="">
                Abstract
                <br />
                Submission
              </a>
            </li>
            <li>
              <a href="">
                Registration &<br />
                Accomodation
              </a>
            </li>
            <li>
              <a href="">Venue</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </ul>
        </div>
      </header>
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

export default App;
