import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="item w-[250px] hover:scale-[1.05] transition-[0.6s]">
        <img
          className="h-[350px] object-cover"
          src={props.image}
          alt=""
          onClick={() => {
            scrollTo(0, 0, 0);
          }}
        />
        <p className="my-[6px] mx-0">{props.name}</p>

        <div className="item-prices flex gap-[20px]">
          <div className="item-price-new text-[#374151] text-[18px] font-semibold">
            ₹{props.new_price}
          </div>

          <div className="item-price-old text-[#8c8c8c] text-[18px] font-medium line-through">
            ₹{props.old_price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
