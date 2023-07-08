"use client";

import { useContext, useState } from "react";
import LinkLeft from "../Links/LinkLeft";
import LinkRight from "../Links/LinkRight";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppiContext } from "../context/Context";

export default function Navbar() {
  const context = useContext(ShoppiContext);
  const [toggle, setToggle] = useState(false)
  
  const IsToggleActive = () => {
    setToggle(!toggle)
  }
  
  
  const classes =
    "my-1 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0";
  const active =
    "my-1 mt-4 text-blue-500 font-bold transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0";

  return (
    <nav
      className="fixed top-0 z-10 w-full bg-white shadow h dark:bg-gray-800"
    >
      <div className="container flex justify-between md:flex-row px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-end justify-end">
          
          {/* <!-- Mobile menu button --> */}
         
        {/*  <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        </div>
        <LinkLeft classes={classes} active={active} toggle={toggle}/>
        <LinkRight classes={classes} active={active} toggle={toggle}/>
        <div className="z-20 flex-1 md:block lg:z-0">
          <Link
            className="relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600 md:flex md:justify-end"
            href="#"
          >
            <ShoppingCartIcon className="text-gray-500 h-7 w-7 hover:text-gray-600" />
            {context.cardProducts?.length > 0 && (
              <span className="absolute left-0 flex items-center justify-center w-4 h-4 p-1 text-xs text-white bg-blue-500 rounded-full -top-2">
                {context.cardProducts?.length}
              </span>
            )}
          </Link>
        </div>
        <div className="flex z-20 lg:hidden">
            <button
              onClick={IsToggleActive}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${toggle ? 'hidden' : ''} w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${toggle ? '' : 'hidden'} w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
      </div>
    </nav>
  );
}
