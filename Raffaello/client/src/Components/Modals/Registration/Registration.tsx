import { Button } from "../../Button/Button";
import { useForm } from "react-hook-form";
import styles from "./Registration.module.css";
import Card from "../../Card/Card";
import type { CardType, RegistrType } from "../../../utils/types";
import Modal from "../../ModalComponent/Modal";
import { useState } from "react";

type RegistrationType = CardType & {
  onSubmit: (data: RegistrType) => void;
};

const Registration = ({ onClose, onSubmit }: RegistrationType) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrType>();

  return (
    <div className={styles.container}>
      <Modal onClose={onClose}>
        <Card title="Регистрация" onClose={onClose}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {/* <label htmlFor="name"></label> */}
            <input
              type="text"
              id="name"
              {...register("fullname", { required: true })}
              className={styles.input}
              placeholder="ИМЯ ФАМИЛИЯ"
            />
            {errors.fullname && <span>*Это поле обязательное</span>}
            {/* <label htmlFor="phone"></label> */}
            <input
              type="text"
              id="phone"
              {...register("phone", { required: true })}
              className={styles.input}
              placeholder="+ 7 (000) 000 00 00"
            />
            {errors.phone && <span>*Это поле обязательное</span>}

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: true })}
              className={styles.input}
              placeholder="ПАРОЛЬ"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={styles.showButton}
            >
              {showPassword ? "Скрыть" : "Показать"}
            </button>
            {errors.password && <span>*Это поле обязательное</span>}

            <label htmlFor="agreement" className={styles.checkbox}>
              <input
                type="checkbox"
                id="agreement"
                {...register("checkbox", { required: true })}
              />
              Я согласен с <span>правилами участия</span> в акции
              <br /> и на <span>обработку персональных данных.</span>
            </label>
            {errors.checkbox && <span>*Это поле обязательное</span>}

            <div className={styles.button}>
              <Button
                variant="primary"
                pad="0.8rem 2.4rem"
                fs="1.5rem"
                type="submit"
              >
                Зарегестрироваться
              </Button>
            </div>
          </form>
        </Card>
      </Modal>
    </div>
  );
};

export default Registration;
