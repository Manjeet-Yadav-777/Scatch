import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcumps from "../Components/Breadcumps/Breadcumps";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Related from "../Components/RelatedProducts/Related";
import Navbar from "../Components/Navbar/Navbar";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((item) => item._id === productId);

  return (
    <div>
      <Navbar />
      <ProductDisplay product={product} />
      <Related />
    </div>
  );
};

export default Product;
