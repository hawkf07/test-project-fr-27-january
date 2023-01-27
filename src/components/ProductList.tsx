import { FC } from "react";
import { Product } from "../types";
import { Card } from "./Card";
const ProductList: FC<Product> = ({
  brand,
  id,
  category,
  description,
  discountPercentage,
  images,
  price,
  rating,
  stock,
  thumbnail,
  title,
}) => {
  return (
    <Card>
      <div className="flex  items-center justify-between  p-1 flex-col md:flex-row">
        <div className=" flex gap-10 items-center ">
          <p>{id}</p>
          <img src={thumbnail} className="rounded-lg w-24" alt={title} />
          <div>
            <h1 className="font-bold"> {title}</h1>
            <h2 className="font-semibold text-gray-500">{category}</h2>
          </div>
        </div>
        <div>
          <p>Total Sales:</p>
          <h1 className="text-blue-500 font-semibold">{stock}</h1>
        </div>
      </div>
    </Card>
  );
};

export { ProductList };
