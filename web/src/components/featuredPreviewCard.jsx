import { Link } from "react-router-dom";
export default function FeaturedPreviewCard({ lot }) {
  return (
    <div className="w-[80%] h-[full] text-xl space-y-3 mx-auto hover:scale-105 transform transition duration-600">
      <Link to={"/lot/" + lot.id}>
        <div
          className="w-[300px] h-[200px] bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${lot.primaryImage})` }}
        >
          {" "}
          <div className="text-left poppins text-[#675237] flex flex-col justify-between items-end">
            <div className="flex flex-col flex-auto">
              <div className="">
                <label className=" text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                  {lot.artistName}
                </label>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-bold text-xl ">{lot.name}</h1>
      </Link>

      {/* <div>
        <img
          src={lot.primaryImage}
          className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
          alt="something"
        />
      </div>
      <div className="text-left poppins text-[#675237] flex flex-col justify-between items-end">
        <div className="flex flex-col flex-auto">
          <h1 className="text-bold text-3xl ">{lot.name}</h1>
          <div className="">
            <label className=" text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
              {lot.artistName}
            </label>
          </div>
    <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
      <img
        src={lot.primaryImage}
        className="w-full h-48 rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
        alt="something"
      />
      <div className="text-left poppins text-[#675237] flex flex-col justify-start space-y-5 ">
        <div className="flex flex-col flex-auto justify-start">
          <h1 className="text-bold text-3xl clamp">{lot.name}</h1>
          {/* <div className="w-auto"> */}
      {/* from fadhil */}
      {/* <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] text-sm clamp w-fit">
            {lot.artistName}
          </label> */}
      {/* from fadhil */}
      {/* </div> */}
      {/* from fadhil */}
      {/* </div>
        <div className="flex flex-row-reverse">
          <button className=" btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
            Details
          </button>
        </div> */}
      {/* from fadhil */}
    </div>
    // </div>
  );
}
