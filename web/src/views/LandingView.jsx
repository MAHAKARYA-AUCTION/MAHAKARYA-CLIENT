import FeaturedCollection from "../components/featuredCollection";
import Navbar from "../components/navbar";

export default function LandingView() {
  return (
    <div className="flex flex-col justify-between h-min-screen">
      {/* START:CONTENT PAGE */}
      <div className="space-y-5">
        {/* START:Header */}
        <div className="navbar font-semibold h-12 items-center mt-10 w-[80%] mx-auto">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <a className="poppins text-xl">
              <span className="barcode font-light text-2xl">test</span> 21.4
              MAHAKARYA
            </a>
          </div>
          <div className="navbar-end"></div>
        </div>
        {/* END:Header */}
        <Navbar />
        {/* START:BANNER */}
        <div className="banner hover:scale-[101%] transform transition duration-700 w-[80%] mx-auto"></div>
        {/* END:BANNER */}
        {/* START:LINE BREAK */}
        <div className="h-20 grid grid-cols-9 items-center w-[80%] mx-auto">
          <div className="col-span-4">
            <hr className="bg-[#57240f] h-2" />
          </div>
          <img
            src={require("../resources/img/barcode.png")}
            className="h-16 font-bold w-40 mx-auto"
            alt="barcode"
          />
          <div className="col-span-4">
            <hr className="bg-[#57240f] h-2" />
          </div>
        </div>
        {/* END:LINE BREAK */}
        {/* START: FEATURED COLLECTION */}
        <FeaturedCollection />
        {/* END: FEATURED COLLECTION */}
        {/* START:LINE BREAK */}
        <div className="h-20 grid grid-cols-9 items-center w-[80%] mx-auto">
          <div className="col-span-4">
            <hr className="bg-[#57240f] h-2" />
          </div>
          <img
            src={require("../resources/img/barcode.png")}
            className="h-16 font-bold w-40 mx-auto"
            alt="barcode"
          />
          <div className="col-span-4">
            <hr className="bg-[#57240f] h-2" />
          </div>
        </div>
        {/* END:LINE BREAK */}
        {/* START:COLLECTION OVERVIEW*/}
        <div className="min-h-screen space-y-16 w-[80%] mx-auto">
          <div className="flex flex-row justify-evenly p-5 space-x-28">
            <div className="w-[50%]">
              <h1 className="font-bosque text-7xl font-bold text-center ">
                Upcoming Auctions
              </h1>
              {/* START:COLLECTION OVERVIEW CARD*/}
              <div className="grid grid-cols-4 mt-10 space-x-5">
                <div className="h-full">
                  <img
                    src="https://loremflickr.com/g/320/240/art"
                    className="hover:scale-105 transform transition duration-600 h-full rounded-lg w-full"
                  />
                </div>
                <div className="grid grid-rows-4 text-xl text-left col-span-3">
                  <div className="">
                    <label>27 APR - 2 MEI</label>
                  </div>
                  <div className="row-span-3 space-y-2">
                    <h1 className="font-bold text-3xl">Collection Name</h1>
                    <p>
                      In posuere quam nulla, eget tincidunt quam scelerisque
                      eget. Quisque tempor vel lorem sit amet porttitor. Mauris
                      placerat euismod ligula, quis viverra ipsum placerat in.
                      Aliquam nec dui semper sem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 mt-10 space-x-5">
                <div className="h-full">
                  <img
                    src="https://loremflickr.com/g/320/240/art"
                    className="hover:scale-105 transform transition duration-600 h-full rounded-lg w-full"
                  />
                </div>
                <div className="grid grid-rows-4 text-xl text-left col-span-3">
                  <div className="">
                    <label>27 APR - 2 MEI</label>
                  </div>
                  <div className="row-span-3 space-y-2">
                    <h1 className="font-bold text-3xl">Collection Name</h1>
                    <p>
                      In posuere quam nulla, eget tincidunt quam scelerisque
                      eget. Quisque tempor vel lorem sit amet porttitor. Mauris
                      placerat euismod ligula, quis viverra ipsum placerat in.
                      Aliquam nec dui semper sem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 mt-10 space-x-5">
                <div className="h-full">
                  <img
                    src="https://loremflickr.com/g/320/240/art"
                    className="hover:scale-105 transform transition duration-600 h-full rounded-lg w-full"
                  />
                </div>
                <div className="grid grid-rows-4 text-xl text-left col-span-3">
                  <div className="">
                    <label>27 APR - 2 MEI</label>
                  </div>
                  <div className="row-span-3 space-y-2">
                    <h1 className="font-bold text-3xl">Collection Name</h1>
                    <p>
                      In posuere quam nulla, eget tincidunt quam scelerisque
                      eget. Quisque tempor vel lorem sit amet porttitor. Mauris
                      placerat euismod ligula, quis viverra ipsum placerat in.
                      Aliquam nec dui semper sem.
                    </p>
                  </div>
                </div>
              </div>
              {/* END:COLLECTION OVERVIEW CARD*/}
            </div>
            <div className="w-[50%]">
              <h1 className="font-bosque text-7xl font-bold text-center ">
                Past Auctions
              </h1>
              <div className="grid grid-cols-4 mt-10 space-x-5 relative">
                <div className="h-full">
                  <img
                    src="https://loremflickr.com/g/320/240/art"
                    className="hover:scale-105 transform transition duration-600 h-full rounded-lg w-full"
                  />
                </div>
                <div className="grid grid-rows-4 text-xl text-left col-span-3">
                  <div className="">
                    <label className="">27 APR - 2 MEI | </label>
                    <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                      40 Lots
                    </label>
                  </div>
                  <button className="btn rounded-3xl bg-transparent text-[#57240f] border-[#57240f] absolute top-0 right-0 hover:text-white hover:bg-[#57240f] hover:scale-105 transform transition duration-600 ">
                    View Collection
                  </button>
                  <div className="row-span-3 space-y-2">
                    <h1 className="font-bold text-3xl">Collection Name</h1>
                    <p>
                      In posuere quam nulla, eget tincidunt quam scelerisque
                      eget. Quisque tempor vel lorem sit amet porttitor. Mauris
                      placerat euismod ligula, quis viverra ipsum placerat in.
                      Aliquam nec dui semper sem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 mt-10 space-x-5 relative ">
                <div className="h-full">
                  <img
                    src="https://loremflickr.com/g/320/240/art"
                    className="hover:scale-105 transform transition duration-600 h-full rounded-lg w-full"
                  />
                </div>
                <button className="btn rounded-3xl bg-transparent text-[#57240f] border-[#57240f] absolute top-0 right-0 hover:text-white hover:bg-[#57240f] hover:scale-105 transform transition duration-600 ">
                  View Collection
                </button>
                <div className="grid grid-rows-4 text-xl text-left col-span-3">
                  <div className="">
                    <label className="">27 APR - 2 MEI | </label>
                    <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                      40 Lots
                    </label>
                  </div>
                  <div className="row-span-3 space-y-2">
                    <h1 className="font-bold text-3xl">Collection Name</h1>
                    <p>
                      In posuere quam nulla, eget tincidunt quam scelerisque
                      eget. Quisque tempor vel lorem sit amet porttitor. Mauris
                      placerat euismod ligula, quis viverra ipsum placerat in.
                      Aliquam nec dui semper sem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 mt-10 space-x-5 relative">
                <div className="h-full">
                  <img
                    src="https://loremflickr.com/g/320/240/art"
                    className="hover:scale-105 transform transition duration-600 h-full rounded-lg w-full"
                  />
                </div>
                <button className="btn rounded-3xl bg-transparent text-[#57240f] border-[#57240f] absolute top-0 right-0 hover:text-white hover:bg-[#57240f] hover:scale-105 transform transition duration-600 ">
                  View Collection
                </button>
                <div className="grid grid-rows-4 text-xl text-left col-span-3">
                  <div className="">
                    <label className="">27 APR - 2 MEI | </label>
                    <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                      40 Lots
                    </label>
                  </div>
                  <div className="row-span-3 space-y-2">
                    <h1 className="font-bold text-3xl">Collection Name</h1>
                    <p>
                      In posuere quam nulla, eget tincidunt quam scelerisque
                      eget. Quisque tempor vel lorem sit amet porttitor. Mauris
                      placerat euismod ligula, quis viverra ipsum placerat in.
                      Aliquam nec dui semper sem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 mt-10 space-x-5 relative ">
                <div className="h-full">
                  <img
                    src="https://loremflickr.com/g/320/240/art"
                    className="hover:scale-105 transform transition duration-600 h-full rounded-lg w-full"
                  />
                </div>
                <button className="btn rounded-3xl bg-transparent text-[#57240f] border-[#57240f] absolute top-0 right-0 hover:text-white hover:bg-[#57240f] hover:scale-105 transform transition duration-600 ">
                  View Collection
                </button>
                <div className="grid grid-rows-4 text-xl text-left col-span-3">
                  <div className="">
                    <label className="">27 APR - 2 MEI | </label>
                    <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                      40 Lots
                    </label>
                  </div>
                  <div className="row-span-3 space-y-2">
                    <h1 className="font-bold text-3xl">Collection Name</h1>
                    <p>
                      In posuere quam nulla, eget tincidunt quam scelerisque
                      eget. Quisque tempor vel lorem sit amet porttitor. Mauris
                      placerat euismod ligula, quis viverra ipsum placerat in.
                      Aliquam nec dui semper sem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="font-bosque text-2xl font-bold text-[#a35831] hover:scale-110 transform transition duration-600">
              View All Collections
            </button>
          </div>
        </div>
        {/* END:COLLECTION OVERVIEW*/}
      </div>
      <div className="bg-[#675237] h-[8rem] text-[#ebd7bb] w-full py-5 grid grid-rows-3 mt-10 items-baseline">
        <h1>Follow Us</h1>
        <div className="flex flex-row justify-center space-x-5 mt-3">
          <button className="fa-brands fa-youtube fa-2xl hover:scale-125 transform transition duration-400"></button>
          <button className="fa-brands fa-twitter fa-2xl hover:scale-125 transform transition duration-400"></button>
          <button className="fa-brands fa-instagram fa-2xl hover:scale-125 transform transition duration-400"></button>
          <button className="fa-brands fa-facebook fa-2xl hover:scale-125 transform transition duration-400"></button>
          <button className="fa-brands fa-pinterest fa-2xl hover:scale-125 transform transition duration-400"></button>
        </div>
        <h1>&#169; Mahakarya 2022</h1>
      </div>
      {/* END:CONTENT PAGE */}
    </div>
  );
}
