import React from "react";
import arrow from "../Assets/breadcrum_arrow.png";

const Breadcumps = (props) => {
  const { product } = props;

  return (
    <div className="flex gap-2 ">
      Home
      <img src={arrow} alt="" />
      Shop
      <img src={arrow} alt="" />
      {product.category}
      <img src={arrow} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcumps;
