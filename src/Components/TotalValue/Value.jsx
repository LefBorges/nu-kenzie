import { Titlestyle } from "./Value";

const value = ({ list }) => {
  return (
    <div className="Valuediv">
      <Titlestyle>
        <h2 className="text-style-title-3">Valor Total:</h2>
        <h3 className="text-color-style-title-3 ">
          {list
            .reduce(
              (oldValue, element) =>
                element.type === "Entrada"
                  ? oldValue + +element.value
                  : oldValue - +element.value,
              0
            )
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </h3>
      </Titlestyle>
      <p className="text-style-body">O valor se refere ao saldo</p>
    </div>
  );
};
export default value;
