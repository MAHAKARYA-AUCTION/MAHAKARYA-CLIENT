export default function LandingView() {
  return (
    <div className="flex flex-col justify-between h-min-screen">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* START:CONTENT PAGE */}
          <div className="space-y-16 w-[80%] mx-auto">
            {/* START:NAVBAR */}
            <div className="flex flex-row justify-between font-semibold h-32 items-center mt-10">
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
            <div className="h-[15vh] flex flex-row items-center justify-between">
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
            <div className="banner mx-auto hover:scale-[101%] transform transition duration-700"></div>
            {/* END:BANNER */}
            {/* START:LINE BREAK */}
            <div className="h-20 grid grid-cols-9 items-center mx-auto">
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
            {/* START: CURRENT COLLETION */}
            <div className="pb-10 space-y-16">
              <h1 className="font-bosque text-7xl font-bold">
                Current Collection
              </h1>
              <div className="grid grid-cols-2 items-baseline">
                <label className="font-bosque text-3xl font-semi-bold text-[#57240f] text-left">
                  TREASURES Fine Art
                </label>
                <div className="text-right">
                  <button className="font-bosque text-xl font-bold text-[#a35831] hover:scale-110 transform transition duration-400">
                    View Lots
                  </button>
                </div>
                {/* START: CURRENT COLECTION LIST */}
                <div className="grid grid-cols-5 w-full col-span-2 space-x-5 space-y-3 mt-10 justify-around grid-flow-row-dense">
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
                  {/* END: CURRENT COLLECTION CARD */}
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
                  {/* END: CURRENT COLLECTION CARD */}
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
                  {/* END: CURRENT COLLECTION CARD */}
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
                  {/* END: CURRENT COLLECTION CARD */}
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
                  {/* END: CURRENT COLLECTION CARD */}
                </div>
                {/* END: CURRENT COLECTION LIST */}
              </div>
            </div>
            {/* END:COLLETION */}
            {/* START:LINE BREAK */}
            <div className="h-20 grid grid-cols-9 items-center mx-auto">
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
            {/* START: CURRENT COLLETION */}
            <div className="min-h-screen space-y-16">
              <h1 className="font-bosque text-7xl font-bold">Past Auctions</h1>
              <div className="grid grid-cols-2 items-baseline">
                {/* START: CURRENT COLECTION LIST */}
                <div className="grid grid-cols-2 w-full col-span-2 space-x-5 space-y-3 mt-10 justify-around grid-flow-row-dense"></div>
                {/* END: CURRENT COLECTION LIST */}
              </div>
            </div>
            {/* END:COLLETION */}
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
