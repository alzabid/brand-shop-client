// import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ads from "../Components/Ads";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { brand } = useParams();

  useEffect(() => {
    fetch(`https://brand-shop-server-rose.vercel.app/product/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [brand]);
  return (
    <div>
      <Ads></Ads>
      {!products.length > 0 ? (
        <>
          <div className="h-[80vh] flex justify-center items-center">
            <h1 className="text-4xl font-semibold">NO DATA FOUND</h1>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-10 lg:px-28 py-10">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                products={products}
                setProducts={setProducts}
              ></ProductCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
