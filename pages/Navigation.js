import { useCallback, useState } from "react";
import "@fortawesome/fontawesome-pro/css/all.min.css";
import Link from "next/link";
import Head from "next/head";

const Navigation = () => {
  const [sidebar, set_sidebar] = useState(false);
  console.log(sidebar);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-gray-800">
        <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="px-1">
              <div className="flex items-center justify-start text-white font-semibold">
                <i
                  className="far fa-bars"
                  onClick={() => set_sidebar(!sidebar)}
                />
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
        {sidebar === true && (
          <div
            className="transition ease-linear duration-1000"
            onClick={() => set_sidebar(false)}
          >
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
        )}
      </nav>
    </div>
  );
};

export default Navigation;
