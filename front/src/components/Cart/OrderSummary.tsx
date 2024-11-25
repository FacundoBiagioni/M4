"use client"
import { IProduct, IUserSession } from "@/types"
import Link from "next/link"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { createOrder } from "@/helpers/order"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"


const OrderSummary: React.FC = () => {
  const [userSession, setUserSession] = useState<IUserSession | null>(null)
  const router = useRouter()

  useEffect(() => {
    const dataCookie = Cookies.get("userData")
    if (dataCookie) {
        const parsedData: IUserSession = JSON.parse(dataCookie)
        setUserSession(parsedData)
        } else {
            setUserSession(null)
        }
  }, [])

  const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")

  const totalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.price
  }, 0)
  const shippingPrice = 12
  const taxPrice = Math.round((totalPrice + shippingPrice) * 21) / 100

  const handleBuy =  async () => {
    if(!userSession?.token) {
        await Swal.fire({
            icon: "error",
            title: "Action required",
            text: "You must log in to buy products"
        });
        return router.push("/login")
    }

    const productIds: number[] = cart?.map((product) => product.id)

    await createOrder(productIds, userSession?.token)
    localStorage.removeItem("cart")
    router.push("/dashboard")

  }
    return (
        <>
            {cart.length === 0 ? (
                <div className="flex gap-4 mt-4 items-end">
                    <p className="text-xl font-semibold">Your Cart is empty</p>
                    <div className="flex items-center justify-center gap-2">
                        <Link href="/" title="" className="inline items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline">
                        keep shopping
                            
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="bg-white h-max rounded-md p-4 shadow-[0_3px_20px_-10px_rgba(6,81,237,0.4)] sticky top-0">
                <h3 className="text-lg font-bold text-gray-800">Order Summary</h3>

                <ul className="text-gray-500 text-sm space-y-3 mt-3">
                    <li className="flex flex-wrap gap-4">Subtotal <span className="ml-auto font-bold">${totalPrice.toFixed(2)}</span></li>
                    <li className="flex flex-wrap gap-4">Shipping <span className="ml-auto font-bold">${shippingPrice.toFixed(2)}</span></li>
                    <li className="flex flex-wrap gap-4">Tax <span className="ml-auto font-bold">${taxPrice.toFixed(2)}</span></li>
                    <li className="flex flex-wrap gap-4 font-bold">Total <span className="ml-auto">${(totalPrice + shippingPrice + taxPrice).toFixed(2)}</span></li>
                </ul>

                <button onClick={handleBuy} className="mt-6 text-base px-6 py-3 w-full bg-blue-700 hover:bg-blue-800 tracking-wide text-white rounded-md">Make Payment</button>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <Link 
                        href="/"
                        title=""
                        className="inline-flex items-center gap-2 text-sm font-medium text-primaty-700 underline hover:no-underline"
                    >
                        keep shopping
                        
                    </Link>
                </div>
                <div className="mt-6 space-y-6">
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-3">Secure payment</h4>
                        <p className="text-sm text-gray-500">Experience peace of mind with our secure payment options, ensuring your transactions are protected and reliable.</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-3">Free delivery</h4>
                        <p className="text-sm text-gray-500">Enjoy the convenience of free delivery on all your orders, providing a cost-effective and seamless shopping experience.</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-3">Easy to return</h4>
                        <p className="text-sm text-gray-500">Simplify your shopping experience with hassle-free returns. Our easy return process ensures convenience and customer satisfaction.</p>
                    </div>
                </div>
            </div>
            )
        }
        </>
        )
    }
export default OrderSummary
