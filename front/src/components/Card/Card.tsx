import { IProduct } from "@/types"
import React from "react"

const Card:React.FC<IProduct> = ({image, name, price}) => {
    return (
        <div>
            <img src={image} alt={`${name} product image`} />
            <h1>{name}</h1>
            <p>Price: ${price}</p>
        </div>
    )
}

export default Card