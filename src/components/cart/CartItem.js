import React from "react";

export default function CartItem({ item, value }) {
  const { id, img, total, title, price, count } = item;
  const { removeItem, increment, decrement } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="item"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="btn" onClick={() => decrement(id)}>
          <i className="far fa-minus-square"></i>
        </span>
        <span className="btn">{count}</span>
        <span className="btn" onClick={() => increment(id)}>
          <i className="far fa-plus-square"></i>
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2" onClick={() => removeItem(id)}>
        <i className="fas fa-trash"></i>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: $ {total}</strong>
      </div>
    </div>
  );
}
