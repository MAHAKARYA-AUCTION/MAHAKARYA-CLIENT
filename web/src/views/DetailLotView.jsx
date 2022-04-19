import Navbar from "../components/navbar";
import Slider from "react-slick";
import Footer from "../components/footer";
import BidTableItem from "../components/bidTableItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NumberInput from "../components/numberInputs";
import { useBarcode } from "react-barcodes";
import { useCountdown } from "../hooks/useCountdown";
import { useEffect, useState } from "react";
import formatRupiah from "../helpers/formatPrice";
import Swal from "sweetalert2";
import swal from "../helpers/swalToast";
import { useDispatch, useSelector } from "react-redux";
import { fetchLotById } from "../store/actions/lots";
import { useParams } from "react-router-dom";
import Palette from "react-palette";
import { usePalette } from "react-palette";

export default function DetailLotView({ lot = { startingBid: 1000000 } }) {
  // Placeholder Time
  // tomorrow.setDate(tomorrow.getDate() + 1);
  const [bidAmount, setBidAmount] = useState(0);
  const { lot: lotData } = useSelector((state) => state.lotsReducer);
  const [days, hours, minutes, seconds] = useCountdown(
    lotData?.Collection?.endDate
  );

  const { id } = useParams();
  const dispatch = useDispatch();

  // const [data, setData] = useState({
  //   name: "",
  //   description: "",
  //   size: "",
  //   startingBid: "",
  //   CollectionId: "",
  //   lotNumber: "",
  //   primaryImage: ""
  // });

  useEffect(() => {
    dispatch(fetchLotById(id));
  }, []);

  // console.log(lotData.primaryImage);

  const bids = [
    {
      id: 4,
      bidPrice: 4500000,
      Users: {
        username: "Jhon Doe",
      },
    },
    {
      id: 3,
      bidPrice: 4000000,
      Users: {
        username: "Konstadina Kondwani",
      },
    },
    {
      id: 2,
      bidPrice: 2700000,
      Users: {
        username: "Budiman Perkasa",
      },
    },
    {
      id: 1,
      bidPrice: 1500000,
      Users: {
        username: "Jhonny Krugger",
      },
    },
  ];

  // console.log(lotData);

  function bidHandler(bid) {
    Swal.fire({
      title: "Bid " + formatRupiah(bid + bidAmount),
      color: "#080504",
      background: "#ebd7bb",
      showDenyButton: false,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Bid",
      confirmButtonColor: "#a35831",
      cancelButtonColor: "#702F13",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setBidAmount(bid + bids[0].bidPrice);
        swal("success", "Bid Success");
        setBidAmount(0);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  //BARCODE SETTING
  const { inputRef } = useBarcode({
    value: "http://localhost:3000/lot/1",
    options: {
      background: "#ebd7bb",
      displayValue: false,
    },
  });

  let { data, loading, error } = usePalette(lotData.primaryImage);
  let swatch = Object.values(data);
  console.log(swatch[0]);

  return (
    <div className="flex flex-col justify-between pt-10">
      <Navbar />
      <div className="w-[80vw] mx-auto my-10 min-h-[64vh]">
        <div className="flex sm:flex-col xl:flex-row h-full">
          <div className="sm:w-full xl:w-1/2 flex flex-col">
            {/* START:IMAGE CAROUSEL */}
            <Slider
              {...settings}
              className="w-[80%] mx-auto col-span-2 row-span-2"
            >
              {lotData?.primaryImage && (
                <div className="object-fit w-[720px] h-[480px] bg-no-repeat bg-center">
                  <div
                    className="w-full h-full bg-no-repeat bg-center bg-contain"
                    style={{ backgroundImage: `url(${lotData.primaryImage})` }}
                  ></div>
                </div>
              )}
              {lotData?.secondImage && (
                <div className="object-fit w-[720px] h-[480px] bg-no-repeat bg-center">
                  <div
                    className="w-full h-full bg-no-repeat bg-center bg-contain"
                    style={{ backgroundImage: `url(${lotData.secondImage})` }}
                  ></div>
                </div>
              )}
              {lotData?.thirdImage && (
                <div className="object-fit w-[720px] h-[480px] bg-no-repeat bg-center">
                  <div
                    className="w-full h-full bg-no-repeat bg-center bg-contain"
                    style={{ backgroundImage: `url(${lotData.thirdImage})` }}
                  ></div>
                </div>
              )}
            </Slider>
            {/* END:IMAGE CAROUSEL */}
          </div>
          <div className="sm:w-full xl:w-1/2 flex flex-col">
            <div className="text-left flex flex-row justify-between">
              <div className="w-2/3">
                <label className="text-center text-xl align-middle p-[1px] btn-circle font-semibold">
                  Lot {lotData?.lotNumber}
                </label>
                <h1 className="text-6xl font-bold font-bosque">
                  {lotData?.name}
                </h1>
                <h2 className="text-2xl font-bold font-bosque bg-[#F8F1E7] border border-[#57240f] rounded-full w-fit px-3 py-[1px] text-[#57240f]">
                  {lotData?.artistName}
                </h2>
              </div>
              <img ref={inputRef} className="w-1/3" />,
            </div>
            <div className="flex flex-col font-poppins text-xl text-left pt-4">
              <table className="w-1/2">
                <tbody>
                  <tr>
                    <td>Size</td>
                    <td>:</td>
                    <td>{lotData?.size}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td colSpan={2}>:</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-justify">{lotData?.description}</p>
            </div>
            <div className="flex flex-col">
              <div style={{ backgroundColor: `${swatch[0]}` }}>
                {""}
                <p>{"_"}</p>
              </div>
              <div style={{ backgroundColor: `${swatch[1]}` }}>
                {""}
                <p>{"_"}</p>
              </div>
              <div style={{ backgroundColor: `${swatch[2]}` }}>
                {""}
                <p>{"_"}</p>
              </div>
              <div style={{ backgroundColor: `${swatch[3]}` }}>
                {""}
                <p>{"_"}</p>
              </div>
              <div style={{ backgroundColor: `${swatch[4]}` }}>
                {""}
                <p>{"_"}</p>
              </div>
              <div style={{ backgroundColor: `${swatch[5]}` }}>
                {""}
                <p>{"_"}</p>
              </div>
            </div>
            <div
              tabIndex="0"
              className="collapse collapse-arrow border-2 border-[#675237] rounded-box mt-5 pl-5 shadow-sm overflow-visible"
            >
              {/* START:Table Header */}
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-medium h-48 text-left flex flex-col ">
                {days + hours + minutes + seconds > 0 ? (
                  <>
                    <div className="relative flex items-center">
                      <div className="flex-grow border-t border-[#675237]"></div>
                      {/* START:Countdown Timer */}
                      <div className="flex-shrink mx-4 flex flex-col font-poppins">
                        <label className="text-center">Auction Ends At</label>
                        <label className="space-x-2">
                          <span className="font-semibold text-[#57240f]">
                            {days}
                          </span>{" "}
                          Days
                          <span className="font-semibold  text-[#57240f]">
                            {hours}
                          </span>{" "}
                          Hours
                          <span className="font-semibold  text-[#57240f]">
                            {minutes}
                          </span>{" "}
                          Mins
                          <span className="font-semibold  text-[#57240f]">
                            {seconds}
                          </span>{" "}
                          Seconds
                        </label>
                      </div>
                      {/* END:Countdown Timer */}
                      <div className="flex-grow border-t border-[#675237]"></div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="w-2/3 ">
                        <label>Minimum Bid</label>
                        <h1 className="text-6xl font-bold font-bosque tracking-widest">
                          {formatRupiah(bids[0].bidPrice + 100000)}
                        </h1>
                      </div>
                      <div className="flex flex-col justify-center">
                        {/* START:BID Dropdown */}
                        <div className="dropdown dropdown-left">
                          <button
                            tabIndex="0"
                            className="btn bg-[#ebd7bb] px-6 poppins font-semibold text-3xl mr-2 hover:scale-110
                   transform transition duration-400 border-2 text-[#57240f] border-[#57240f]
                    rounded-xl hover:bg-[#57240f] hover:text-[#cdbba6]  focus:bg-[#57240f] focus:text-[#cdbba6] focus:scale-110 text-center hover:border-0 "
                          >
                            Bid
                          </button>
                          <ul
                            tabIndex="0"
                            className="dropdown-content menu p-2 bg-[#F0E2CD] rounded-box w-32 z-50 shadow-2xl font-poppins text-center"
                          >
                            <li>
                              <a
                                onClick={() => {
                                  bidHandler(500000);
                                }}
                              >
                                500 K
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => {
                                  bidHandler(1000000);
                                }}
                              >
                                1 M
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => {
                                  bidHandler(2000000);
                                }}
                              >
                                2 M
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => {
                                  bidHandler(5000000);
                                }}
                              >
                                5 M
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* END:BID Dropdown */}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mx-auto flex flex-col justify-center items-center h-full">
                      <h1 className="text-3xl font-bosque">Auctions Ends</h1>
                      <p className="text-3xl font-bosque ">
                        Sold with price{" "}
                        <span className="font-bold tracking-wide">
                          Rp. 4.500.000
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </div>
              {/* END:Table Header */}
              {/* START:Table Bid */}
              <div className="collapse-content overflow-x-auto w-full">
                <div className="overflow-x-auto w-full z-40 table-bid scrollbar-thin scrollbar-thumb-amber-900 scrollbar-track-[#cdbba6] ">
                  <table className="table relative w-full bid-table">
                    <thead className="sticky">
                      <tr>
                        <th className="bg-[#b58e67]"></th>
                        <th className="bg-[#b58e67]">Price</th>
                        <th className="bg-[#b58e67]">Bidder</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bids.map((bid, index) => {
                        return (
                          <BidTableItem
                            key={bid.id}
                            bid={bid}
                            index={index}
                            previousPrice={
                              bids[index + 1]
                                ? bids[index + 1].bidPrice
                                : lot.startingBid
                            }
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* END:Table Bid */}
            </div>
          </div>
        </div>
      </div>
      {/* <Palette src={lotData.primaryImage}>
        {({ data, loading, error }) => (
          <div style={{ color: data.vibrant }}>Text with the vibrant color</div>
        )}
      </Palette> */}
      <Footer />
    </div>
  );
}
