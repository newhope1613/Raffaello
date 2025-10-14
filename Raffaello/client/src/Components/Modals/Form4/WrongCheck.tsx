import CheckResultModal from "../../CheckResultModal/CheckResultModal";

const WrongCheck = () => {
  return (
    <div>
      <CheckResultModal
        image="X.svg"
        text={
          <>
            Упс, ваш чек невозможно прочитать. Попробуйте сфотографировать его
            так, чтобы вся информация была хорошо видна.
          </>
        }
      />
    </div>
  );
};

export default WrongCheck;
