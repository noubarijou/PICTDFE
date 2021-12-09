import { CartPlus } from "react-bootstrap-icons";

const BotaoComprar = ({preco}) => {
  return (
    <>
      <button className="fw-bold">
        <CartPlus color="black" size={16} />
        R$ {" "}
        {`${preco}`.includes(".")
          ? `${preco}`.replace(".", ",")
          : `${preco},00`}
      </button>
    </>
  );
};

export default BotaoComprar;
