import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useCountdown } from "../hooks/useCountdown";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCollection,
  fetchLotsByCollectionId,
} from "../store/actions/lots";
import { useParams } from "react-router-dom";
import LotCard from "../components/lotCard";

export default function CollectionList() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { collection, lots } = useSelector((state) => state.lotsReducer);
  const [filter, setFilter] = useState({
    name: "",
    artistName: "",
    startingBid: "",
  });
  const [sortBy, setSortBy] = useState("");
  const [refetchSwitch, setRefetchSwitch] = useState(false);

  useEffect(() => {
    dispatch(fetchCollection(id));
  }, []);

  useEffect(() => {
    dispatch(fetchLotsByCollectionId({ id, filter }));
    setSortBy("");
  }, [refetchSwitch]);

  useEffect(() => {}, [sortBy]);

  let sortedLots;
  if (sortBy === "highestPrice") {
    sortedLots = lots.sort((a, b) => b.startingBid - a.startingBid);
  } else if (sortBy === "lowestPrice") {
    sortedLots = lots.sort((a, b) => a.startingBid - b.startingBid);
  } else {
    sortedLots = lots.sort((a, b) => a.id - b.id);
  }

  var tomorrow = new Date(collection.endDate);
  const [days, hours, minutes, seconds] = useCountdown(tomorrow);

  const [pageNumber, setPageNumber] = useState(1);
  const [limit] = useState(8);
  const offset = pageNumber * limit - limit;
  let paginatedLots = sortedLots.slice(offset, offset + limit);

  function filterHandler(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const newFilter = { ...filter, [name]: value };
    setFilter(newFilter);
  }

  function refetch() {
    setRefetchSwitch(!refetchSwitch);
  }

  function handlePrev() {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  }

  function handleNext() {
    if (pageNumber === Math.ceil(collection.Lots.length / limit)) return;
    setPageNumber(pageNumber + 1);
  }

  function handleSort(sortBy) {
    setSortBy(sortBy);
  }

  return (
    <div className="flex flex-col justify-between h-min-screen pt-10">
      <Navbar />
      <div className="my-10 mx-auto rounded-xl relative w-[99vw] ">
        <img
          src={collection.imgUrl}
          className="collection-banner w-[100vw] absolute z-0 brightness-75"
          alt="collection banner"
        ></img>
        <div className="z-50 relative text-[#F8F1E7] font-bold mt-64 mb-16  w-[80%] mx-auto space-y-5 flex flex-row">
          <div className="w-1/2">
            <h1 className=" font-bosque text-7xl text-left tracking-widest">
              {collection.name}
            </h1>
            <p className="text-xl font-poppins text-left tracking-wider leading-10 mt-2">
              {collection.description}
            </p>
          </div>
          <div className="w-1/2">
            {days + hours + minutes + seconds < 0 ? (
              <h1 className=" font-poppins text-3xl tracking-widest">
                Auction Has Ended
              </h1>
            ) : (
              <>
                <h1 className=" font-poppins text-2xl tracking-widest">
                  Auction End at
                </h1>
                <div className="bg-[#ebd7bb] rounded-xl shadow-2xl text-[#57240f] grid grid-cols-4 poppins font-bold py-2">
                  <div className="border-r-2 border-white flex flex-col justify-center items-center">
                    <label className="text-3xl">{days ? days : ""}</label>
                    <label className="text-xl">Day</label>
                  </div>
                  <div className="border-r-2 border-white flex flex-col justify-center items-center">
                    <label className="text-3xl">{hours ? hours : ""}</label>
                    <label className="text-xl">Hours</label>
                  </div>
                  <div className="border-r-2 border-white flex flex-col justify-center items-center">
                    <label className="text-3xl">{minutes ? minutes : ""}</label>
                    <label className="text-xl">Minutes</label>
                  </div>
                  <div className=" border-white flex flex-col justify-center items-center">
                    <label className="text-3xl">{seconds ? seconds : ""}</label>
                    <label className="text-xl">Seconds</label>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-[80%] flex flex-col mx-auto z-50 relative bg-[#F8F1E7] rounded-lg pb-10 first-letter:shadow-2xl border-[#675237] space-y-12">
          <h1 className="font-bosque text-6xl text-center my-10 font-semibold">
            Lot List
          </h1>
          <div className="flex flex-row px-5 divide-x-2 divide-[#675237] h-[100%]">
            <div className="flex flex-col w-1/4 space-y-10 px-5  font-poppins tracking-wider">
              <h1 className="font-poppins text-2xl font-semibold ">Filter</h1>
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-xl">Painting Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  onChange={filterHandler}
                  value={filter.name}
                />
                <label className="label">
                  <span className="label-text-alt text-base">
                    Find painting by it's name
                  </span>
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-xl">Painter Name</span>
                </label>
                <input
                  type="text"
                  name="artistName"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  onChange={filterHandler}
                  value={filter.artistName}
                />
                <label className="label">
                  <span className="label-text-alt text-base">
                    Find painting by it's painter
                  </span>
                </label>
              </div>
              <button
                className="btn bg-[#ebd7bb] text-[#57240f] border-[#57240f] hover:scale-105 hover:text-[#ebd7bb] hover:bg-[#57240f] transform transition duration-400"
                onClick={refetch}
              >
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
                      <button
                        onClick={() => {
                          handleSort("");
                        }}
                      >
                        Lot Number
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleSort("highestPrice");
                        }}
                      >
                        Price: Highest to Lowest
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleSort("lowestPrice");
                        }}
                      >
                        Price: Lowest to Highest
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end items-baseline">
                  <h1 className="text-2xl font-poppins align-middle font-semibold">
                    {lots.length} Lots
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-4 grid-flow-row p-5 space-x-2 space-y-6 items-baseline">
                {paginatedLots.map((lot, index) => {
                  return (
                    <LotCard
                      key={lot.id}
                      lot={lot}
                      lotNumber={offset + index + 1}
                    />
                  );
                })}
              </div>
              <div className="flex flex-row justify-center">
                <div className="btn-group">
                  <button
                    className="btn bg-[#ebd7bb] border-[#57240f] text-[#57240f]  hover:bg-[#451D0C] hover:text-[#ebd7bb] text-xl"
                    onClick={handlePrev}
                  >
                    «
                  </button>
                  <button className="btn border-y-2 border-x-0 bg-[#ebd7bb] border-[#57240f] text-[#57240f]  hover:bg-[#ebd7bb]">
                    Page {pageNumber}
                  </button>
                  <button
                    className="btn bg-[#ebd7bb] border-l-0 border-[#57240f] text-[#57240f]  hover:bg-[#451D0C] hover:text-[#ebd7bb]"
                    onClick={handleNext}
                  >
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
