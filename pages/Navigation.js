import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/pro-solid-svg-icons";
import { useCallback, useState } from "react";
import Link from "next/link";

library.add(faBars);

const Navigation = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
              <div
                className="flex-shrink-0 flex items-center font-semibold text-white"
                onClick={() => set_sidebar(!sidebar)}
              >
                <FontAwesomeIcon icon={faBars} size="1x" />
                <div className="pl-5">Hello, Blessly!</div>
              </div>
            </div>
            <div className="ml-3 relative">
              <div>
                <div className="flex-shrink-0 flex items-center font-semibold text-white focus:outline-none">
                  <Link href="/Login">
                    <button className="py-2 px-4 font-semibold text-white bg-gray-800 hover:bg-gray-600">
                      Sign out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-full fixed z-20 bg-gray-800 bg-opacity-75 left-0 p-2 w-64 shadow-md lg:shadow-lg overflow-y-auto">
            <div className="py-10 px-20 flex items-center justify-between hover:bg-gray-600 text-white">
              <Link href="/">Link 1</Link>
            </div>
            <hr />
            <div className="py-10 px-20 flex items-center justify-between hover:bg-gray-600 text-white">
              <Link href="/">Link 2</Link>
            </div>
            <hr />
            <div className="py-10 px-20 flex items-center justify-between hover:bg-gray-600 text-white">
              <Link href="/">Link 3</Link>
            </div>
            <hr />
            <div className="py-10 px-20 flex items-center justify-between hover:bg-gray-600 text-white">
              <Link href="/">Link 4</Link>
            </div>
            <hr />
            <div className="py-10 px-20 flex items-center justify-between hover:bg-gray-600 text-white">
              <Link href="/">Link 5</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
