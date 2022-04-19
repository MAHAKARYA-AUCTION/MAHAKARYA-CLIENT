import formatRupiah from "../helpers/formatPrice";

export default function BidTableItem({ bid, index, previousPrice }) {
  return (
    <tr>
      <th className="bg-[#F8F1E7] text-center text-2xl">
        {index === 0 ? <i className="fa-solid fa-crown"></i> : index + 1}
      </th>
      <td className="bg-[#F8F1E7]">
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold text-3xl">{formatRupiah(bid.price)}</div>
            <div className="text-xm opacity-70 tracking-widest">
              {Math.floor(((bid.price - previousPrice) / previousPrice) * 100)}{" "}
              % increase from previous price
            </div>
          </div>
        </div>
      </td>
      <td className="bg-[#F8F1E7] text-xl">{bid.username}</td>
    </tr>
  );
}
