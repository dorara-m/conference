import "./header.scss";
import { menuList } from "../../utils/menuList.js";

export default function Header(props) {
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
