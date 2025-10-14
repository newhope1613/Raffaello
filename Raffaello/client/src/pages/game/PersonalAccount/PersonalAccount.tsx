import { Button } from "../../../Components/Button/Button";
import styles from "./PersonalAccount.module.css";

const PersonalAccount = () => {
  return (
    <div className={styles.wrapped}>
      {/* <header className={styles.headerLogo}>
        <img src="/logo.svg" alt="logo" className={styles.headerLogoImg} />
      </header> */}

      <div>
        <div className={styles.personalAccount}>
          <button className={styles.button}>Главная страница</button>
          <p className={styles.button}>|</p>
          <button className={styles.button}>Личный кабинет</button>
        </div>
      </div>

      <div className={styles.greeting}>
        <img src="Greeting.png" alt="Приветствия" />
        <Button>загрузит чек</Button>
      </div>

      <div className={styles.myPrizes}>
        <img src="subhead.png" alt="Мои призы" />
        <div className={styles.prizes}>
          <button>
            <img src="arrow.svg" alt="Стрелка" />
          </button>
          <img
            src="speakers.png"
            alt="Колонки"
            style={{ width: "284px", height: "319px" }}
          />
          <img
            src="halfHeadphones.png"
            alt="половина приза"
            style={{ width: "392px", height: "423px" }}
          />
          <img
            src="freedom.png"
            alt="Сертификат фридом"
            style={{ width: "375px", height: "320px" }}
          />
          <button>
            <img
              src="arrow.svg"
              alt="Стрелка"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
        </div>
      </div>

      <div className={styles.draw}>
        <img src="drawText.png" alt="Текст розыгрыша" />
        <img src="drawImage.png" alt="Конфеты" />
      </div>

      <div className={styles.winPrizeButtonPosition}>
        <Button fw={400}>загрузить чек</Button>
        <p style={{ fontSize: "1.8rem" }}>
          Сроки акции:{" "}
          <span className={styles.span}>3 ноября – 30 ноября 2025</span>
        </p>
      </div>
    </div>
  );
};

export default PersonalAccount;
