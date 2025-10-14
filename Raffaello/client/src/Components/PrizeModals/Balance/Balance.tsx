import WinnerModal from "../../WinnerModal/WinnerModal";

const Balance = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <WinnerModal
        prize="… тг на баланс."
        image="монетки.png"
        buttonText="На главную"
        text="Деньги будут зачислены на баланс номера,
        указанного при регистрации, в течение суток."
        stars={false}
      />
    </div>
  );
};

export default Balance;
