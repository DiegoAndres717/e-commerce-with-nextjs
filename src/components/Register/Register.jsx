"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Register = ({buttonRender}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      toast.error("Fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_REGISTER_URL}/api/register`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ username, email, password }),
        }
      );

      if (res.ok) {
        toast.success("Successfully registered the user");
        setTimeout(() => {
          signIn();
        }, 1500);
        return;
      } else {
        toast.error("Error occured while registering");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-12">
      <form onSubmit={handleSubmit}>
        <div className="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px ">
          <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 ">
            <div>
              <h1 className="text-xl font-semibold text-gray-800 ">
                Create an account
              </h1>
              <p className="text-sm tracking-wide text-gray-600 ">
                Do have an account?{" "}
                {buttonRender}
              </p>
            </div>

            <div className="mt-8 space-y-8">
              <div className="space-y-6">
              <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Username..."
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-transparent text-gray-600 dark:text-white rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 "
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-gray-600 dark:text-white rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 "
                  placeholder="hi@helloworld.com"
                  type="email"
                  name="email"
                  id="email"
                />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent text-gray-600 dark:text-white rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 "
                  placeholder="******"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>

              <button className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white">
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
