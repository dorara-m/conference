import { menuList } from "../../utils/menuList";
import PageHeader from "../pageHeader/pageHeader";
import styles from "./Layout.module.scss";

export default function Layout(props) {
  // console.log(window.location.pathname);
  const currentPageTitle = menuList.find(
    (menu) => menu.path === window.location.pathname
  ).name;
  return (
    <div className={styles.layout}>
      <PageHeader heading={currentPageTitle} />
      {props.children}
    </div>
  );
}
