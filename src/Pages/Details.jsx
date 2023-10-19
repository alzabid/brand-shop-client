import { useLoaderData } from "react-router-dom";

const Details = () => {
  const loadedData = useLoaderData();
  const { name, brand, price, photo, details } = loadedData;

  return (
    <div className="max-w-3xl mx-6 md:mx-10 lg:mx-auto py-10">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Brand: {brand}</h2>
          <h2 className="card-title">Price: {price} TK</h2>
          <p className=" text-justify">{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
