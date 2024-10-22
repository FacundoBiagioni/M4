import React from "react"
import Card from "@/components/Card/Card"
import iphoneproducts from "@/helpers/iphoneproducts"

const IphoneList = () => {
    const products = iphoneproducts;
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
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

export default IphoneList