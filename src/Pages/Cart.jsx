import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";


const Cart = () => {
    const cartData =useLoaderData()
    // console.log(cartData)
    
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-10 lg:px-28 py-10">
          {cartData.map((element) => (
            <CartCard
              key={element._id}
              element={element}
            ></CartCard>
          ))}
        </div>
      </div>
    );
};

export default Cart;