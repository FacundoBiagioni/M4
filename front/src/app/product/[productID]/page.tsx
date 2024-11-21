import React from "react";
import ProductDetail from "@/views/ProductView/ProductDetail/ProductDetail";
import { getProductsById } from "@/helpers/products.helpers";


const Detail:React.FC<{params: {productID: string}}> = async ({params}) => {
    const product = await getProductsById(params.productID);
    console.log(product)
    return (
        <ProductDetail {...product} />
    )

}

export default Detail