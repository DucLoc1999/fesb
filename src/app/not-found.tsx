/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

const Page404 = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h1>

              <p className="my-4 text-gray-800">
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>
              <Link href="/">
                <Button
                  pill
                  color="blue"
                  className="mt-8 bg-primary text-white"
                >
                  Take me home
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="" />
          </div>
        </div>
      </div>

      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="" />
      </div>
    </div>
  );
};

export default Page404;
