import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sorting from "./components/Sorting";
import PositionBlock from "./components/PositionBlock";

function App() {
  const dishArray = [
    { title: "Набор 'Плотный обед'", price: 1500, image: "/img/set_1.jpg" },
    { title: "Набор 'Ассортимент'", price: 1000, image: "/img/set_2.jpg" },
    { title: "Филадельфия", price: 600, image: "/img/set_3.jpg" },
  ];
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sorting />
          </div>
          <h2 className="content__title">Все меню</h2>
          <div className="content__items">
            {dishArray.map((elem) => (
              <PositionBlock
                title={elem.title}
                price={elem.price}
                imageSource={elem.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
