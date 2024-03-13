import Card from "../Card/Card.jsx";
import { Cardcontainer } from "./ContainerCard.js";

const ulContainer = ({ list, setCardList }) => {
  return (
    <Cardcontainer>
      <h2 className="text-style-title-3">Resumo financeiro</h2>
      {list.length === 0 ? (
        <p className="text-style-title-2">Você ainda não possui nenhum lançamento</p>
      ) : (
        list.map((element) => (
          <Card 
            type={element.type}
            cardId={element.id}
            setCardList={setCardList}
            key={element.id}
            description={element.description}
            value={element.value}
          />
        ))
      )}
    </Cardcontainer>
  );
};

export default ulContainer;
