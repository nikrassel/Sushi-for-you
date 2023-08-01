import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sorting from "./components/Sorting";
import PositionBlock from "./components/PositionBlock";
import menu from "./assets/menu.json";

function App() {
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
            {menu.map((elem) => (
              <PositionBlock
                title={elem.title}
                price={elem.price}
                imageSource={elem.image}
                key={elem.id}
                numberVars={elem.number ? elem.number : undefined}
                types={elem.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
