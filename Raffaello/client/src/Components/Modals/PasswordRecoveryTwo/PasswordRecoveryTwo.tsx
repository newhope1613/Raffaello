import Card from "../../Card/Card";
import { Button } from "../../Button/Button";
import styles from "./PasswordRecoveryTwo.module.css";
import { useState } from "react";
import type { CardType } from "../../../utils/types";
import Modal from "../../ModalComponent/Modal";

const PasswordRecoveryTwo = ({ onClose }: CardType) => {
  const [number] = useState(Array(6).fill(""));

  return (
    <div className={styles.container}>
      <Modal onClose={onClose}>
        <Card title="Восстановление пароля" onClose={onClose}>
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
      </Modal>
    </div>
  );
};

export default PasswordRecoveryTwo;
