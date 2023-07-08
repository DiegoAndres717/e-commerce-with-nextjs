"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function LinkRight({ classes, active, toggle }) {
  const { data: session } = useSession();
  const pathName = usePathname();
  return (
    <>
      <div className={`${toggle ? '' : 'hidden'} absolute inset-x-0 inset-y-14 mt-1 z-10 h-40 md:h-auto border-b md:border-0 rounded-lg w-full px-6 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:left-[530px] md:items-center`}>
        <div className="flex flex-col md:flex-row md:justify-between md:mx-6 lg:-ml-96">
          <Link className={"text-black/60 right-10"} href="/account">
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
            <div className="lg:ml-96">

            <Link
              className={pathName === "/signin" ? active : classes}
              href="/signin"
              >
              Sign In
            </Link>
            </div>
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
      </div>
    </>
  );
}
