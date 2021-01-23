import Head from 'next/head'

export default function Home() {
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
        <h1 className="text-sm text-gray-400">It's free and only takes a minute.</h1>
      </div>
      <div className="flex items-center justify-center pb-52">
        <form action="" className="p-5 border border-gray-400 rounded-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grid-state">
                Type
              </label>
            <div className="relative">
              <select className="block appearance-none w-full border border-gray-200 text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option selected disabled>Select Type</option>
                <option>Type 1</option>
                <option>Type 2</option>
                </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="your.email@example.com" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pw" type="password" />
          </div>
          <div className="mb-4">
            <label className="block">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">
                I accept the Terms of Service and Privacy Policy
              </span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                Submit
            </button>
          </div>
      </form>
    </div>
    </div>
  )
}
