import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu, selectMenu } from "../redux/menuSlice";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { items } = useSelector(selectMenu);
  const getItem = React.useCallback(async () => {
    try {
      dispatch(fetchMenu(`id=${id}`));
    } catch (error) {
      console.log("ERROR", error);
      alert("Возникла непредвиденная ошибка, повторите попытку позже");
      navigate("/");
    }
  }, [dispatch, navigate, id]);
  React.useEffect(() => {
    getItem();
  }, [getItem]);
  if (items.length > 0) {
    const currentItem = items[0];
    return (
      <div className="container">
        <img
          className="dish-block__image"
          src={currentItem.image}
          alt="item_image"
        />
        <h2>{currentItem.title}</h2>
        <h4>{currentItem.price} Р</h4>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>Загрузка...</h1>
    </div>
  );
};

export default ItemDetails;
