"use client"
import { getOrders } from "@/helpers/order"
import { IUserOrder } from "@/types"
import { useEffect, useState } from "react"
import OrderCard from "./OrderCard"


interface OrderListProps {
    userToken: string
}

const OrderList: React.FC<OrderListProps> = ({ userToken }) => {
  const [userOrders, setUserOrders] = useState<IUserOrder[]>([])

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrders(userToken)
      setUserOrders(orders)
    }
    fetchOrders()
  }, [userToken])


  return (
    <div>
      {userOrders.length === 0 ? (
        <p>Your order history is empty</p>
        ) : (
          userOrders.map((order) => {
            return <OrderCard key={order.id} order={order} />
          })
        )}
    </div>
  )
}

export default OrderList
