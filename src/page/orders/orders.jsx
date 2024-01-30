import React from "react";
import cupp from "../../images/image 6.png";
import { useState } from "react";
import "./orders.css";

const Orders = () => {
  const [click, setclick] = useState(0);

  return (
    <div>
      <div className="orders">
        <div className="container">
          <div className="orders">
            <h1>MY ORDERS</h1>
            <div className="boxes">
              <img src={cupp} alt="" />
              <div className="text_div">
                <h2>cappuccino</h2>
                <p>10.5$</p>
              </div>
              <div className="delete_div">
                <button className="delete-btn">delete order</button>
                <div className="btn_plus">
                  <button
                    onClick={() => (click > 1 ? setclick(click - 1) : click)}
                  >
                    -
                  </button>
                  <p
                  // onClick={() => {
                  //   setclick(click + 1);
                  // }}
                  >
                    {click}x
                  </p>
                  <button
                    onClick={() => {
                      setclick(click + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
