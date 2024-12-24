import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import Navbar from "../Components/Navbar/Navbar";

const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);

  return (
    <>
      <Navbar />

      <div className="shop-category mt-10">
        <img
          className=" block my-30px mx-auto w-[82%]"
          src={props.banner}
          alt=""
        />

        <div className="shopcategory-indexshort mt-10 flex mx-[170px] justify-between items-center">
          <p>
            <span className="font-semibold">Showing 1-12</span> Out of 36
            products
          </p>

          <div className="shopcategory-sort py-[5px] px-[30px] border-[1px] border-[#888] rounded-[40px]">
            Sort by <img src={dropdown} alt="" />
          </div>
        </div>

        <div className="shopcategory-products my-[20px] mx-[170px] flex flex-wrap gap-5 justify-between">
          {products.map((item, i) => {
            if (props.category === item.category) {
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
            } else {
              return null;
            }
          })}
        </div>

        <div className="loadmore flex justify-center items-center my-[70px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium cursor-pointer">
          Explore More
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
