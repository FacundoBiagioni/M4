import React from "react"
import Card from "@/components/Card/Card"
import { getProductsDB } from "@/helpers/products.helpers";
import Link from "next/link";

const IpadList = async () => {

    const products = await getProductsDB(3);
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {products?.map((product) => {
                return (
                    <Link key={product.id} href={`/product/${product.id}`}>
                    <Card {...product} />
                    </Link>
                ) 
            })}
        </div>
    );
};

export default IpadList