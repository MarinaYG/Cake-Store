import React from "react";
import "./ComStyles.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/img/Chocolate.jpg" alt="" />
        </div>
        <div className="row">
          <img src="/img/Original Mille crepe cake 4.jpg" alt="" />
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/Strawberry shortcake 3.jpg" alt="" />
        </div>
      </div>
      <div className="col colLarge">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/Chocolate mousse cake1.jpg" alt="" />
            </div>
          </div>
          <div className="row">
            <img src="/img/Strawberry shortcake 1.jpg" alt="" />
          </div>
        </div>

        <div className="row">
          <img src="/img/Strawberry shortcake.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
