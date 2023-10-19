import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {
  const loadedData = useLoaderData();
  const { name, brand, price, photo, details } = loadedData;

  const handleCart = () => {
    const cart = {loadedData};
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Good job!", "successfully added to cart!", "success");
        }
      });
  };

  return (
    <div className="max-w-3xl mx-6 md:mx-10 lg:mx-auto py-10">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <h2 className="card-title">Brand: {brand}</h2>
          <h2 className="card-title">Price: {price} TK</h2>
          <p className=" text-justify">{details}</p>
          <div className="card-actions justify-end">
            <button onClick={handleCart} className="btn btn-outline">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
