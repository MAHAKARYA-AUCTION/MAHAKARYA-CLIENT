import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Navbar() {
  const navigate = useNavigate();
  const doLogout = () => {
    localStorage.clear();
    Swal.fire({
      icon: "success",
      iconColor: "#57240f",
      title: "Logged Out!",
      text: "Come back soon",
      color: "#080504",
      background: "#ebd7bb",
      confirmButtonColor: "#a35831",
    });
    navigate("/");
  };

  return (
    <>
      {/* START:TITLE */}
      <div className="h-[10vh] flex flex-row items-center justify-between w-[80%] mx-auto ">
        <div className="flex flex-row gap-4 items-center">
          <Link to="/">
            <button className="font-bonVoyage landing-title font-bold hover:text-[#080504] transform duration-700">
              MAHAKARYA
            </button>
          </Link>

          <div className="flex flex-col justify-between h-full text-left gap-4 pb-4 items-center">
            <label className="font-bosque font-bold text-7xl">Auction</label>
            <label className="font-bosque text-3xl">Search Bid Buy!</label>
          </div>
        </div>

        <div className="grid grid-rows-4 grid-flow-col w-[18%] justify-end sm:invisible xl:visible mb-5">
          <div className="row-span-4 justify-center items-center flex">
            <div className="pb-3">
              <img
                src={require("../resources/img/MAHAKARYA_LOGO.png")}
                className=""
                height={800}
                width={800}
                alt="sphere"
              />
            </div>
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
                <Link to="/virtual-gallery">
                  <button className="x-6 py-3 poppins font-semibold mr-5 hover:scale-110 transform transition duration-400">
                    Virtual Gallery
                  </button>
                </Link>
                <Link to="/ar-gallery">
                  <button className="x-6 py-3 poppins font-semibold mr-2 hover:scale-110 transform transition duration-400">
                    AR Gallery
                  </button>
                </Link>
              </li>
              {localStorage.getItem("access_token") ? (
                <>
                  <li>
                    <Link to={"/profile"}>
                      <button className="x-6 py-3 poppins font-semibold mr-2 hover:scale-110 transform transition duration-400">
                        Profile
                      </button>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={doLogout}
                      className="x-6 py-3 poppins font-semibold mr-2 hover:scale-110 transform transition duration-400"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/register">
                      <button className="x-6 py-3 poppins font-semibold mr-2 hover:scale-110 transform transition duration-400">
                        Register
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <button className="x-6 py-3 poppins font-semibold mr-2 hover:scale-110 transform transition duration-400">
                        Login
                      </button>
                    </Link>
                  </li>
                </>
              )}
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
