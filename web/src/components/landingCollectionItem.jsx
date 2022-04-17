export default function LandingCollectionItem({ collection, isPastAuction }) {
  return (
    <div
      className={
        "grid grid-cols-4 mt-10 space-x-5" + isPastAuction ? "relative" : ""
      }
    >
      <div className="h-full">
        <img
          src="https://loremflickr.com/g/320/240/art"
          alt="collection-item"
          className="hover:scale-105 transform transition duration-600 max-h-[170.59px] bg-cover rounded-lg w-full"
        />
      </div>
      <div className="grid grid-rows-4 text-xl text-left col-span-3">
        <div className="">
          <label className="">27 APR - 2 MEI</label>
          {isPastAuction && (
            <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
              | 40 Lots
            </label>
          )}
        </div>
        {isPastAuction && (
          <button className="btn rounded-3xl bg-transparent text-[#57240f] border-[#57240f] absolute top-0 right-0 hover:text-white hover:bg-[#57240f] hover:scale-105 transform transition duration-600 ">
            View Collection
          </button>
        )}

        <div className="row-span-3 space-y-2">
          <h1 className="font-bold text-3xl">Collection Name</h1>
          <p>
            In posuere quam nulla, eget tincidunt quam scelerisque eget. Quisque
            tempor vel lorem sit amet porttitor. Mauris placerat euismod ligula,
            quis viverra ipsum placerat in. Aliquam nec dui semper sem.
          </p>
        </div>
      </div>
    </div>
  );
}
