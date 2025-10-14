import Card from "../../Card/Card";
import { Button } from "../../Button/Button";
import styles from "./PasswordRecoveryTwo.module.css";
import { useState } from "react";

const PasswordRecoveryTwo = () => {
  const [number, setNumber] = useState(Array(6).fill(""));

  return (
    <div className={styles.container}>
      <Card title="Восстановление пароля">
        <div className={styles.inputs}>
          {number.map((elem) => (
            <input
              type="text"
              key={elem}
              maxLength={1}
              className={styles.input}
            />
          ))}
        </div>
        <span>
          На Ваш номер было выслано СМС
          <br /> с кодом-паролем
        </span>
        <div className={styles.buttonFooter}>
          <Button variant="primary">Продолжить</Button>
          <button className={styles.button}>Назад</button>
        </div>
      </Card>
    </div>
  );
};

export default PasswordRecoveryTwo;
