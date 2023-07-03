'use client'
import React, { useContext } from 'react'
import OrdersCard from '@/components/OrdersCard/OrdersCard'
import { ShoppiContext } from '@/components/context/Context'
import Link from 'next/link'

export const Orders = () => {
  const context = useContext(ShoppiContext);
  
  return (
    <div className='mt-16'>
      <div className='flex justify-center items-center relative w-80'>
        <h2>My Orders</h2>
      </div>
      {
        context.order.map((order, index) => (
          <Link href={`/orders/${index}`} key={index}>
            <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
          </Link>
        ))
      }
    </div>
  )
} 
export default Orders