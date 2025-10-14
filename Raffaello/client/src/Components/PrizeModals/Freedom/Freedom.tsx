import WinnerModal from "../../WinnerModal/WinnerModal";

const Freedom = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <WinnerModal
        prize="сертификат Freedom Tiсketon"
        image="FreedomTicketon.png"
        buttonText="Получить приз"
        text="Чтобы получить его – перейдите в личный кабинет."
      />
    </div>
  );
};

export default Freedom;
