export default function FeaturedPreviewCard({ lot }) {
  return (
    <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
      <img
        src={lot.primaryImage}
        className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
        alt="something"
      />
      <div className="text-left poppins text-[#675237] flex flex-col justify-between items-end">
        <div className="flex flex-col flex-auto">
          <h1 className="text-bold text-3xl ">{lot.name}</h1>
          <div>
            <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
              {lot.artistName}
            </label>
          </div>
        </div>
        <div>
          <button className=" btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
