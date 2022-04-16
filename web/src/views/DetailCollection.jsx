import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useCountdown } from "../hooks/useCountdown";

export default function CollectionList() {
  var tomorrow = new Date("17 Apr 2022");
  const [days, hours, minutes, seconds] = useCountdown(tomorrow);
  return (
    <div className="flex flex-col justify-between h-min-screen pt-10">
      <Navbar />
      <div className="my-10 mx-auto rounded-xl relative w-[99vw] ">
        <img
          src={require("../resources/img/placeholder-banner.jpg")}
          className="collection-banner w-[100vw] absolute z-0 brightness-75"
        ></img>
        <div className="z-50 relative text-[#F8F1E7] font-bold mt-64 mb-16  w-[80%] mx-auto space-y-5 flex flex-row">
          <div className="w-1/2">
            <h1 className=" font-bosque text-7xl text-left tracking-widest">
              Collection Name
            </h1>
            <p className="text-xl font-poppins text-left tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              varius mi sed tortor accumsan consequat. In hac habitasse platea
              dictumst. Vivamus in tempor enim. Interdum et malesuada fames ac
              ante.
            </p>
          </div>
          <div className="w-1/2">
            <h1 className=" font-poppins text-2xl tracking-widest">
              Auction End at
            </h1>
            <div className="bg-[#ebd7bb] rounded-xl shadow-2xl text-[#57240f] grid grid-cols-4 poppins font-bold py-2">
              <div className="border-r-2 border-white flex flex-col justify-center items-center">
                <label className="text-3xl">{days}</label>
                <label className="text-xl">Day</label>
              </div>
              <div className="border-r-2 border-white flex flex-col justify-center items-center">
                <label className="text-3xl">{hours}</label>
                <label className="text-xl">Hours</label>
              </div>
              <div className="border-r-2 border-white flex flex-col justify-center items-center">
                <label className="text-3xl">{minutes}</label>
                <label className="text-xl">Minutes</label>
              </div>
              <div className=" border-white flex flex-col justify-center items-center">
                <label className="text-3xl">{seconds}</label>
                <label className="text-xl">Seconds</label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] flex flex-col mx-auto z-50 relative bg-[#F8F1E7] rounded-lg pb-10 first-letter:shadow-2xl border-[#675237] space-y-12">
          <h1 className="font-bosque text-6xl text-center my-10 font-semibold">
            {" "}
            Lot List{" "}
          </h1>
          <div className="flex flex-row px-5 divide-x-2 divide-[#675237] h-[100%]">
            <div className="flex flex-col w-1/4 space-y-10 px-5">
              <h1 className="font-poppins text-2xl font-semibold tracking-wider">
                Filter
              </h1>
              <div className="form-control w-full font-poppins">
                <label className="label">
                  <span className="label-text text-xl">Painting Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text-alt text-base">
                    Find painting by it's name
                  </span>
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-xl">Painter Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text-alt text-base">
                    Find painting by it's painter
                  </span>
                </label>
              </div>
              <button className="btn bg-[#ebd7bb] text-[#57240f] border-[#57240f] hover:scale-105 hover:text-[#ebd7bb] hover:bg-[#57240f] transform transition duration-400">
                Filter
              </button>
            </div>
            <div className="flex flex-col w-3/4 px-3">
              <div className="flex flex-row justify-between px-5 pr-14">
                <div className="dropdown font-poppins">
                  <label
                    tabIndex="0"
                    className="btn m-1 bg-[#ebd7bb] text-[#57240f] border-[#57240f] hover:scale-105 hover:text-[#ebd7bb] hover:bg-[#57240f] focus:text-[#ebd7bb] focus:bg-[#57240f] transform transition duration-400"
                  >
                    <i className="fa-solid fa-filter fa-xl mr-1" />
                    Sort By
                  </label>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-left"
                  >
                    <li>
                      <a>Lot Number</a>
                    </li>
                    <li>
                      <a>Bottom Price: Highest to Lowest</a>
                    </li>
                    <li>
                      <a>Bottom Price: Lowest to Highest</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end items-baseline">
                  <h1 className="text-2xl font-poppins align-middle font-semibold">
                    21 Lots
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-4 grid-flow-row p-5 space-x-1 space-y-3 items-baseline">
                <div className="card card-compact w-80 bg-[#F8F1E7] shadow-xl hover:scale-105 relative overflow-hidden">
                  <figure>
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body font-poppins">
                    <div className="flex flex-row justify-between">
                      <h2 className="card-title">Shoes!</h2>
                    </div>
                    <div className="text-left">
                      <p className="text-base">
                        Painter :
                        <span className=" ml-1 font-semibold text-lg">
                          Jhon Doe
                        </span>
                      </p>
                      <p className="text-base">
                        Current Price :
                        <span className=" ml-1 font-semibold text-lg">
                          Rp 1.500.000
                        </span>
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn bg-[#702F13] text-[#ebd7bb] border-0 hover:bg-[#451D0C]">
                        See Lot
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end absolute shadow-2xl">
                    <label className="text-[#ebd7bb] px-3 py-1 rounded-br-lg bg-[#a35831] w-auto text-sm top-5">
                      Lot 1
                    </label>
                  </div>
                </div>
                <div className="card card-compact w-80 bg-[#F8F1E7] shadow-xl hover:scale-105 relative overflow-hidden">
                  <figure>
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body font-poppins">
                    <div className="flex flex-row justify-between">
                      <h2 className="card-title">Shoes!</h2>
                    </div>
                    <div className="text-left">
                      <p className="text-base">
                        Painter :
                        <span className=" ml-1 font-semibold text-lg">
                          Dani Baswani
                        </span>
                      </p>
                      <p className="text-base">
                        Current Price :
                        <span className=" ml-1 font-semibold text-lg">
                          Rp 10.500.000
                        </span>
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn bg-[#702F13] text-[#ebd7bb] border-0 hover:bg-[#451D0C]">
                        See Lot
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end absolute">
                    <label className="text-[#ebd7bb] px-3 py-1 rounded-br-lg shadow-2xl bg-[#a35831] w-auto text-sm top-5">
                      Lot 2
                    </label>
                  </div>
                </div>
                <div className="card card-compact w-80 bg-[#F8F1E7] shadow-xl hover:scale-105 relative overflow-hidden">
                  <figure>
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body font-poppins">
                    <div className="flex flex-row justify-between">
                      <h2 className="card-title">Shoes!</h2>
                    </div>
                    <div className="text-left">
                      <p className="text-base">
                        Painter :
                        <span className=" ml-1 font-semibold text-lg">
                          Bagas Bagaskoro
                        </span>
                      </p>
                      <p className="text-base">
                        Current Price :
                        <span className=" ml-1 font-semibold text-lg">
                          Rp 2.650.000
                        </span>
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn bg-[#702F13] text-[#ebd7bb] border-0 hover:bg-[#451D0C]">
                        See Lot
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end absolute">
                    <label className="text-[#ebd7bb] px-3 py-1 rounded-br-lg shadow-2xl bg-[#a35831] w-auto text-sm top-5">
                      Lot 3
                    </label>
                  </div>
                </div>
                <div className="card card-compact w-80 bg-[#F8F1E7] shadow-xl hover:scale-105 relative overflow-hidden">
                  <figure>
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body font-poppins">
                    <div className="flex flex-row justify-between">
                      <h2 className="card-title">Shoes!</h2>
                    </div>
                    <div className="text-left">
                      <p className="text-base">
                        Painter :
                        <span className=" ml-1 font-semibold text-lg">
                          Doe Jhonson
                        </span>
                      </p>
                      <p className="text-base">
                        Current Price :
                        <span className=" ml-1 font-semibold text-lg">
                          Rp 4.000.000
                        </span>
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn bg-[#702F13] text-[#ebd7bb] border-0 hover:bg-[#451D0C]">
                        See Lot
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end absolute">
                    <label className="text-[#ebd7bb] px-3 py-1 rounded-br-lg shadow-2xl bg-[#a35831] w-auto text-sm top-5">
                      Lot 4
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <div className="btn-group">
                  <button className="btn bg-[#ebd7bb] border-[#57240f] text-[#57240f]  hover:bg-[#451D0C] hover:text-[#ebd7bb] text-xl">
                    «
                  </button>
                  <button className="btn border-y-2 border-x-0 bg-[#ebd7bb] border-[#57240f] text-[#57240f]  hover:bg-[#ebd7bb]">
                    Page 22
                  </button>
                  <button className="btn bg-[#ebd7bb] border-l-0 border-[#57240f] text-[#57240f]  hover:bg-[#451D0C] hover:text-[#ebd7bb]">
                    »
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
