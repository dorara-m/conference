import "./header.scss";

export default function Header(props) {
  const menuList = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Program",
      link: "/program",
    },
    {
      name: "Abstract<br/>Submission",
      link: "/abstract",
    },
    {
      name: "Registration &<br/>Accomodation",
      link: "/registration",
    },
    {
      name: "Venue",
      link: "/venue",
    },
    {
      name: "More",
      link: "/more",
    },
  ];

  return (
    <>
      <header className="header">
        <a href="/" className="header_logo">
          <div className="header_logo_img">
            <img src="/gyroid-logo.png" alt="" />
          </div>
          <div className="header_logo_head">Gyroid is everywhere</div>
          <div className="header_logo_sub">
            Alan Schoen 100th birth anniversary
          </div>
        </a>
        <div className="header_menu">
          <ul>
            {menuList.map((menu, index) => {
              return (
                <li key={index}>
                  <a
                    href={menu.link}
                    dangerouslySetInnerHTML={{ __html: menu.name }}
                  ></a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
