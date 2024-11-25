import CartList from '@/components/Cart/CartList'
import OrderSummary from '@/components/Cart/OrderSummary'
import React from 'react'

const CartView = () => {
  return (
    <section className='bg-white py-8 antialiased md:py-16'>
      <div className='mx-auto max-w-screen-xl px-4 2x1:px-0'>
        <h2 className="text-3xl font-extrabold text-gray-800">Your shopping bag</h2>
          <div className='flex gap-4'>
          
            <CartList />
            <OrderSummary /> 
          </div>
      </div>
    </section>
        
  )
}

export default CartView
