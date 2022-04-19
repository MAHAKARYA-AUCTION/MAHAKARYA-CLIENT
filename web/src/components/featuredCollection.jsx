import FeaturedCollectionBanner from "./featuredCollectionBanner";
import FeaturedPreviewCard from "./featuredPreviewCard";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FeaturedCollection({ collections }) {
  const [displayIndex, setDisplayIndex] = useState(0);
  const featuredCollections = collections;
  let featuredPreview;

  if (featuredCollections) {
    featuredPreview = featuredCollections[displayIndex].Lots;
    console.log(featuredPreview);
  }

  // const featuredPreview = [
  //   [
  //     {
  //       id: 1,
  //       name: "Paintings 1",
  //       artistName: "Artist 1",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
  //     },
  //     {
  //       id: 2,
  //       name: "Paintings 1",
  //       artistName: "Artist 1",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
  //     },
  //     {
  //       id: 3,
  //       name: "Paintings 1",
  //       artistName: "Artist 1",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
  //     },
  //     {
  //       id: 4,
  //       name: "Paintings 1",
  //       artistName: "Artist 1",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
  //     },
  //     {
  //       id: 5,
  //       name: "Paintings 1",
  //       artistName: "Artist 1",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
  //     },
  //   ],
  //   [
  //     {
  //       id: 1,
  //       name: "Paintings 2",
  //       artistName: "Artist 2",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=4",
  //     },
  //     {
  //       id: 2,
  //       name: "Paintings 2",
  //       artistName: "Artist 2",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=4",
  //     },
  //     {
  //       id: 3,
  //       name: "Paintings 2",
  //       artistName: "Artist 2",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=4",
  //     },
  //     {
  //       id: 4,
  //       name: "Paintings 2",
  //       artistName: "Artist 2",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=4",
  //     },
  //     {
  //       id: 5,
  //       name: "Paintings 2",
  //       artistName: "Artist 2",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=4",
  //     },
  //   ],
  //   [
  //     {
  //       id: 1,
  //       name: "Paintings 3",
  //       artistName: "Artist 3",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=7",
  //     },
  //     {
  //       id: 2,
  //       name: "Paintings 3",
  //       artistName: "Artist 3",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=7",
  //     },
  //     {
  //       id: 3,
  //       name: "Paintings 3",
  //       artistName: "Artist 3",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=7",
  //     },
  //     {
  //       id: 4,
  //       name: "Paintings 3",
  //       artistName: "Artist 3",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=7",
  //     },
  //     {
  //       id: 5,
  //       name: "Paintings 3",
  //       artistName: "Artist 3",
  //       primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=7",
  //     },
  //   ],
  // ];
  return (
    <div className="pb-10 space-y-16">
      <div className="carousel w-full overflow-hidden">
        {featuredCollections &&
          featuredCollections.map((fc, index) => {
            return (
              <FeaturedCollectionBanner
                key={fc.id}
                collection={fc}
                index={index}
                totalFeaturedCollection={featuredCollections.length}
                setDisplayIndex={setDisplayIndex}
              />
            );
          })}
      </div>
      <div className="grid grid-cols-2 items-baseline w-[80%] mx-auto">
        <label className="font-bosque text-3xl font-semi-bold text-[#57240f] text-left">
          {featuredCollections && featuredCollections[displayIndex].name}
        </label>
        <div className="text-right w-[80%] mx-auto">
          <Link
            to={
              featuredCollections
                ? "/collection/" + featuredCollections[displayIndex].id
                : "/"
            }
          >
            <button className="font-bosque text-xl font-bold text-[#a35831] hover:scale-110 transform transition duration-400">
              View Lots
            </button>
          </Link>
        </div>
        {/* START: FEATURED COLECTION LIST */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5 col-span-2 space-x-5 mt-10 justify-around">
          {/* START: CURRENT COLLECTION CARD */}
          {featuredPreview &&
            featuredPreview
              .slice(0, 5)
              // [displayIndex]
              .map((lot, index) => {
                return (
                  <FeaturedPreviewCard key={lot.id} lot={lot} index={index} />
                );
              })}
          {/* END: CURRENT COLLECTION CARD */}
        </div>
        {/* END: FEATURED COLECTION LIST */}
      </div>
    </div>
  );
}
