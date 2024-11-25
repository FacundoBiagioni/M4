import { IUserOrder } from "@/types"

interface IOrderCardProps {
    order: IUserOrder
}

const OrderCard: React.FC<IOrderCardProps> = ({ order }) => {
  return (
        <div key={order.id} className="bg-customColorSecondary p-3 m-2 text-center">
          <p>Purchase id: {order.id}</p>
          <p>Status: {order.status.toLocaleUpperCase()}</p>
          <p>{new Date(order.date)?.toLocaleDateString()}</p>
          <p>
            {order.products.length}{" "}
            {order.products.length === 1 ? "product" : "products"}
          </p>
        </div>
  )
}

export default OrderCard
