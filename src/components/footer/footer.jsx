import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.copyright}>© 2024 Tomonari Dotera</div>
        <div className={styles.logo}>
          <img src="/gyroid.png" alt="" />
        </div>
      </div>
    </footer>
  );
}
