"use client";

import React, { useContext } from "react";
import { ShoppiContext } from "../context/Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import OrderCard from "../OrderCard/OrderCard";
import { totalPrice } from "@/utils";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function CheckoutSide() {
  const context = useContext(ShoppiContext);
  const { data: session } = useSession();

  const handleDelete = (id) => {
    const filteredProduct = context.cardProducts.filter(
      (product) => product.id !== id
    );
    context.setCardProducts(filteredProduct);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      /* id: crypto.randomUUID(), */
      date: "01.07.2023",
      products: context.cardProducts,
      totalProducts: context.cardProducts.length,
      totalPrice: totalPrice(context.cardProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCardProducts([]);
    context.setSearchByTitle(null);
  };

  return (
    <>
      <aside
        className={`${
          context.isCheckoutModalOpen ? "flex" : "hidden"
        } checkout-side-menu flex-col fixed right-0 border w-100 h-200 top-16 border-gray-300 rounded-lg bg-white`}
      >
        <div className="flex items-center justify-between p-6">
          <h2 className="text-xl font-medium">My Order</h2>
          <div>
            <XMarkIcon
              className="w-6 h-6 text-black cursor-pointer"
              onClick={() => context.closeModalCheckout()}
            />
          </div>
        </div>
        <div className="px-6 max-h-[500px] overflow-y-auto flex-1">
          {context.cardProducts.map((product) => (
            <OrderCard
              key={product.id}
              product={product}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div className="px-6 mb-6">
          <p className="flex items-center justify-between mb-2">
            <span className="font-light">Total:</span>
            <span className="text-xl font-bold">
              ${totalPrice(context.cardProducts)}
            </span>
          </p>
          <Link href={`${session?.user ? "/order" : "/signin"}`}>
            <button
              onClick={() => handleCheckout()}
              className="w-full py-4 text-sm text-gray-100 transition bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              Checkout
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
}
