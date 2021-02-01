import Head from "next/head";
import AirTable from "airtable";
import { useCallback, useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";

const airtable_api_key = "keyI7i5tzcyx2DHZu";
const airtable_base_id = "appHlimrf8NlJk4x6";
const base = new AirTable({ apiKey: airtable_api_key }).base(airtable_base_id);

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [userType, setUserType] = useState("0");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const validateEmail = () => {
    const regexString = /\S+@\S+\.\S+/;
    return regexString.test(email);
  };

  //   const loggingIn = useCallback(async () => {
  //     try {
  //       if (email === "") {
  //         throw new Error("Please provide your email.");
  //       }
  //       if (password === "") {
  //         throw new Error("Please provide your password.");
  //       }
  //       if (validateEmail(email) === false) {
  //         throw new Error("Please enter a valid email.");
  //       }
  //       await base("User Table").create([
  //         {
  //           fields: {
  //             "Full Name": fullName,
  //             Type: userType,
  //             Email: email,
  //             Password: password,
  //           },
  //         },
  //       ]);
  //       Swal.fire({
  //         title: "Congratulations! 🎉",
  //         text: "You have created your account.",
  //         icon: "success",
  //       });
  //       setAgree(false);
  //       setFullName("");
  //       setUserType("0");
  //       setEmail("");
  //       setPassword("");
  //     } catch (e) {
  //       Swal.fire({
  //         title: "ERROR",
  //         text: e.message,
  //         icon: "error",
  //       });
  //     }
  //   }, [fullName, userType, email, password]);

  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center pt-20 pb-28">
        <h1 className="text-5xl">Sign In</h1>
      </div>
      <div className="flex items-center justify-center pb-52">
        <form action="" className="w-96 p-5 border border-gray-400 rounded-md">
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
          <div className="mb-4 pt-5">
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
              maxLength="128"
            />
          </div>
          <div className="flex items-center justify-between pt-10">
            <Link href="/Navigation">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Sign In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
