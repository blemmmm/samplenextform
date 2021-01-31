import Head from "next/head";
import AirTable from "airtable";
import { useCallback, useState } from "react";
import Swal from "sweetalert2";

const airtable_api_key = "keyI7i5tzcyx2DHZu";
const airtable_base_id = "appHlimrf8NlJk4x6";
const base = new AirTable({ apiKey: airtable_api_key }).base(airtable_base_id);

const Home = () => {
  const [fullName, setFullName] = useState("");
  const [userType, setUserType] = useState("0");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const validateEmail = () => {
    const regexString = /\S+@\S+\.\S+/;
    return regexString.test(email);
  };

  const createAccount = useCallback(async () => {
    try {
      if (fullName === "") {
        throw new Error("Please provide your full name.");
      }
      if (userType === "0") {
        throw new Error("Please select type.");
      }
      if (email === "") {
        throw new Error("Please provide your email.");
      }
      if (password === "") {
        throw new Error("Please provide your password.");
      }
      if (validateEmail(email) === false) {
        throw new Error("Please enter a valid email.");
      }
      await base("User Table").create([
        {
          fields: {
            "Full Name": fullName,
            Type: userType,
            Email: email,
            Password: password,
          },
        },
      ]);
      Swal.fire({
        title: "Congratulations! 🎉",
        text: "You have created your account.",
        icon: "success",
      });
      setAgree(false);
      setFullName("");
      setUserType("0");
      setEmail("");
      setPassword("");
    } catch (e) {
      Swal.fire({
        title: "ERROR",
        text: e.message,
        icon: "error",
      });
    }
  }, [fullName, userType, email, password]);

  return (
    <div>
      <Head>
        <title>Sample Next.js Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center pt-20 pb-6">
        <h1 className="text-5xl">Create your account</h1>
      </div>
      <div className="flex justify-center pb-20">
        <h1 className="text-sm text-gray-400">
          It's free and only takes a minute.
        </h1>
      </div>
      <div className="flex items-center justify-center pb-20">
        <form action="" className="p-5 border border-gray-400 rounded-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-state"
            >
              Type
            </label>
            <div className="relative">
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="block appearance-none w-full border border-gray-200 text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="0" disabled>
                  Select Type
                </option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pw"
              type="password"
              maxlength="128"
            />
          </div>
          <div className="mb-4">
            <label className="block">
              <input
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mr-2 leading-tight"
                type="checkbox"
              />
              <span className="text-sm">
                I accept the Terms of Service and Privacy Policy
              </span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={createAccount}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <h1 className="text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/Login" className="hover:text-blue-400">
            Click here to sign in
          </a>
          .
        </h1>
      </div>
    </div>
  );
};

export default Home;
