import Navbar from "../components/navbar";
import Slider from "react-slick";
import Footer from "../components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBarcode } from "react-barcodes";
import { useCountdown } from "../hooks/useCountdown";

export default function DetailLotView() {
  // Placeholder Time
  var tomorrow = new Date("17 Apr 2022");
  // tomorrow.setDate(tomorrow.getDate() + 1);

  const [days, hours, minutes, seconds] = useCountdown(tomorrow);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const { inputRef } = useBarcode({
    value: "http://localhost:3000/lot/1",
    options: {
      background: "#ebd7bb",
      displayValue: false,
    },
  });
  return (
    <div className="flex flex-col justify-between pt-10">
      <Navbar />
      <div className="w-[80vw] mx-auto my-10 min-h-[80vh]">
        <div className="flex flex-row h-full">
          <div className="w-1/2 flex flex-col">
            {/* START:IMAGE CAROUSEL */}
            <Slider
              {...settings}
              className="w-[80%] mx-auto col-span-2 row-span-2"
            >
              <div className="object-fit w-[720px] h-[480px] bg-[url(https://loremflickr.com/720/480/painting?lock=1)] bg-no-repeat bg-center"></div>
              <div className="object-fit w-[720px] h-[480px] bg-[url(https://loremflickr.com/720/480/painting?lock=1234)] bg-no-repeat bg-center"></div>
              <div className="object-fit w-[720px] h-[480px] bg-[url(https://loremflickr.com/720/480/painting?lock=145)] bg-no-repeat bg-center"></div>
            </Slider>
            {/* END:IMAGE CAROUSEL */}
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="text-left flex flex-row justify-between">
              <div className="w-2/3">
                <label className="text-center text-xl align-middle p-[1px] btn-circle font-semibold">
                  Lot 1
                </label>
                <h1 className="text-6xl font-bold font-bosque">
                  Painting Name
                </h1>
                <h2 className="text-2xl font-bold font-bosque bg-[#F8F1E7] border border-[#57240f] rounded-full w-fit px-3 py-[1px] text-[#57240f]">
                  Artist Name
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
                    <td>24 cm x 60 cm</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td colSpan={2}>:</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-justify">
                Signed and stamped in Chinese character, upper left Signed and
                dated, lower left: Soo Pieng'59
              </p>
            </div>
            <div
              tabIndex="0"
              className="collapse collapse-arrow border-2 border-[#675237] rounded-box mt-5 pl-5 shadow-sm"
            >
              {/* START:Table Header */}
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-medium h-48 text-left flex flex-col ">
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
                      Rp.4.700.000
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center">
                    <button
                      className="btn bg-[#ebd7bb] px-6 poppins font-semibold text-3xl mr-2 hover:scale-110
                   transform transition duration-400 border-2 text-[#57240f] border-[#57240f]
                    rounded-3xl hover:bg-[#57240f] hover:text-[#cdbba6]  text-center hover:border-0"
                    >
                      <label htmlFor="my-modal-5" className="modal-button">
                        Bid
                      </label>
                    </button>
                  </div>
                  {/* START:BID MODAL */}
                  <input
                    type="checkbox"
                    id="my-modal-5"
                    className="modal-toggle"
                  />
                  <div className="modal ">
                    <div className="modal-box w-10/12 relative bg-[#ebd7bb]">
                      <label
                        htmlFor="my-modal-5"
                        className="btn btn-sm btn-circle absolute right-2 top-2 bg-[#57240f] hover:scale-125 transform transition duration-400 border-2 text-[#F8F1E7] border-[#57240f]
                        rounded-3xl hover:bg-[#57240f] hover:text-[#cdbba6]  text-center hover:border-0"
                      >
                        ✕
                      </label>
                      <h3 className="font-bold text-2xl poppins">
                        Enter Bid Amount
                      </h3>
                      <div className="form-control my-10 w-full">
                        <label className="input-group">
                          <input
                            type="number"
                            placeholder="0.01"
                            className="input input-bordered w-full"
                          />
                          <span className="bg-[#675237] text-[#F8F1E7]">
                            IDR
                          </span>
                        </label>
                      </div>
                      <div className="modal-action">
                        <button
                          className="btn bg-[#ebd7bb] px-6 poppins font-semibold text-3xl mr-2 hover:scale-110
                   transform transition duration-400 border-2 text-[#57240f] border-[#57240f]
                    rounded-3xl hover:bg-[#57240f] hover:text-[#cdbba6]  text-center hover:border-0"
                        >
                          <label htmlFor="my-modal-5" className="">
                            Bid
                          </label>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END:Table Header */}
              <div className="collapse-content overflow-x-auto w-full z-50 table-bid scrollbar-thin scrollbar-thumb-amber-900 scrollbar-track-[#cdbba6] ">
                <table className="table relative w-full bid-table ">
                  <thead className="sticky">
                    <tr>
                      <th className="bg-[#b58e67]"></th>
                      <th className="bg-[#b58e67]">Price</th>
                      <th className="bg-[#b58e67]">Bidder</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="bg-[#F8F1E7] text-center text-2xl">
                        <i className="fa-solid fa-crown"></i>
                      </th>
                      <td className="bg-[#F8F1E7]">
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold text-3xl">
                              Rp. 4.500.000
                            </div>
                            <div className="text-xm opacity-70">
                              34 % increase from previous bidder
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="bg-[#F8F1E7] text-xl">Jhon Doe</td>
                    </tr>
                    <tr>
                      <th className="bg-[#F8F1E7] text-center text-2xl">2</th>
                      <td className="bg-[#F8F1E7]">
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold text-3xl">
                              Rp. 3.000.000
                            </div>
                            <div className="text-xm opacity-70">
                              40 % increase from previous bidder
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="bg-[#F8F1E7] text-xl">
                        Konstadina Kondwani
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-[#F8F1E7] text-center text-2xl">3</th>
                      <td className="bg-[#F8F1E7]">
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold text-3xl">
                              Rp. 2.000.000
                            </div>
                            <div className="text-xm opacity-70">
                              10 % increase from previous price
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="bg-[#F8F1E7] text-xl">Budiman Perkasa</td>
                    </tr>
                    <tr>
                      <th className="bg-[#F8F1E7] text-center text-2xl">4</th>
                      <td className="bg-[#F8F1E7]">
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold text-3xl">
                              Rp. 1.700.000
                            </div>
                            <div className="text-xm opacity-70">
                              60 % increase from previous price
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="bg-[#F8F1E7] text-xl">Jhonny Krugger</td>
                    </tr>
                    {/* ????????????????????????????/ */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
