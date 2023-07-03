'use client'

import Image from "next/image";
import { XCircleIcon } from '@heroicons/react/24/solid'
import React, { useContext } from "react";
import { ShoppiContext } from "../context/Context";

export const ProductDetail = () => {
    const context = useContext(ShoppiContext)
    
  return (
    <>
      <div className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} relative justify-center`}>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
              >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
              <div>
                {
                  context?.productToShow?.image && (
                    <Image
                      className="object-cover w-full h-48 rounded-lg"
                      src={context?.productToShow?.image}
                      alt={context?.productToShow?.title}
                      width={400}
                      height={500}
                    />
                  )
                }
                <div className="absolute cursor-pointer top-0 right-0 flex justify-center items-center rounded-full bg-white w-8 h-8 p-1 m-2">
                <XCircleIcon 
                    onClick={() => context.closeModalDetail()}
                    className="text-black hover:text-gray-500" />
                </div>

                <div className="mt-4 text-center">
                  <h3
                    className="font-medium leading-6 text-gray-900 capitalize dark:text-white"
                    id="modal-title"
                  >
                    {context.productToShow?.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {context.productToShow?.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex justify-end sm:flex sm:items-center sm:-mx-2">
                <p className="text-lg font-bold">${context.productToShow?.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
