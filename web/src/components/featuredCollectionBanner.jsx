import timeNameFinder from "../helpers/timeNameFinder";
import { Link } from "react-router-dom";

export default function FeaturedCollectionBanner({
  collection,
  index,
  totalFeaturedCollection,
  setDisplayIndex,
}) {
  // console.log(collection);
  const startDate = new Date(collection.startDate);
  const endDate = new Date(collection.endDate);
  const [startDay, startMonth] = timeNameFinder(startDate);
  const [endDay, endMonth] = timeNameFinder(endDate);
  return (
    <div id={`slide${index}`} className="carousel-item relative w-full">
      <div
        className="featured-banner w-full content-center p-5 flex flex-row px-[10%] justify-between"
        style={{
          backgroundImage: `url('${collection.imgUrl}')`,
        }}
      >
        <div className="text-left h-full w-[30rem] rounded-md p-16 flex flex-col">
          <div className="bg-[#a35831] p-10 rounded-xl shadow-2xl text-white space-y-5 w-96">
            <h2 className="font-bosque text-2xl font-bold ">
              Featured Collection
            </h2>
            <h1 className="font-bosque text-5xl font-bold">
              {collection.name}
            </h1>
            <p className="w-max-full poppins text-left tracking-widest">
              {collection.description}
            </p>
          </div>
        </div>
        <div className="text-left h-full w-[25rem] rounded-md p-10 flex flex-col-reverse">
          <div className="bg-[#a35831] rounded-xl shadow-2xl text-white grid grid-cols-2 h-[10rem] poppins  font-bold w-full">
            <div className="border-r-2 border-white flex flex-col justify-center items-center">
              <label className="text-base">From</label>
              <label className="text-lg font-semibold">{startDay}</label>
              <label className="text-6xl">{startDate.getDate()}</label>
              <label className="text-3xl">{startMonth}</label>
            </div>
            <div className="border-l-2 border-white flex flex-col justify-center items-center">
              <label className="text-base">Till</label>
              <label className="text-lg font-semibold">{endDay}</label>
              <label className="text-6xl">{endDate.getDate()}</label>
              <label className="text-3xl">{endMonth}</label>
            </div>
          </div>
          <Link
            to={"/" + collection.galleryName}
            className="btn rounded-xl w-full bg-[#a35831] text-white border-0 hover:text-white hover:border-0 hover:bg-[#a35831] hover:scale-110 transform transition duration-600 z-50 mb-10"
          >
            <i className="fa-solid fa-house-chimney fa-2xl mr-2"></i>Explore
            Virtual Gallery
          </Link>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={
            index === 0
              ? `#slide${totalFeaturedCollection - 1}`
              : `#slide${index - 1}`
          }
          onClick={() =>
            setDisplayIndex(
              index === 0 ? totalFeaturedCollection - 1 : index - 1
            )
          }
          className="btn btn-circle bg-[#57240f] hover:bg-[#cdbba6] text-[#cdbba6] hover:text-[#57240f] hover:scale-105 transform transition duration-400 border-0"
        >
          ❮
        </a>
        <a
          href={
            index === totalFeaturedCollection - 1
              ? `#slide${0}`
              : `#slide${index + 1}`
          }
          onClick={() =>
            setDisplayIndex(
              index === totalFeaturedCollection - 1 ? 0 : index + 1
            )
          }
          className="btn btn-circle bg-[#57240f] hover:bg-[#cdbba6] text-[#cdbba6] hover:text-[#57240f] hover:scale-105 transform transition duration-400 border-0"
        >
          ❯
        </a>
      </div>
    </div>
  );
}
