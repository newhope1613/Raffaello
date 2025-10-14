import { Button } from "../../Button/Button";
import { useForm } from "react-hook-form";
import styles from "./Registration.module.css"
import Card from "../../Card/Card";

type FormData = {
  name: string;
  phone: string;
};

const Registration = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <div className={styles.container}>
      <Card title="Регистрация">
        <form className={styles.form}>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className={styles.input}
            placeholder="ИМЯ ФАМИЛИЯ"
          />
          {errors.name && <span>*Это поле обязательное</span>}
          <label htmlFor="phone"></label>
          <input
            type="text"
            id="phone"
            {...register("phone", { required: true })}
            className={styles.input}
            placeholder="+ 7 (000) 000 00 00"
          />
          {errors.phone && <span>*Это поле обязательное</span>}
          <label htmlFor="agreement" className={styles.checkbox}>
            <input type="checkbox" id="agreement" />Я согласен с{" "}
            <span>правилами участия</span> в акции
            <br /> и на <span>обработку персональных данных.</span>
          </label>
          <div className={styles.button}>
            <Button variant="primary">Зарегестрироваться</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Registration;
