import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.burger}>
        <div className={styles.sticks}></div>
        <div className={styles.sticks}></div>
        <div className={styles.sticks}></div>
      </div>
      <div className={styles.changeLanguage}>
        <button className={styles.button}>RUS</button>
        {" | "}
        <button className={styles.button}> KAZ</button>
      </div>
    </div>
  );
};

export default Header;
