import React, { useContext, useState } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [select, setSelect] = useState(null);
  const sizes = ["S", "M", "L", "XL", "XXL"];

  if (!product) {
    return <div>Product details not available.</div>;
  }

  return (
    <div className="flex mx-[40px] my-10 gap-5" key={product._id}>
      <div className="left flex gap-[17px]">
        <div className="display-img w-[568px] h-[700px]">
          <img
            className="w-full h-full object-cover"
            src={product.image}
            alt={product.name || "Product image"}
          />
        </div>
      </div>

      <div className="right flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        <div className="right-star flex gap-2">
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_dull} alt="Star rating" />
          <p>(122)</p>
        </div>

        <div className="right-prices flex gap-5">
          <div className="price-old line-through text-xl">
            ${product.old_price}
          </div>
          <div className="new-price text-xl font-semibold">
            ${product.new_price}
          </div>
        </div>

        <div className="desc">{product.description}</div>

        <div className="size">
          <h1 className="font-semibold">Select Size:</h1>
          <div className="right-size flex gap-10 mt-5 ml-2">
            {sizes.map((size) => (
              <div
                key={size}
                className={`border-black px-10 py-5 rounded-lg cursor-pointer border-[1px] bg-slate-50 ${size === select ? "bg-blue-200" : ""
                  }`}
                onClick={() => setSelect(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button
          className="bg-red-500 text-white py-5 font-semibold w-[30%]"
          onClick={() =>
            addToCart(
              product?._id,
              product?.name,
              1,
              product?.new_price,
              product?.image
            )
          }
        >
          ADD TO CART
        </button>

        <p className="category">
          <span className="font-semibold">Category: </span> Women, T-Shirt, Crop
          Top
        </p>

        <p className="tags">
          <span className="font-semibold">Tags: </span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
