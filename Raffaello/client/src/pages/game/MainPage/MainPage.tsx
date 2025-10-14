import { Button } from "../../../Components/Button/Button";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.headerLogo}>
        <img src="/logo.svg" alt="logo" className={styles.headerLogoImg} />
      </header>

      <div className={styles.authorizationContainerPosition}>
        <div className={styles.authorizationContainer}>
          <button className={styles.button}>Войти</button>
          <p className={styles.verticalBar}>|</p>
          <button className={styles.button}>Регистрация</button>
        </div>
      </div>

      <section className={styles.amazingBrightContainer}>
        <div className={styles.amazingBright}>
          <div className={styles.amazingBrightLogo}>
            <img src="amazingBright.png" alt="Amazing bright" />
          </div>
          <div className={styles.amazingBrightCheckIn}>
            <div className={styles.amazingBrightButton}>
              <Button fw={400}>Загрузить чек</Button>
            </div>
            <ul className={styles.amazingBrightSteps}>
              <li className={styles.amazingBrightSteps}>
                <img src="1.svg" alt="" />
                <div>
                  Купи упаковку
                  <br />
                  <p className={styles.p}>
                    Raffaello <br />
                    Mango
                  </p>
                </div>
              </li>
              <li className={styles.amazingBrightSteps}>
                <img src="2.svg" alt="" />
                <div>
                  Загрузи <br />
                  чек по
                  <br />
                  <p className={styles.p}>QR-коду</p>
                </div>
              </li>
              <li className={styles.amazingBrightSteps}>
                <img src="3.svg" alt="" />
                <div>
                  Получи шанс выиграть
                  <br />
                  <p className={styles.p}>призы</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.winPrizesContainer}>
        <div className={styles.winPrizeMangoAndLeaves}>
          <img src="leafe.png" alt="Листок" />
          <img src="leafe.png" alt="Листок" />
          <img src="leafe.png" alt="Листок" />
          <img src="leafe.png" alt="Листок" />
          <img src="mango.png" alt="Манго" />
          <img src="mango.png" alt="Манго" />
        </div>
        <div className={styles.winPrizesImages}>
          <img src="Win Prizes.png" alt="Win Prizes" />
          <img src="umbrella.png" alt="Umbrella" />
          <img src="speakers.png" alt="speakers" />
          <img src="freedom.png" alt="Freedom gift" />
          <img src="headphones.png" alt="Headphones" />
          <button className={styles.arrowOne} type="button">
            <img src="arrow.svg" alt="Стрелка" />
          </button>
          <button className={styles.arrowTwo} type="button">
            <img src="arrow.svg" alt="Стрелка" />
          </button>
        </div>

        <div className={styles.winPrizeButtonPosition}>
          <Button fw={400}>загрузить чек</Button>
          <p style={{ fontSize: "1.8rem" }}>
            Сроки акции:{" "}
            <span className={styles.span}>3 ноября – 30 ноября 2025</span>
          </p>
        </div>
        
      </section>

    </div>
  );
};

export default MainPage;
