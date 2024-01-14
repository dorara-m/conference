import "./spNavi.scss";
import { menuList } from "../../utils/menuList.js";

export default function spNavi() {
  const lists = [...menuList];
  lists.unshift({ name: "Home", link: "/" });

  return (
    <div className="spNavi">
      <div className="container">
        <ul>
          {lists.map((menu, index) => {
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
    </div>
  );
}
