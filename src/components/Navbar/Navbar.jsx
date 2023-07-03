"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ShoppiContext } from "../context/Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const context = useContext(ShoppiContext);
  const { data: session } = useSession();
  const pathName = usePathname();

  return (
    <nav
      x-data="{ isOpen: false }"
      className="fixed z-10 top-0 w-full bg-white shadow dark:bg-gray-800"
    >
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link
            className={
              pathName === "/"
                ? active
                : "my-2 text-gray-700 transition-colors font-bold duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            }
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => context.setSearchByCategory("")}
            className={pathName === "/all" ? active : classes}
            href="/"
          >
            All
          </Link>
          <Link
            onClick={() => context.setSearchByCategory("women")}
            className={pathName === "/women" ? active : classes}
            href="/"
          >
            Women
          </Link>
          <Link
            onClick={() => context.setSearchByCategory("electronics")}
            className={pathName === "/electronics" ? active : classes}
            href="/"
          >
            Electronics
          </Link>
          <Link
            onClick={() => context.setSearchByCategory("jewelery")}
            className={pathName === "/jewelery" ? active : classes}
            href="/"
          >
            Jewelery
          </Link>
          <Link
            onClick={() => context.setSearchByCategory("men")}
            className={pathName === "/men" ? active : classes}
            href="/"
          >
            Men
          </Link>

          {/* <!-- Mobile menu button --> */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
                x-show="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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

        {/*  <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link className={"text-black/60"} href="/account">
              {session?.user?.email}
            </Link>
            {session?.user && (
              <>
                <Link
                  className={pathName === "/orders" ? active : classes}
                  href="/orders"
                >
                  Ordenes
                </Link>
                <Link
                  className={pathName === "/account" ? active : classes}
                  href="/account"
                >
                  Cuenta
                </Link>
              </>
            )}
            {!session?.user && ( 
            <Link
              className={pathName === "/signin" ? active : classes}
              href="/signin"
            >
              Sign In
            </Link>
            )}

            {session?.user && (
              <Link
                className={pathName === "/logout" ? active : classes}
                href="/"
              >
                <button onClick={() => signOut()}>Sign out</button>
              </Link>
            )}
          </div>

          <div className="flex justify-center md:block">
            <Link
              className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              <ShoppingCartIcon className="h-7 w-7 text-gray-500 hover:text-gray-600" />
              {context.cardProducts?.length > 0 && (
                <span className="flex justify-center items-center absolute -top-2 left-0 w-4 h-4 p-1 text-xs text-white bg-blue-500 rounded-full">
                  {context.cardProducts?.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

const classes =
  "my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0";
const active =
  "my-2 text-blue-500 font-bold transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0";
