import React from "react";
import ProductDetail from "@/views/ProductDetail/ProductDetail";


const Detail:React.FC<{params: {productID: string}}> = ({params}) => {
    return (
        <ProductDetail />
    )

}

export default Detail