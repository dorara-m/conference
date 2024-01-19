import React, { useEffect, useState } from "react";
import { menuList } from "../../utils/menuList.js";
import styles from "./header.module.scss";
import clsx from "clsx";

export default function Header(props) {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置
      const scrollPos = window.scrollY;
      // ヘッダー固定する位置は、ページヘッダーの高さ - ヘッダーの高さ
      const fixedPos =
        document.querySelector(".js-pageHeader").offsetHeight -
        document.querySelector("header").offsetHeight;
      if (scrollPos >= fixedPos) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    // スクロールイベントを監視
    window.location.pathname !== "/" &&
      window.addEventListener("scroll", handleScroll);
    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={clsx({
          [styles.header]: true,
          [styles.fixed]: isFixed,
        })}
      >
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
                    href={menu.path}
                    dangerouslySetInnerHTML={{
                      __html: menu.forHeader ? menu.forHeader : menu.name,
                    }}
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
