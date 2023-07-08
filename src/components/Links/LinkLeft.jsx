"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { ShoppiContext } from "../context/Context";
import { usePathname } from "next/navigation";

export default function LinkLeft({ classes, active, toggle }) {
  const context = useContext(ShoppiContext);
  const pathName = usePathname();
  return (
    <div className={`${toggle ? '' : 'hidden'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:flex-1 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
      <div className="flex flex-col  md:flex-row md:mx-6">
      <div className="lg:flex hidden">
      <Link
        className={
          pathName === "/"
            ? active 
            : classes + 'font-bold'
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
      </div>
      </div>
    </div>
  );
}
