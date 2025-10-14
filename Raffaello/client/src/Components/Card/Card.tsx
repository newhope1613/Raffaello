import styles from "./Card.module.css";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
};

const Card: React.FC<CardProps> = ({ children, title, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.svg}>
          <img src="close.svg" alt="" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Card;
