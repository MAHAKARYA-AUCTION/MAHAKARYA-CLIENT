import timeNameFinder from "../helpers/timeNameFinder";
export default function LandingCollectionItem({ collection, isPastAuction }) {
  const startDate = new Date(collection.startDate);
  const endDate = new Date(collection.endDate);
  const [startDay, startMonth] = timeNameFinder(startDate);
  const [endDay, endMonth] = timeNameFinder(endDate);

  return (
    <div className="grid grid-cols-4 mt-10 space-x-5 relative">
      <div className="h-full overflow-hidden rounded-lg">
        <div
          className=" w-full bg-center bg-cover bg-no-repeat h-full"
          style={{ backgroundImage: `url('${collection.imgUrl}')` }}
        ></div>
        {/* <img
          src={collection.imgUrl}
          className=" w-[50%] scale-[107%] hover:scale-125 transform transition duration-600 rounded-lg img-cover"
        /> */}
      </div>
      <div className="grid grid-rows-4 text-xl text-left col-span-3">
        <div className="h-fit">
          <label className="">
            {collection.startDate.slice(8, 10)} {startMonth} -{" "}
            {collection.endDate.slice(8, 10)} {endMonth}{" "}
          </label>
          {/* <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
            40 Lots
          </label> */}
        </div>
        {/* <button className="btn rounded-3xl bg-transparent text-[#57240f] border-[#57240f] absolute top-0 right-0 hover:text-white hover:bg-[#57240f] hover:scale-105 transform transition duration-600 ">
          View Collection
        </button> */}
        <div className="row-span-3 space-y-2">
          <h1 className="font-bold text-3xl">{collection.name}</h1>
          <p className="collection-clamp text-justify tracking-wide">
            {collection.description}
          </p>
        </div>
      </div>
    </div>
  );
}
