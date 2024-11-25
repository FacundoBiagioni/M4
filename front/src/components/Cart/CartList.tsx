"use client"

import { IProduct } from "@/types"
import CartItem from "./CartItem"

const CartList: React.FC = () => {
    const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")

    return (
    <div className="mt-8 flex flex-col gap-8">
        {cart.map((item, index) => (
            <CartItem product={item} key={`${item.id}${index}`} />
        ))}
    </div>
  )
}

export default CartList
