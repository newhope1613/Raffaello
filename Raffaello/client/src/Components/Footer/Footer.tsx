import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTexts}>
        <button className={styles.button}>Правила акций</button>
        <button className={styles.button}>Политика cookie</button>
        <button className={styles.button}>Юридические аспекты</button>
        <button className={styles.button}>Политика конфиденциальности</button>
      </div>
    </div>
  );
};

export default Footer;
