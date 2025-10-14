import { Button } from "../Button/Button";
import Cross from "../Cross/Cross";
import styles from "./WinnerModal.module.css";

type WinnerModalProps = React.HTMLAttributes<HTMLDivElement> & {
  prize: string;
  image: string;
  text?: string;
  stars?: boolean;
  buttonText?: string;
};

const WinnerModal: React.FC<WinnerModalProps> = ({
  children,
  prize,
  stars = true,
  image,
  text,
  buttonText,
  ...props
}) => {
  return (
    <div className={styles.wrapped}>
      <div className={styles.modal} {...props}>
        <div className={styles.crossParent}>
          <Cross className={styles.cross} />
          <h1 className={styles.h1}>
            Поздравляем,
            <br /> вы победили!
          </h1>
          <p className={styles.p}>Ваш приз - {prize}</p>
          {stars && <img src="star.svg" alt="stars" />}
          <div className={styles.img}>
            <img src={image} alt="" />
          </div>
          <p className={styles.text}>{text}</p>
          <div className={styles.button}>
            {buttonText && <Button>{buttonText}</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;
