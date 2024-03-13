import { CardContainer } from "./CardStyle";
import { ButtonCardDelete } from "./CardStyle";

const Card = ({ value, description, cardId, setCardList, type }) => {
  const removeCardFromUl = (cardId) => {
    if (confirm("Você deseja mesmo excluir esse valor?")) {
      setCardList((cardList) =>
        cardList.filter((element) => element.id !== cardId)
      );
    }
  };
  return (
    <CardContainer type={type}>
      <div className="TypeTitle">
        <h2 className="text-style-title-3">{description}</h2>
        <p className="text-style-body">{type}</p>
      </div>
      <div className="ValueButton">
        <p className="text-style-body">R${value}</p>
        <ButtonCardDelete
          className="text-delete-button"
          onClick={() => removeCardFromUl(cardId)}
        >
          Excluir
        </ButtonCardDelete>
      </div>
    </CardContainer>
  );
};

export default Card;
