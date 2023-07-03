"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { ShoppiContext } from "../context/Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

export const Card = ({ card }) => {
  const context = useContext(ShoppiContext);

  const showProduct = (producDetail) => {
    context.openModalDetail();
    context.setProductToShow(producDetail);
  };

  const addCardToCard = (e, productData) => {
    e.stopPropagation();
    
    context.setCardProducts([...context.cardProducts, productData]);
    context.openModalCheckout();
    context.closeModalDetail();
  };

  const renderIcon = (id) =>{
    const isInCard = context.cardProducts.filter(product => product.id === id).length > 0

    if (isInCard) {
      return (
        <div
            className="absolute cursor-pointer top-0 right-0 flex justify-center items-center rounded-full bg-gray-900 w-6 h-6 p-1 m-2"
          >
            <CheckIcon className="h-10 w-10 text-green-600 font-extrabold" />
          </div>
      )
    }else{
      return (
        <div
            className="absolute cursor-pointer top-0 right-0 flex justify-center items-center rounded-full bg-white w-6 h-6 p-1 m-2"
            onClick={(e) => addCardToCard(e, card)}
          >
            <PlusIcon className="h-10 w-10 text-black" />
          </div>
      )
    }
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(card)}
    >
      <figure className="relative mb-2 w-full h-4/5 rounded-lg">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
          {card?.category}
        </span>
        <Image
          className="w-full h-full object-cover rounded-lg"
          src={card?.image}
          alt={card?.title}
          width={400}
          height={400}
        />
        {
          renderIcon(card.id)
        }
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2">{card?.title}</span>
        <span className="text-lg font-bold">${card?.price}</span>
      </p>
    </div>
  );
};
