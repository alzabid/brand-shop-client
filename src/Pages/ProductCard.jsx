/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({product,}) => {
    const {_id, name, brand, price, photo, rating, category } =
      product;

      
    return (
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center ">
              <h2 className="card-title"> {brand}</h2>
              <div className="badge badge-accent">{category}</div>
            </div>
            <h2 className="card-title">{name}</h2>
            <p>Price: {price} TK</p>
            <p >Rating: {rating}</p>
            <div className="card-actions flex justify-between ">
              <Link to={`/update/${_id}`}>
                <button className="btn btn-sm btn-outline">Update</button>
              </Link>
              <Link to={`/details/${_id}`}>
                <button className="btn btn-sm btn-outline">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;