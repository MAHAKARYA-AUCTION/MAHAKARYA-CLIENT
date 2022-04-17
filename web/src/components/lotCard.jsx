import formatRupiah from "../helpers/formatPrice";

export default function LotCard({ lot, lotNumber }) {
  return (
    <div className="card card-compact w-80 bg-[#F8F1E7] shadow-xl hover:scale-105 relative overflow-hidden">
      <figure>
        <img src={lot.primaryImage} alt="Lot Picture" />
      </figure>
      <div className="card-body font-poppins">
        <div className="flex flex-row justify-between">
          <h2 className="card-title">{lot.name}</h2>
        </div>
        <div className="text-left">
          <p className="text-base">
            Painter :
            <span className=" ml-1 font-semibold text-lg">
              {lot.artistName}
            </span>
          </p>
          <p className="text-base">
            Current Price :
            <span className=" ml-1 font-semibold text-lg">
              {formatRupiah(
                lot.Bids[0] ? lot.Bids[0].bidPrice : lot.startingBid
              )}
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
          Lot {lotNumber}
        </label>
      </div>
    </div>
  );
}
