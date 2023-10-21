/* eslint-disable react/prop-types */

const CartCard = ({ element, handleDelete }) => {
  const { _id, name, brand, price, photo, rating, category } = element;

  // const handleDelete = (_id) => {
  //   console.log(_id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(
  //         `https://brand-shop-server-rose.vercel.app/cart/${_id}`,
  //         {
  //           method: "DELETE",
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.deletedCount > 0) {
  //             Swal.fire(
  //               "Deleted!",
  //               "Your Product has been deleted.",
  //               "success"
  //             );
  //             const remaining = products.filter((x) => x._id !== _id);
  //             setProducts(remaining);
  //           }
  //         });
  //     }
  //   });
  // };

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
          <p>Rating: {rating}</p>
          <div className="card-actions  justify-end ">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-outline"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
