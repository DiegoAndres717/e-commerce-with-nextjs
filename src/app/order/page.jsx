"use client";

import OrderCard from "@/components/OrderCard/OrderCard";
import { ShoppiContext } from "@/components/context/Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useContext } from "react";

export const Order = () => {
  const context = useContext(ShoppiContext);
  
  return (
    <div className="flex flex-col items-center mt-16">
      <div className='flex justify-center items-center relative w-80 mb-4'>
        <Link href={'/orders'} className='absolute left-0'>
          <ChevronLeftIcon 
          className="h-6 w-6 text-black cursor-pointer"
          />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="px-6">
        {context.order?.slice(-1)[0]?.products.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))}
      </div>
      {/* <div className='flex w-80 mt-4'>
        <p className='flex w-full items-center justify-between'>
          <span className='font-normal text-xl'>Total: </span>
          <span className='font-medium text-2xl pr-2'>${context.order?.[0]?.totalPrice}</span>
        </p>
      </div> */}
    </div>
  );
};

export default Order;
