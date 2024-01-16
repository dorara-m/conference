import { menuList } from "../../utils/menuList.js";
import styles from "./spMenuList.module.scss";

export default function spMenuList() {
  const lists = [...menuList];
  lists.unshift({ name: "Home", link: "/" });

  return (
    <ul className={styles.list}>
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
  );
}
