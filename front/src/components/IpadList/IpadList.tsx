import React from "react"
import Card from "@/components/Card/Card"
import ipadproducts from "@/helpers/ipadsproducts"

const IpadList = () => {
    const products = ipadproducts;
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

export default IpadList