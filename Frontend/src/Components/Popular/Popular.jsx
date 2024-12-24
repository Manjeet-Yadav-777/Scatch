import React, { useContext } from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const Popular = () => {
  const { products } = useContext(ShopContext);

  const women = products.filter((item) => item.category == "women");

  const womenFour = women.slice(0, 4);

  return (
    <div className="popular flex flex-col items-center gap-[10px] h-[90vh]">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        POOULAR IN WOMEN
      </h1>
      <hr className="w-[200px] h-[160px] rounded-[10px] bg-[#252525]" />

      <div className="popular-item mt-[50px] flex flex-wrap gap-[50px]">
        {womenFour.map((item, i) => {
          return (
            <Item
              key={i}
              id={item._id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
