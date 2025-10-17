import Card from "../../Card/Card";
import { Button } from "../../Button/Button";
import styles from "./CheckRegistrationModal.module.css";
import { useState } from "react";
import type { CardType } from "../../../utils/types";
import Modal from "../../ModalComponent/Modal";

const CheckRegistrationModal = ({ onClose }: CardType) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      console.log("Selected file:", file);
    }
  };

  const handleClick = () => {
    console.log("Upload clicked");
  };

  return (
    <div className={styles.container}>
      <Modal onClose={onClose}>
        <Card title="Загрузить чек" onClose={onClose}>
          <div className={styles.fileInputContainer}>
            <label htmlFor="fileInput" className={styles.fileInputLabel}>
              <input
                type="text"
                className={styles.fileInput}
                value={fileName}
                readOnly
              />
              <div className={styles.uploadIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="28"
                  viewBox="0 0 44 41"
                  fill="none"
                >
                  <path
                    d="M34.303 22.405c.234.252.416.547.536.87.12.322.176.665.163 1.008a2.68 2.68 0 0 1-.235.994 2.68 2.68 0 0 1-.598.828 2.68 2.68 0 0 1-.999.536 2.68 2.68 0 0 1-1.008.163 2.68 2.68 0 0 1-.994-.235 2.68 2.68 0 0 1-.829-.598l-6.238-6.683v18.636a2.63 2.63 0 0 1-5.262 0V19.29l-6.24 6.682a2.68 2.68 0 0 1-.828.598 2.68 2.68 0 0 1-.994.235 2.68 2.68 0 0 1-1.008-.163 2.68 2.68 0 0 1-.999-.536 2.68 2.68 0 0 1-.598-.828 2.68 2.68 0 0 1-.235-.994c-.013-.344.043-.686.163-1.009.12-.322.302-.618.537-.869l10.779-11.543a2.66 2.66 0 0 1 1.33-.667c.344-.012.686.043 1.008.163.322.12.618.302.87.537l10.779 11.543z"
                    fill="white"
                  />
                  <path
                    d="M5.248 12.55a2.63 2.63 0 0 1-5.247-.001V6.826A6.82 6.82 0 0 1 6.822.005h29.572a6.82 6.82 0 0 1 6.82 6.821V12.55a2.63 2.63 0 0 1-5.246.001V6.826a1.57 1.57 0 0 0-1.572-1.574H6.822A1.57 1.57 0 0 0 5.248 6.826v5.724z"
                    fill="white"
                  />
                </svg>
              </div>
            </label>
            <input
              id="fileInput"
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
              className={styles.hiddenFileInput}
            />
          </div>
          <span>
            Формат: jpg, png <br /> Размер: до 5 Мб
          </span>
          <div className={styles.button}>
            <Button
              variant="primary"
              onClick={handleClick}
              pad="0.8rem 2.4rem"
              fs="1.5rem"
              type="submit"
            >
              ЗАГРУЗИТЬ
            </Button>
          </div>
        </Card>
      </Modal>
    </div>
  );
};

export default CheckRegistrationModal;
