import WinnerModal from "../../WinnerModal/WinnerModal";

const HalfPrize = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <WinnerModal
        prize="1 часть от (Название приза)."
        image="halfPrize.png"
        buttonText="Загрузить чек"
        text="Продолжайте играть, чтобы собрать его полностью!"
      />
    </div>
  );
};

export default HalfPrize;
