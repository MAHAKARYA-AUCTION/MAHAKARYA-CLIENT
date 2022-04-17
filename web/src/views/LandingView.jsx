import FeaturedCollection from "../components/featuredCollection";
import LandingCollectionItem from "../components/landingCollectionItem";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLots, fetchCollections } from "../store/actions/lots";

export default function LandingView() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchLots());
  // }, []);

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);

  const collections = useSelector((state) => state.lotsReducer.collections);

  // const collections = [
  //   {
  //     id: 1,
  //     name: "TREASURES Fine Art",
  //     imgUrl: "https://loremflickr.com/g/1080/720/painting?lock=212",
  //     description:
  //       "In posuere quam nulla, eget tincidunt quam scelerisque eget. Quisque tempor vel lorem sit amet porttitor. Mauris placerat euismod ligula, quis viverra ipsum placerat in. Aliquam nec dui semper sem.",
  //     startDate: "8 March 2020",
  //     endDate: "14 April 2020",
  //   },
  //   {
  //     id: 2,
  //     name: "Renneisannce Reminisance",
  //     imgUrl: "https://loremflickr.com/g/1080/720/painting?lock=121",
  //     description:
  //       "In posuere quam nulla, eget tincidunt quam scelerisque eget. Quisque tempor vel lorem sit amet porttitor. Mauris placerat euismod ligula, quis viverra ipsum placerat in. Aliquam nec dui semper sem.",
  //     startDate: "8 March 2020",
  //     endDate: "14 April 2020",
  //   },
  //   {
  //     id: 3,
  //     name: "Beauty In Humanity",
  //     imgUrl: "https://loremflickr.com/g/1080/720/painting?lock=281",
  //     description:
  //       "In posuere quam nulla, eget tincidunt quam scelerisque eget. Quisque tempor vel lorem sit amet porttitor. Mauris placerat euismod ligula, quis viverra ipsum placerat in. Aliquam nec dui semper sem.",
  //     startDate: "8 March 2020",
  //     endDate: "14 April 2020",
  //   },
  // ];

  const [pageNumber, setPageNumber] = useState(1);
  const [limit] = useState(10);
  const offset = pageNumber * limit - limit;
  const paginatedCollections = collections?.slice(offset, offset + limit);

  function handlePrev() {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  }

  function handleNext() {
    if (pageNumber === Math.ceil(collections.length / limit)) return;
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className="flex flex-col justify-between h-min-screen">
      {/* START:CONTENT PAGE */}
      <div className="space-y-5">
        {/* START:Header */}
        <div className="navbar font-semibold h-12 items-center mt-10 w-[80%] mx-auto">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <a className="poppins text-xl">
              <span className="barcode font-light text-2xl">test</span> 21.4
              MAHAKARYA
            </a>
          </div>
          <div className="navbar-end"></div>
        </div>
        {/* END:Header */}
        <Navbar />
        {/* START:BANNER */}
        <div className="banner hover:scale-[101%] transform transition duration-700 w-[80%] mx-auto"></div>
        {/* END:BANNER */}
        {/* START:LINE BREAK */}
        <div className="h-20 grid grid-cols-9 items-center w-[80%] mx-auto">
          <div className="col-span-4">
            <hr className="bg-[#57240f] h-2" />
          </div>
          <img
            src={require("../resources/img/barcode.png")}
            className="h-16 font-bold w-40 mx-auto"
            alt="barcode"
          />
          <div className="col-span-4">
            <hr className="bg-[#57240f] h-2" />
          </div>
        </div>
        {/* END:LINE BREAK */}
        {/* START: FEATURED COLLECTION */}
        <FeaturedCollection />
        {/* END: FEATURED COLLECTION */}
        {/* START:LINE BREAK */}
        <div className="h-20 grid grid-cols-9 items-center w-[80%] mx-auto">
          <div className="col-span-4">
            <hr className="bg-[#57240f] h-2" />
          </div>
          <img
            src={require("../resources/img/barcode.png")}
            className="h-16 font-bold w-40 mx-auto"
            alt="barcode"
          />
          <div className="col-span-4">
            <hr className="bg-[#57240f] h-2" />
          </div>
        </div>
        {/* END:LINE BREAK */}
        {/* START:COLLECTION OVERVIEW*/}
        <div className="space-y-16 w-[80%] mx-auto ">
          <div className="flex flex-col justify-evenly p-5">
            <h1 className="font-bosque text-7xl font-bold text-center ">
              Our Past Collections
            </h1>
            {collections && (
              <div className="grid grid-cols-2 gap-5">
                {paginatedCollections.map((collection) => (
                  <LandingCollectionItem
                    key={collection.id}
                    collection={collection}
                  />
                ))}
              </div>
            )}
            <div className="mt-5">
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
          {/* END:COLLECTION OVERVIEW*/}
        </div>
        <Footer />
        {/* END:CONTENT PAGE */}
      </div>
    </div>
  );
}
