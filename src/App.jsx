import Header from "./Components/Head/Head.jsx";
import Form from "./Components/Form/Form.jsx";
import Values from "./Components/TotalValue/Value.jsx";
import Container from "./Components/Container/ContainerCard.jsx";
import { GlobalStyle } from "./style/globalStyle.js";
import { useState } from "react";

function App() {
  const [list, settList] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <div className="leftContainer">
          <Form list={list} settList={settList} />
          {list.length > 0 ? <Values list={list} /> : <></>}
        </div>
        <Container list={list} setCardList={settList} />
      </main>
    </>
  );
}

export default App;
