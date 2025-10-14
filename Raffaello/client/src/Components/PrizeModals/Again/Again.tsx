// import { useNavigate } from "react-router-dom";
import WinnerModal from "../../WinnerModal/WinnerModal";
import Balance from "../Balance/Balance";

const Again = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <WinnerModal
        prize="еще три попытки."
        image="candies.png"
        buttonText="сыграть ещё раз"
      />
      <Balance />
    </div>
  );
};

export default Again;
