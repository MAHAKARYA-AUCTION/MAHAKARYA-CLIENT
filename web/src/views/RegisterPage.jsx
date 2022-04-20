import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doRegister } from "../store/actions/User";
import Swal from "sweetalert2";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    ktp: "",
    phoneNumber: "",
    address: "",
    role: "buyer",
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...inputData,
    };
    newInput[name] = value;
    setInputData(newInput);
  };

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(doRegister(inputData))
      .then((_) => {
        Swal.fire({
          icon: "success",
          iconColor: "#57240f",
          title: "Register Success!",
          text: "Please continue by logging in",
          color: "#080504",
          background: "#ebd7bb",
          confirmButtonColor: "#a35831",
        });
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          iconColor: "#57240f",
          title: "Error!",
          text: error.response.data.message,
          color: "#080504",
          background: "#ebd7bb",
          confirmButtonColor: "#a35831",
        });
      });
  };

  const toLoginPage = () => {
    navigate("/login");
  };

  const toHome = () => {
    navigate("/");
  };

  return (
    <div className="py-[5%]">
      <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-[#b58e67] lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://uploads0.wikiart.org/00339/images/leonardo-da-vinci/mona-lisa-c-1503-1519.jpg')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">REGISTER</h2>

          <form onSubmit={registerHandler}>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Username</label>
              </div>

              <input value={inputData.username} onChange={inputHandler} name="username" id="registerUsername" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-[#ebd7bb] dark:text-black-800 dark:border-gray-600 focus:border-amber-900 focus:ring-opacity-40 dark:focus:border-amber-800 focus:outline-none focus:ring focus:ring-amber-700" type="text" />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email Address</label>
              </div>
              <input value={inputData.email} onChange={inputHandler} name="email" id="registerEmail" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-[#ebd7bb] dark:text-black-800 dark:border-gray-600 focus:border-amber-900 focus:ring-opacity-40 dark:focus:border-amber-800 focus:outline-none focus:ring focus:ring-amber-700" type="email" placeholder="example@admin.com" />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Password</label>
              </div>

              <input value={inputData.password} onChange={inputHandler} name="password" id="registerPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-[#ebd7bb] dark:text-black-800 dark:border-gray-600 focus:border-amber-900 focus:ring-opacity-40 dark:focus:border-amber-800 focus:outline-none focus:ring focus:ring-amber-700" type="password" />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">KTP Number</label>
              </div>

              <input value={inputData.ktp} onChange={inputHandler} name="ktp" id="registerKTP" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-[#ebd7bb] dark:text-black-800 dark:border-gray-600 focus:border-amber-900 focus:ring-opacity-40 dark:focus:border-amber-800 focus:outline-none focus:ring focus:ring-amber-700" type="number" />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Phone Number</label>
              </div>

              <input value={inputData.phoneNumber} onChange={inputHandler} name="phoneNumber" id="registerPhone" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-[#ebd7bb] dark:text-black-800 dark:border-gray-600 focus:border-amber-900 focus:ring-opacity-40 dark:focus:border-amber-800 focus:outline-none focus:ring focus:ring-amber-700" type="number" />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Address</label>
              </div>

              <input value={inputData.address} onChange={inputHandler} name="address" id="registerAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-[#ebd7bb] dark:text-black-800 dark:border-gray-600 focus:border-amber-900 focus:ring-opacity-40 dark:focus:border-amber-800 focus:outline-none focus:ring focus:ring-amber-700" type="text" />
            </div>

            <div className="mt-8">
              <button className="w-full btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-105 transform transition duration-400">Register</button>
            </div>

            <div className="mt-3">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Already have account?</label>
              <label onClick={toLoginPage} className="block mb-2 text-sm text-[#57240f] dark:text-gray-200 underline font-extrabold hover:scale-110 transform duration-300 cursor-pointer">
                Login
              </label>
              <label onClick={toHome} className="block mb-2 text-sm font-medium text-[#57240f] dark:text-gray-200 underline hover:scale-110 transform duration-300 cursor-pointer">
                Back to Home
              </label>
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
