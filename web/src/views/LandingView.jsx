export default function LandingView() {
  return (
    <div className="flex flex-col justify-between h-min-screen">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* START:CONTENT PAGE */}
          <div className="space-y-16">
            {/* START:NAVBAR */}
            <div className="flex flex-row justify-between font-semibold h-32 items-center mt-10 w-[80%] mx-auto">
              <div className="flex-none">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-square btn-ghost drawer-button hover:scale-110 transform transition duration-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1">
                <a className="poppins text-xl">
                  <span className="barcode font-light text-2xl">test</span> 21.4
                  MAHAKARYA
                </a>
              </div>
              <div className="flex-none">
                <button className="x-6 py-3 poppins font-semibold mr-2 hover:scale-110 transform transition duration-400">
                  About Us
                </button>
              </div>
            </div>
            {/* END:NAVBAR */}
            {/* START:TITLE */}
            <div className="h-[15vh] flex flex-row items-center justify-between w-[80%] mx-auto">
              <div className="flex flex-row gap-4 items-center">
                <label className="font-bonVoyage landing-title font-bold">
                  MAHAKARYA
                </label>
                <div className="flex flex-col justify-between h-full text-left gap-4 pb-4 items-center">
                  <label className="font-bosque font-bold text-7xl">
                    Auction
                  </label>
                  <label className="font-bosque text-3xl">
                    Search Bid Buy!
                  </label>
                </div>
              </div>

              <div className="grid grid-rows-4 grid-flow-col w-[18%] justify-end gap-2">
                <div className="row-span-4 justify-center flex flex-row">
                  <img
                    src={require("../resources/img/sphere.png")}
                    className="h-32 "
                    alt="sphere"
                  />
                </div>
                <div className="row-span-2 col-span-2 flex flex-row justify-between items-center">
                  <label className="border-[3px] border-black rounded-full text-center align-middle p-2 btn-circle font-bold poppins">
                    CC
                  </label>
                  <label className="border-[3px] border-black rounded-full text-center align-middle p-2 btn-circle font-bold poppins">
                    R
                  </label>
                  <label className="border-[3px] border-black rounded-full text-center align-middle p-2 btn-circle font-bold poppins">
                    TM
                  </label>
                </div>
                <div className=" row-span-2 col-span-2">
                  <span className="barcode font-light text-7xl">testi</span>
                </div>
              </div>
            </div>
            {/* END:TITLE */}
            {/* START:BANNER */}
            <div className="banner  hover:scale-[101%] transform transition duration-700 w-[80%] mx-auto"></div>
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
            <div className="pb-10 space-y-16">
              <div className="featured-banner bg-[url('./resources/img/placeholder-banner.jpg')] w-full content-center p-5 flex flex-row px-[10%] justify-between">
                <div className="text-left h-full w-[30rem] rounded-md p-10 flex flex-col">
                  <div className="bg-[#a35831] p-10 rounded-xl shadow-2xl text-white space-y-5">
                    <h2 className="font-bosque text-2xl font-bold ">
                      Featured Collection
                    </h2>
                    <h1 className="font-bosque text-5xl font-bold">
                      TREASURES Fine Art
                    </h1>
                    <p className="w-max-full poppins text-left tracking-widest">
                      In posuere quam nulla, eget tincidunt quam scelerisque
                      eget. Quisque tempor vel lorem sit amet porttitor. Mauris
                      placerat euismod ligula, quis viverra ipsum placerat in.
                      Aliquam nec dui semper sem.
                    </p>
                  </div>
                </div>
                <div className="text-left h-full w-[25rem] rounded-md p-10 flex flex-col-reverse">
                  <div className="bg-[#a35831] rounded-xl shadow-2xl text-white grid grid-cols-2 h-[10rem] poppins  font-bold">
                    <div className="border-r-2 border-white flex flex-col justify-center items-center">
                      <label className="text-base">From</label>
                      <label className="text-lg font-semibold">Monday</label>
                      <label className="text-6xl">8</label>
                      <label className="text-3xl">Mar</label>
                    </div>
                    <div className="border-l-2 border-white flex flex-col justify-center items-center">
                      <label className="text-base">Till</label>
                      <label className="text-lg font-semibold">Sunday</label>
                      <label className="text-6xl">14</label>
                      <label className="text-3xl">Apr</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 items-baseline w-[80%] mx-auto">
                <label className="font-bosque text-3xl font-semi-bold text-[#57240f] text-left">
                  TREASURES Fine Art
                </label>
                <div className="text-right w-[80%] mx-auto">
                  <button className="font-bosque text-xl font-bold text-[#a35831] hover:scale-110 transform transition duration-400">
                    View Lots
                  </button>
                </div>
                {/* START: FEATURED COLECTION LIST */}
                <div className="grid grid-cols-5 col-span-2 space-x-5 mt-10 justify-around">
                  {/* START: CURRENT COLLECTION CARD */}
                  <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
                    <img
                      src="https://loremflickr.com/g/320/240/art"
                      className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
                      alt="something"
                    />
                    <div className="text-left poppins text-[#675237] flex flex-row justify-between items-end">
                      <div className="flex flex-col flex-auto">
                        <h1 className="text-bold text-3xl ">Art Name</h1>
                        <div>
                          <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                            Painter
                          </label>
                        </div>
                      </div>
                      <div>
                        <button className="btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
                          view lots
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
                    <img
                      src="https://loremflickr.com/g/320/240/art"
                      className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
                      alt="something"
                    />
                    <div className="text-left poppins text-[#675237] flex flex-row justify-between items-end">
                      <div className="flex flex-col flex-auto">
                        <h1 className="text-bold text-3xl ">Art Name</h1>
                        <div>
                          <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                            Painter
                          </label>
                        </div>
                      </div>
                      <div>
                        <button className="btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
                          view lots
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
                    <img
                      src="https://loremflickr.com/g/320/240/art"
                      className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
                      alt="something"
                    />
                    <div className="text-left poppins text-[#675237] flex flex-row justify-between items-end">
                      <div className="flex flex-col flex-auto">
                        <h1 className="text-bold text-3xl ">Art Name</h1>
                        <div>
                          <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                            Painter
                          </label>
                        </div>
                      </div>
                      <div>
                        <button className="btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
                          view lots
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
                    <img
                      src="https://loremflickr.com/g/320/240/art"
                      className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
                      alt="something"
                    />
                    <div className="text-left poppins text-[#675237] flex flex-row justify-between items-end">
                      <div className="flex flex-col flex-auto">
                        <h1 className="text-bold text-3xl ">Art Name</h1>
                        <div>
                          <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                            Painter
                          </label>
                        </div>
                      </div>
                      <div>
                        <button className="btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
                          view lots
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
                    <img
                      src="https://loremflickr.com/g/320/240/art"
                      className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
                      alt="something"
                    />
                    <div className="text-left poppins text-[#675237] flex flex-row justify-between items-end">
                      <div className="flex flex-col flex-auto">
                        <h1 className="text-bold text-3xl ">Art Name</h1>
                        <div>
                          <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                            Painter
                          </label>
                        </div>
                      </div>
                      <div>
                        <button className="btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
                          view lots
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* END: CURRENT COLLECTION CARD */}
                </div>
                {/* END: FEATURED COLECTION LIST */}
              </div>
            </div>
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
                          eget. Quisque tempor vel lorem sit amet porttitor.
                          Mauris placerat euismod ligula, quis viverra ipsum
                          placerat in. Aliquam nec dui semper sem.
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
                          eget. Quisque tempor vel lorem sit amet porttitor.
                          Mauris placerat euismod ligula, quis viverra ipsum
                          placerat in. Aliquam nec dui semper sem.
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
                          eget. Quisque tempor vel lorem sit amet porttitor.
                          Mauris placerat euismod ligula, quis viverra ipsum
                          placerat in. Aliquam nec dui semper sem.
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
                          eget. Quisque tempor vel lorem sit amet porttitor.
                          Mauris placerat euismod ligula, quis viverra ipsum
                          placerat in. Aliquam nec dui semper sem.
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
                          eget. Quisque tempor vel lorem sit amet porttitor.
                          Mauris placerat euismod ligula, quis viverra ipsum
                          placerat in. Aliquam nec dui semper sem.
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
                          eget. Quisque tempor vel lorem sit amet porttitor.
                          Mauris placerat euismod ligula, quis viverra ipsum
                          placerat in. Aliquam nec dui semper sem.
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
                          eget. Quisque tempor vel lorem sit amet porttitor.
                          Mauris placerat euismod ligula, quis viverra ipsum
                          placerat in. Aliquam nec dui semper sem.
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
          <div className="bg-[#675237] h-[8rem] text-[#ebd7bb] w-full py-1 grid grid-rows-3 mt-10">
            <h1>Follow Us</h1>
            <div className="flex flex-row justify-center space-x-5">
              <button class="fa-brands fa-youtube fa-2xl hover:scale-125 transform transition duration-400"></button>
              <button class="fa-brands fa-twitter fa-2xl hover:scale-125 transform transition duration-400"></button>
              <button class="fa-brands fa-instagram fa-2xl hover:scale-125 transform transition duration-400"></button>
              <button class="fa-brands fa-facebook fa-2xl hover:scale-125 transform transition duration-400"></button>
              <button class="fa-brands fa-pinterest fa-2xl hover:scale-125 transform transition duration-400"></button>
            </div>
            <h1>&#169; Mahakarya 2022</h1>
          </div>
          {/* END:CONTENT PAGE */}
        </div>
        {/* START:SIDEBAR */}
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
        {/* END:SIDEBAR */}
      </div>
    </div>
  );
}
