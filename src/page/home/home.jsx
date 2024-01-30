import React from "react";
import "./home.css";
import imgThree from "../../images/image 3.png";
import { MdEdit } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <home>
        <div className="container">
          <div className="home">
            <h1>Home</h1>
            <div className="blocks">
              <img src={imgThree} alt="" />
              <div className="text-icons">
                <div className="text-name">
                  <h1>shawarma</h1>
                  <p>5$</p>
                </div>
                <div className="icons">
                  <MdEdit
                    style={{
                      background: "green",
                      color: "white",
                      fontSize: "30px",
                      borderRadius: "5px",
                    }}
                  />
                  <FaShoppingBasket
                    style={{
                      background: "yellow",
                      color: "white",
                      fontSize: "30px",
                      margin: "0 10px",
                      borderRadius: "5px",
                    }}
                  />
                  <MdDelete
                    style={{
                      background: "red",
                      color: "white",
                      fontSize: "30px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </home>
    </div>
  );
};

export default Home;
