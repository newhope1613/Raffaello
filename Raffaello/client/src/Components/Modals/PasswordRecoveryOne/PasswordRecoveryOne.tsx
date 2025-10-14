import { useForm } from "react-hook-form";
import Card from "../../Card/Card";
import { Button } from "../../Button/Button";
import styles from "./PasswordRecoveryOne.module.css";

type FormData = {
  phone: string;
};

const PasswordRecoveryOne = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <div className={styles.container}>
      <Card title="Восстановление пароля">
        <form className={styles.form}>
          <label htmlFor="phone"></label>
          <input
            type="text"
            id="phone"
            {...register("phone", { required: true })}
            className={styles.input}
            placeholder="+7 (000) 000 00 00"
          />
          {errors.phone && <span>*Это поле обязательное</span>}
        </form>
        <span>
          Код восстановления пароля будет выслан
          <br /> СМС сообщением на Ваш номер.
        </span>
        <div className={styles.button}>
          <Button variant="primary">ВОССТАНОВИТЬ ПАРОЛЬ</Button>
          <button className={styles.buttonFooter}>Назад</button>
        </div>
      </Card>
    </div>
  );
};

export default PasswordRecoveryOne;
