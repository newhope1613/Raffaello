import { useNavigate } from "react-router-dom";
import { Button } from "../../../Components/Button/Button";
import styles from "./MainPage.module.css";
import { useState } from "react";
import Authorization from "../../../Components/Modals/Authorization/Authorization";
import Registration from "../../../Components/Modals/Registration/Registration";
import api from "../../../http/api";
import type { AuthType, RegistrType } from "../../../utils/types";

const mangoAndLeaves = [
  ...Array(4).fill("/Decor/leafe.png"),
  ...Array(2).fill("/Decor/mango.png"),
];

const imagePartOne = [
  "/Prizes/speakers.png",
  "/Prizes/freedom.png",
  "/Prizes/headphones.png",
];

const imagePartTwo = [
  "/Prizes/melomanPrize.png",
  "/Prizes/raincoat.png",
  "/Prizes/Balance to phone.png",
];

const imagePartThree = [
  "/Prizes/umbrella.png",
  "/Prizes/camera.png",
  "/Prizes/T-shirt.png",
];

const allPrizes = [...imagePartOne, ...imagePartTwo, ...imagePartThree];

const MainPage = () => {
  const navigate = useNavigate();
  const [authorizationModal, setAuthorizationModal] = useState(false);
  const [registrationModal, setRegistrationModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [authData, setAuthData] = useState<AuthType>({
    phone: "",
    password: "",
  });
  const [regData, setRegData] = useState<RegistrType>({
    fullname: "",
    phone: "",
    password: "",
    checkbox: false,
  });
  const [isFading, setIsFading] = useState(false);

  const changeCollage = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 3) % allPrizes.length);
      setIsFading(false);
    }, 400);
  };

  const handleAuthorization = async (formData: AuthType) => {
    try {
      setAuthData(formData);

      const { phone, password } = formData;
      const auth = await api.post("/user.php?action=login", {
        phone,
        password,
      });

      console.log("Успешная авторизация:", auth.data);
      return auth;
    } catch (e) {
      console.error("Ошибка при авторизации:", e);
    }
  };

  const handleRegistration = async (formData: RegistrType) => {
    try {
      setRegData(formData);

      const { phone, password, fullname } = formData;
      const auth = await api.post("/user.php?action=register", {
        fullname,
        phone,
        password,
      });
      console.log(auth);
      return auth;
    } catch (e) {
      console.error("Ошибка при авторизации:", e);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.headerLogo}>
        <img src="/logo.svg" alt="logo" className={styles.headerLogoImg} />
      </header>

      <div className={styles.authorizationContainerPosition}>
        <div className={styles.authorizationContainer}>
          <button
            className={styles.button}
            onClick={() => setAuthorizationModal(true)}
          >
            Войти
          </button>
          <span className={styles.button}>|</span>
          <button
            className={styles.button}
            onClick={() => setRegistrationModal(true)}
          >
            Регистрация
          </button>
        </div>
      </div>

      <section className={styles.amazingBrightContainer}>
        <div className={styles.amazingBright}>
          <div className={styles.amazingBrightLogo}>
            <img src="amazingBright.png" alt="Amazing bright" />
          </div>
          <div className={styles.amazingBrightCheckIn}>
            <div className={styles.amazingBrightButton}>
              <Button fw={400} onClick={() => setRegistrationModal(true)}>
                Загрузить чек
              </Button>
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
        <div>
          <button className={styles.arrowOne} onClick={() => changeCollage()}>
            <img src="arrow.svg" alt="arrow" />
          </button>
          <button className={styles.arrowTwo} onClick={() => changeCollage()}>
            <img src="arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className={styles.winPrizeMangoAndLeaves}>
          {mangoAndLeaves.map((elem, index) => {
            return <img key={index} src={elem} alt="Картинки" />;
          })}
        </div>
        <div className={styles.winPrizesImages}>
          <img src="Win Prizes.png" alt="Win Prizes" />
          {allPrizes
            .slice(index, index + 3)
            .concat(
              allPrizes.slice(0, Math.max(0, index + 3 - allPrizes.length))
            )
            .map((img, index) => {
              return (
                <img
                  key={index}
                  src={img}
                  alt="картинки"
                  className={isFading ? styles.hide : ""}
                />
              );
            })}
        </div>

        <div className={styles.winPrizeButtonPosition}>
          <Button fw={400} onClick={() => setRegistrationModal(true)}>
            загрузить чек
          </Button>
          <p style={{ fontSize: "1.8rem" }}>
            Сроки акции:{" "}
            <span className={styles.span}>3 ноября – 30 ноября 2025</span>
          </p>
        </div>
      </section>

      {authorizationModal && (
        <Authorization
          onClose={() => setAuthorizationModal(false)}
          onSubmit={(data) => {
            handleAuthorization(data);
            setAuthorizationModal(false);
          }}
        />
      )}
      {registrationModal && (
        <Registration
          onClose={() => setRegistrationModal(false)}
          onSubmit={(data) => {
            handleRegistration(data);
            setRegistrationModal(false);
          }}
        />
      )}
    </div>
  );
};

export default MainPage;
