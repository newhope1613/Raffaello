import CheckResultModal from "../../CheckResultModal/CheckResultModal";

const NoProduct = () => {
  return (
    <div>
      <CheckResultModal
        image="X.svg"
        text={
          <>
            Ой, кажется, что <br /> в вашем чеке
            <br /> нет продукта.
          </>
        }
      />
    </div>
  );
};

export default NoProduct;
