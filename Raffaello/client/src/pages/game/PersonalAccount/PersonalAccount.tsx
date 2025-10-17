// import { useNavigate } from "react-router-dom";
import { Button } from "../../../Components/Button/Button";
import styles from "./PersonalAccount.module.css";
import CheckRegistrationModal from "../../../Components/Modals/CheckRegistrationModal/CheckRegistrationModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const candies = Array(12).fill("candie.png");

const leaves = Array(4).fill("/Decor/leafe.png");
const mango = "/Decor/mango.png";
const coconut = Array(2).fill("/Decor/coconut.png");
const wholeMango = "/Decor/wholeMango.png";

const decor = [...leaves, mango, ...coconut, wholeMango];

const PersonalAccount = () => {
  const navigate = useNavigate();
  const [checkModal, setCheckModal] = useState(false);
  return (
    <div className={styles.wrapped}>
      <div className={styles.decor}>
        {decor.map((elem) => {
          return <img src={elem} alt="декор" />;
        })}
      </div>
      <header className={styles.headerLogo}>
        <img src="/logo.svg" alt="logo" className={styles.headerLogoImg} />
      </header>

      <div>
        <div className={styles.personalAccount}>
          <button className={styles.button} onClick={() => navigate("/main")}>
            Главная страница
          </button>
          <span className={styles.button}>|</span>
          <button className={styles.button}>Личный кабинет</button>
        </div>
      </div>

      <div className={styles.greeting}>
        <img src="Greeting.png" alt="Приветствия" />
        <Button fw={400} onClick={() => setCheckModal(true)}>
          загрузит чек
        </Button>
      </div>

      <div className={styles.myPrizes}>
        <img src="subhead.png" alt="Мои призы" />
        <div className={styles.prizes}>
          <button>
            <img src="arrow.svg" alt="Стрелка" />
          </button>
          <img
            src="/Prizes/speakers.png"
            alt="Колонки"
            style={{ width: "284px", height: "319px" }}
          />
          <img
            src="halfheadphones.png"
            alt="половина приза"
            style={{ width: "392px", height: "423px" }}
          />
          <img
            src="/Prizes/freedom.png"
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
        <div className={styles.drawCandie}>
          {candies.map((elem, index) => {
            return <img key={index} src={elem} alt="конфеты" />;
          })}
        </div>
      </div>

      <div className={styles.winPrizeButtonPosition}>
        <Button fw={400} onClick={() => setCheckModal(true)}>
          загрузить чек
        </Button>
        <p style={{ fontSize: "1.8rem" }}>
          Сроки акции:{" "}
          <span className={styles.span}>3 ноября – 30 ноября 2025</span>
        </p>
      </div>

      {checkModal && (
        <CheckRegistrationModal onClose={() => setCheckModal(false)} />
      )}
    </div>
  );
};

export default PersonalAccount;
