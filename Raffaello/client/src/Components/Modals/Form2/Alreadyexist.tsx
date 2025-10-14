import CheckResultModal from "../../CheckResultModal/CheckResultModal";

const AlreadyExist = () => {
  return (
    <div>
      <CheckResultModal
        image="X.svg"
        text={
          <>
            Упс, чек с таким номером уже зарегистрирован или номер введен
            неверно.
          </>
        }
      />
    </div>
  );
};

export default AlreadyExist;
