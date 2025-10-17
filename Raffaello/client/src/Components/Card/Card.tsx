import styles from "./Card.module.css";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  onClose: () => void;
};

const Card: React.FC<CardProps> = ({ children, title, onClose, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <button className={styles.svg} type="button" onClick={onClose}>
          <img src="close.svg" alt="close" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Card;
