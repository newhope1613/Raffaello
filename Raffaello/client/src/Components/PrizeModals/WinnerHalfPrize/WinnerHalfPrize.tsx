import Cross from "../../Cross/Cross";
import styles from "./WinnerHalfPrize.module.css";

const WinnerHalfPrize = () => {
  return (
    <div className={styles.wrapped}>
      <div className={styles.modal}>
        <div className={styles.crossParent}>
          <Cross className={styles.cross} />
          <h1 className={styles.h1}>
            Поздравляем,
            <br /> вы победили!
          </h1>
          <p className={styles.text}>
            Поздравляем, вы собрали все части (Название приза)!
          </p>
          <img src="star.svg" alt="stars" />
          <div className={styles.img}>
            <img src="path.png" alt="" />
          </div>
          <p className={styles.text}>
            В ближайшее время мы свяжемся
            <br /> с вами по указанному номеру и расскажем,
            <br /> как получить выигрыш.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WinnerHalfPrize;
