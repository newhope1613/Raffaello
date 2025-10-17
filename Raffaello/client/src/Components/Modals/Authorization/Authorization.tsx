import Card from "../../Card/Card";
import styles from "./Authorization.module.css";
import { Button } from "../../Button/Button";
import { useForm } from "react-hook-form";
import type { AuthType, CardType } from "../../../utils/types";
import Modal from "../../ModalComponent/Modal";

type AuthorizationType = CardType & {
  onSubmit: (data: AuthType) => void;
};

const Authorization = ({ onClose, onSubmit }: AuthorizationType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>();
  return (
    <div className={styles.container}>
      <Modal onClose={onClose}>
        <Card title="Авторизация" onClose={onClose}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {/* <label htmlFor="phone"></label> */}
            <input
              type="text"
              id="phone"
              {...register("phone", { required: true })}
              className={styles.input}
              placeholder="+7 (000) 000 00 00"
            />
            {errors.phone && <span>*Это поле обязательное</span>}
            {/* <label htmlFor="password"></label> */}
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className={styles.input}
              placeholder="ПАРОЛЬ"
            />
            {errors.password && <span>*Это поле обязательное</span>}
            <button className={styles.buttonRecovery}>
              Восстановить пароль
            </button>
            <div className={styles.buttonFooter}>
              <Button
                variant="primary"
                pad="0.8rem 2.4rem"
                fs="1.5rem"
                type="submit"
              >
                Войти
              </Button>
              <button className={styles.button}>Зарегистрироваться</button>
            </div>
          </form>
        </Card>
      </Modal>
    </div>
  );
};

export default Authorization;
