import FeaturedCollectionBanner from "./featuredCollectionBanner";
import FeaturedPreviewCard from "./featuredPreviewCard";
import { useState } from "react";

export default function FeaturedCollection({ collections }) {
  const [displayIndex, setDisplayIndex] = useState(0);
  console.log(collections, 555);
  const featuredCollections = collections
  // const featuredCollections = [
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

  const featuredPreview = [
    [
      {
        id: 1,
        name: "Paintings 1",
        artistName: "Artist 1",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
      },
      {
        id: 2,
        name: "Paintings 1",
        artistName: "Artist 1",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
      },
      {
        id: 3,
        name: "Paintings 1",
        artistName: "Artist 1",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
      },
      {
        id: 4,
        name: "Paintings 1",
        artistName: "Artist 1",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
      },
      {
        id: 5,
        name: "Paintings 1",
        artistName: "Artist 1",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=2",
      },
    ],
    [
      {
        id: 1,
        name: "Paintings 2",
        artistName: "Artist 2",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=4",
      },
      {
        id: 2,
        name: "Paintings 2",
        artistName: "Artist 2",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=4",
      },
      {
        id: 3,
        name: "Paintings 2",
        artistName: "Artist 2",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=4",
      },
      {
        id: 4,
        name: "Paintings 2",
        artistName: "Artist 2",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=4",
      },
      {
        id: 5,
        name: "Paintings 2",
        artistName: "Artist 2",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=4",
      },
    ],
    [
      {
        id: 1,
        name: "Paintings 3",
        artistName: "Artist 3",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=7",
      },
      {
        id: 2,
        name: "Paintings 3",
        artistName: "Artist 3",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=7",
      },
      {
        id: 3,
        name: "Paintings 3",
        artistName: "Artist 3",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=7",
      },
      {
        id: 4,
        name: "Paintings 3",
        artistName: "Artist 3",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=7",
      },
      {
        id: 5,
        name: "Paintings 3",
        artistName: "Artist 3",
        primaryImage: "https://loremflickr.com/g/1080/720/painting?lock=7",
      },
    ],
  ];
  return (
    <div className="pb-10 space-y-16">
      <div className="carousel w-full">
        {featuredCollections.map((fc, index) => {
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
          {featuredCollections[displayIndex].name}
        </label>
        <div className="text-right w-[80%] mx-auto">
          <button className="font-bosque text-xl font-bold text-[#a35831] hover:scale-110 transform transition duration-400">
            View Lots
          </button>
        </div>
        {/* START: FEATURED COLECTION LIST */}
        <div className="grid grid-cols-5 col-span-2 space-x-5 mt-10 justify-around">
          {/* START: CURRENT COLLECTION CARD */}
          {featuredPreview[displayIndex].map((lot, index) => {
            return <FeaturedPreviewCard key={lot.id} lot={lot} index={index} />;
          })}
          {/* END: CURRENT COLLECTION CARD */}
        </div>
        {/* END: FEATURED COLECTION LIST */}
      </div>
    </div>
  );
}
