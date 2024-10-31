import { IProduct } from "@/types";
import React from "react";

const ProductDetail: React.FC<IProduct> = ({name, image, description,  stock, price}) => {
    return (
        <div>
            <img src={image} alt="product image" />
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Price ${price}</p>
            <p>Stock {stock}</p>
        </div>
    )
}

export default ProductDetail