import styles from "./CheckResultModal.module.css";

type CheckResultProps = React.HTMLAttributes<HTMLDivElement> & {
  image: string;
  text: React.ReactNode;
  button?: boolean;
};

const CheckResultModal: React.FC<CheckResultProps> = ({
  children,
  image,
  text,
  button = true,
  ...props
}) => {
  return (
    <div className={styles.wrapped}>
      <div className={styles.modal} {...props}>
        <div className={styles.svg}>
          <img src="close.svg" alt="" />
        </div>
        <div className={styles.text}>
          <img src={image} alt="" />
          <p>{text}</p>
        </div>
        <div>
          {button && <button className={styles.button}>Повторить</button>}
        </div>
      </div>
    </div>
  );
};

export default CheckResultModal;
