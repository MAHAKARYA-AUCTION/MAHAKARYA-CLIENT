export default function Navbar() {
  const menu = [
    {
      name: "Home",
      link: "/",
    },
  ];
  return (
    <>
      {/* START:TITLE */}
      <div className="h-[10vh] flex flex-row items-center justify-between w-[80%] mx-auto ">
        <div className="flex flex-row gap-4 items-center">
          <label className="font-bonVoyage landing-title font-bold">
            MAHAKARYA
          </label>
          <div className="flex flex-col justify-between h-full text-left gap-4 pb-4 items-center">
            <label className="font-bosque font-bold text-7xl">Auction</label>
            <label className="font-bosque text-3xl">Search Bid Buy!</label>
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
      {/* START:MENU */}
      <div className="mt-7">
        <div className="w-[80%] mx-auto">
          <hr className="bg-[#57240f] h-2" />
          <hr className="bg-[#57240f] h-1" />
        </div>
        <div className="navbar sticky top-0 z-50 bg-[#ebd7bb]">
          <div className="navbar-start"></div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal p-0 poppins text-xl font-semibold space-x-4">
              <li>
                <button className="x-6 py-3 poppins font-semibold mr-2 hover:scale-110 transform transition duration-400">
                  Menu 1
                </button>
              </li>
              <li>
                <button className="x-6 py-3 poppins font-semibold mr-2 hover:scale-110 transform transition duration-400">
                  Menu 2
                </button>
              </li>
              <li>
                <button className="x-6 py-3 poppins font-semibold mr-2 hover:scale-110 transform transition duration-400">
                  Menu 3
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-end"></div>
        </div>
        <div className="w-[80%] mx-auto">
          <hr className="bg-[#57240f] h-2" />
          <hr className="bg-[#57240f] h-1" />
        </div>
      </div>
      {/* END:MENU */}
    </>
  );
}
