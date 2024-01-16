import styles from "./header.module.scss";
import { menuList } from "../../utils/menuList.js";

export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          <div className={styles.img}>
            <img src="/gyroid-logo.png" alt="" />
          </div>
          <div className={styles.head}>Gyroid is everywhere</div>
          <div className={styles.sub}>Alan Schoen 100th birth anniversary</div>
        </a>
        <div className={styles.menu}>
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
