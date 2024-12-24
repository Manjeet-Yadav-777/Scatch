import React, { useContext } from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const Related = () => {
  const { products } = useContext(ShopContext);

  const women = products.filter((item) => item.category == "women");

  const womenFour = women.slice(0, 4);
  return (
    <div className="flex flex-col items-center gap-10px h-[90vh] mt-20">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        More Products
      </h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />

      <div className="flex gap-10 mt-10">
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

export default Related;
