

import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const BrandList = () => {
  const brands = useLoaderData(); 
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-10 lg:px-52 py-10">
      {brands.map((element) => (
        <BrandCard key={element.id} element={element}></BrandCard>
      ))}
    </div>
  );
};

export default BrandList;
