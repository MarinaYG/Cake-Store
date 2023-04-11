import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="Link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes.img.data.attributes.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes.img2.data.attributes.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <div>
          <h2>{item?.attributes.title}</h2>
          <h3>${item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
