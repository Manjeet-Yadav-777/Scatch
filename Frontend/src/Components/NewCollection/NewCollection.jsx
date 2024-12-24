import React, { useContext } from "react";
import new_collections from "../Assets/new_collections";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const NewCollection = () => {
  const { products } = useContext(ShopContext);

  const lastEight = products.slice(-8);

  return (
    <div className="popular flex flex-col items-center gap-[10px] mb-[100px]">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        NEW COLLECTIONS
      </h1>
      <hr className="w-[200px] h-[160px] rounded-[10px] bg-[#252525]" />

      <div className="collections px-[120px] mt-[50px] gap-[30px] flex flex-wrap">
        {lastEight.map((item, i) => {
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

export default NewCollection;
