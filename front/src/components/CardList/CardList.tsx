import React from "react"
import Card from "@/components/Card/Card"
import products3d from "@/helpers/products"

const CardList = () => {
    const products = products3d;
    return (
        <div>
            {
                products &&
                    products?.map((product)  => {
                        return (
                            <Card key={product.id} {...product}/>
                        )
                    })
            }
        </div>
    )
}

export default CardList