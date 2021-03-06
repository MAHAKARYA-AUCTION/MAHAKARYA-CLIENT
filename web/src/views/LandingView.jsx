import FeaturedCollection from "../components/featuredCollection";
import LandingCollectionItem from "../components/landingCollectionItem";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLots,
  fetchWideLots,
  fetchCollections
} from "../store/actions/lots";
import HorizontalLines from "../components/horizontalLines";

export default function LandingView() {
  const dispatch = useDispatch();

  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchWideLots());
  }, [fetchWideLots]);

  const collections = useSelector((state) => state.lotsReducer.collections);
  const currentCollections = useSelector((state) =>
    state?.lotsReducer?.collections?.filter(
      (e) => new Date(e.endDate) > new Date()
    )
  );
  const pastCollections = useSelector((state) =>
    state?.lotsReducer?.collections?.filter(
      (e) => new Date(e.endDate) < new Date()
    )
  );
  const lots = useSelector((state) => state.lotsReducer.wideLots);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(lots.length);
      const newBannerIndex = Math.floor(Math.random() * lots.length);
      setBannerIndex(newBannerIndex);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [bannerIndex]);

  const [pageNumber, setPageNumber] = useState(1);
  const [limit] = useState(10);
  const offset = pageNumber * limit - limit;
  const paginatedCollections = collections?.slice(offset, offset + limit);

  function handlePrev() {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  }

  function handleNext(e) {
    console.log(e);
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
        {lots && (
          <div className="mx-auto relative overflow-hidden w-[80%]">
            <div className="py-5 z-10 top-8 left-10 right-10 absolute">
              <img
                src={lots[bannerIndex].primaryImage}
                className="bg-transparent hover:scale-[101%] transform transition duration-700 mx-auto h-[700px] shadow-lg shadow-gray-800"
              ></img>
            </div>
            <div
              style={{
                backgroundImage: `url(${lots[bannerIndex].primaryImage})`
              }}
              className="mx-auto z-0 top-0 left-0 w-[2400px] h-[800px] blur-xl"
            >
              {"ggggggggggggggggggggg"}
            </div>
          </div>
        )}

        {/* END:BANNER */}
        {/* START:LINE BREAK */}
        <div className="h-20 grid grid-cols-9 items-center w-[80%] mx-auto">
          <div className="col-span-4">
            <hr className="bg-[#57240f] h-2" />
          </div>
          {/* <HorizontalLines /> */}
          <img
            // src={require("../resources/img/horizontal_lines_2-removebg-preview.png")}
            src={require("../resources/img/barcode.png")}
            className="h-16 font-bold w-40 mx-auto"
            // alt="barcode"
          />
          <div className="col-span-4">
            <hr className="bg-[#57240f] h-2" />
          </div>
        </div>
        {/* END:LINE BREAK */}
        {/* START: FEATURED COLLECTION */}
        <FeaturedCollection collections={currentCollections} />
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
            {pastCollections && (
              <div className="grid grid-cols-2 gap-5">
                {pastCollections.map((collection, index) => (
                  <LandingCollectionItem key={index} collection={collection} />
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
                    ??
                  </button>
                  <button className="btn border-x-0 bg-[#ebd7bb] border-[#57240f] text-[#57240f]  hover:bg-[#ebd7bb]">
                    Page {pageNumber}
                  </button>
                  <button
                    className="btn bg-[#ebd7bb] border-l-0 border-[#57240f] text-[#57240f]  hover:bg-[#451D0C] hover:text-[#ebd7bb]"
                    onClick={handleNext}
                  >
                    ??
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
