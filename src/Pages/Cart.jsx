import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { useState } from "react";
import Swal from "sweetalert2";

const Cart = () => {
  const cartData = useLoaderData();
  const [products, setProducts] = useState(cartData);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-rose.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              const remaining = products.filter((x) => x._id !== _id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-10 lg:px-28 py-10">
        {products.map((element) => (
          <CartCard
            key={element._id}
            element={element}
            products={products}
            setProducts={setProducts}
            handleDelete={handleDelete}
          ></CartCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
