import React from "react";
import { Link } from "react-router-dom";
import emptyCartIcon from "../../assets/img/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пуста</h2>
      <p>
        Вероятней всего, вы ещё не заказывали у нас.
        <br />
        Для того, чтобы собрать заказ, перейдите на главную страницу.
      </p>
      <img src={emptyCartIcon} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
