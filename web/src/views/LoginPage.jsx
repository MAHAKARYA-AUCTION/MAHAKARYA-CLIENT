import { useState } from "react";

export default function LoginPage() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...inputData,
    };
    newInput[name] = value;
    setInputData(newInput);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <div className="py-[10%]">
      <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-[#b58e67] lg:max-w-4xl">
        <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url('https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1529666730/tyirixjudhpfuecnfxva.jpg')` }}></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">LOGIN</h2>

          <form onSubmit={loginHandler}>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email Address</label>
              </div>
              <input value={inputData.email} onChange={inputHandler} name="email" id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-[#ebd7bb] dark:text-black-800 dark:border-gray-600 focus:border-amber-900 focus:ring-opacity-40 dark:focus:border-amber-800 focus:outline-none focus:ring focus:ring-amber-700" type="email" placeholder="example@admin.com" />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Password</label>
              </div>

              <input value={inputData.password} onChange={inputHandler} name="password" id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-[#ebd7bb] dark:text-black-800 dark:border-gray-600 focus:border-amber-900 focus:ring-opacity-40 dark:focus:border-amber-800 focus:outline-none focus:ring focus:ring-amber-700" type="password" />
            </div>

            <div className="mt-8">
              <button className="w-full btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-105 transform transition duration-400">Login</button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
