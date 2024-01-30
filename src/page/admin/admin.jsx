import React from "react";
import "./admin.css";

const Admin = () => {
  return (
    <div>
      <body>
        <admin>
          <div className="container">
            <div className="admin">
              <h1>CREATE PRODUCT</h1>
              <div className="block">
                <div className="box">
                  <input type="text" placeholder="image URL" />
                </div>
                <div className="box">
                  <input type="text" placeholder="text URL" />
                </div>
                <div className="box">
                  <input type="text" placeholder="price URL" />
                </div>
                <button className="btn_create">CREATE</button>
              </div>
            </div>
          </div>
        </admin>
      </body>
    </div>
  );
};

export default Admin;
