import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="tp" />
        </div>

        <div className="title">
          <h5 style={{color:"black"}}>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>
        <div className="price">
          <h5 style={{color:"black"}}>₹{price}</h5>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
