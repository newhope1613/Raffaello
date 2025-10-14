import WinnerModal from "../../WinnerModal/WinnerModal";

const Meloman = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <WinnerModal
        prize="сертификат Meloman"
        image="Meloman.png"
        buttonText="Получить приз"
        text="Чтобы получить его – перейдите в личный кабинет."
      />
    </div>
  );
};

export default Meloman;
