import Card from "./Card";
import React from "react";
import useFetch from "./useFetch";

const FeaturedProduct = () => {
  const { data, loading, error } = useFetch("/products?populate=*"); //add populate for image
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "sth wrong"
          : loading
          ? "loading"
          : data.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedProduct;
