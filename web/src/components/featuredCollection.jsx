export default function FeaturedCollection() {
  return (
    <div className="pb-10 space-y-16">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="featured-banner bg-[url('./resources/img/placeholder-banner.jpg')] w-full content-center p-5 flex flex-row px-[10%] justify-between">
            <div className="text-left h-full w-[30rem] rounded-md p-16 flex flex-col">
              <div className="bg-[#a35831] p-10 rounded-xl shadow-2xl text-white space-y-5">
                <h2 className="font-bosque text-2xl font-bold ">
                  Featured Collection
                </h2>
                <h1 className="font-bosque text-5xl font-bold">
                  TREASURES Fine Art
                </h1>
                <p className="w-max-full poppins text-left tracking-widest">
                  In posuere quam nulla, eget tincidunt quam scelerisque eget.
                  Quisque tempor vel lorem sit amet porttitor. Mauris placerat
                  euismod ligula, quis viverra ipsum placerat in. Aliquam nec
                  dui semper sem.
                </p>
              </div>
            </div>
            <div className="text-left h-full w-[25rem] rounded-md p-10 flex flex-col-reverse">
              <div className="bg-[#a35831] rounded-xl shadow-2xl text-white grid grid-cols-2 h-[10rem] poppins  font-bold">
                <div className="border-r-2 border-white flex flex-col justify-center items-center">
                  <label className="text-base">From</label>
                  <label className="text-lg font-semibold">Monday</label>
                  <label className="text-6xl">8</label>
                  <label className="text-3xl">Mar</label>
                </div>
                <div className="border-l-2 border-white flex flex-col justify-center items-center">
                  <label className="text-base">Till</label>
                  <label className="text-lg font-semibold">Sunday</label>
                  <label className="text-6xl">14</label>
                  <label className="text-3xl">Apr</label>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-[#57240f] hover:bg-[#cdbba6] text-[#cdbba6] hover:text-[#57240f] hover:scale-105 transform transition duration-400 border-0"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#57240f] hover:bg-[#cdbba6] text-[#cdbba6] hover:text-[#57240f] hover:scale-105 transform transition duration-400 border-0"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="featured-banner bg-[url('./resources/img/banner-img.png')] w-full content-center p-5 flex flex-row px-[10%] justify-between">
            <div className="text-left h-full w-[30rem] rounded-md p-10 flex flex-col">
              <div className="bg-[#a35831] p-10 rounded-xl shadow-2xl text-white space-y-5">
                <h2 className="font-bosque text-2xl font-bold ">
                  Featured Collection
                </h2>
                <h1 className="font-bosque text-5xl font-bold">
                  Renneisannce Reminisance
                </h1>
                <p className="w-max-full poppins text-left tracking-widest">
                  In posuere quam nulla, eget tincidunt quam scelerisque eget.
                  Quisque tempor vel lorem sit amet porttitor. Mauris placerat
                  euismod ligula, quis viverra ipsum placerat in. Aliquam nec
                  dui semper sem.
                </p>
              </div>
            </div>
            <div className="text-left h-full w-[25rem] rounded-md p-10 flex flex-col-reverse">
              <div className="bg-[#a35831] rounded-xl shadow-2xl text-white grid grid-cols-2 h-[10rem] poppins  font-bold">
                <div className="border-r-2 border-white flex flex-col justify-center items-center">
                  <label className="text-base">From</label>
                  <label className="text-lg font-semibold">Monday</label>
                  <label className="text-6xl">8</label>
                  <label className="text-3xl">Mar</label>
                </div>
                <div className="border-l-2 border-white flex flex-col justify-center items-center">
                  <label className="text-base">Till</label>
                  <label className="text-lg font-semibold">Sunday</label>
                  <label className="text-6xl">14</label>
                  <label className="text-3xl">Apr</label>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#57240f] hover:bg-[#cdbba6] text-[#cdbba6] hover:text-[#57240f] hover:scale-105 transform transition duration-400 border-0"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-[#57240f] hover:bg-[#cdbba6] text-[#cdbba6] hover:text-[#57240f] hover:scale-105 transform transition duration-400 border-0"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="featured-banner bg-[url('./resources/img/placeholder-closeup.jpg')] w-full content-center p-5 flex flex-row px-[10%] justify-between">
            <div className="text-left h-full w-[30rem] rounded-md p-10 flex flex-col">
              <div className="bg-[#a35831] p-10 rounded-xl shadow-2xl text-white space-y-5">
                <h2 className="font-bosque text-2xl font-bold ">
                  Featured Collection
                </h2>
                <h1 className="font-bosque text-5xl font-bold">
                  Beauty In Humanity
                </h1>
                <p className="w-max-full poppins text-left tracking-widest">
                  In posuere quam nulla, eget tincidunt quam scelerisque eget.
                  Quisque tempor vel lorem sit amet porttitor. Mauris placerat
                  euismod ligula, quis viverra ipsum placerat in. Aliquam nec
                  dui semper sem.
                </p>
              </div>
            </div>
            <div className="text-left h-full w-[25rem] rounded-md p-10 flex flex-col-reverse">
              <div className="bg-[#a35831] rounded-xl shadow-2xl text-white grid grid-cols-2 h-[10rem] poppins  font-bold">
                <div className="border-r-2 border-white flex flex-col justify-center items-center">
                  <label className="text-base">From</label>
                  <label className="text-lg font-semibold">Monday</label>
                  <label className="text-6xl">8</label>
                  <label className="text-3xl">Mar</label>
                </div>
                <div className="border-l-2 border-white flex flex-col justify-center items-center">
                  <label className="text-base">Till</label>
                  <label className="text-lg font-semibold">Sunday</label>
                  <label className="text-6xl">14</label>
                  <label className="text-3xl">Apr</label>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#57240f] hover:bg-[#cdbba6] text-[#cdbba6] hover:text-[#57240f] hover:scale-105 transform transition duration-400 border-0"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#57240f] hover:bg-[#cdbba6] text-[#cdbba6] hover:text-[#57240f] hover:scale-105 transform transition duration-400 border-0"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-baseline w-[80%] mx-auto">
        <label className="font-bosque text-3xl font-semi-bold text-[#57240f] text-left">
          TREASURES Fine Art
        </label>
        <div className="text-right w-[80%] mx-auto">
          <button className="font-bosque text-xl font-bold text-[#a35831] hover:scale-110 transform transition duration-400">
            View Lots
          </button>
        </div>
        {/* START: FEATURED COLECTION LIST */}
        <div className="grid grid-cols-5 col-span-2 space-x-5 mt-10 justify-around">
          {/* START: CURRENT COLLECTION CARD */}
          <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
            <img
              src="https://loremflickr.com/g/320/240/art"
              className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
              alt="something"
            />
            <div className="text-left poppins text-[#675237] flex flex-row justify-between items-end">
              <div className="flex flex-col flex-auto">
                <h1 className="text-bold text-3xl ">Art Name</h1>
                <div>
                  <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                    Painter
                  </label>
                </div>
              </div>
              <div>
                <button className="btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
            <img
              src="https://loremflickr.com/g/320/240/art"
              className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
              alt="something"
            />
            <div className="text-left poppins text-[#675237] flex flex-row justify-between items-end">
              <div className="flex flex-col flex-auto">
                <h1 className="text-bold text-3xl ">Art Name</h1>
                <div>
                  <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                    Painter
                  </label>
                </div>
              </div>
              <div>
                <button className="btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
            <img
              src="https://loremflickr.com/g/320/240/art"
              className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
              alt="something"
            />
            <div className="text-left poppins text-[#675237] flex flex-row justify-between items-end">
              <div className="flex flex-col flex-auto">
                <h1 className="text-bold text-3xl ">Art Name</h1>
                <div>
                  <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                    Painter
                  </label>
                </div>
              </div>
              <div>
                <button className="btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
            <img
              src="https://loremflickr.com/g/320/240/art"
              className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
              alt="something"
            />
            <div className="text-left poppins text-[#675237] flex flex-row justify-between items-end">
              <div className="flex flex-col flex-auto">
                <h1 className="text-bold text-3xl ">Art Name</h1>
                <div>
                  <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                    Painter
                  </label>
                </div>
              </div>
              <div>
                <button className="btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className="w-[80%] h-full text-xl space-y-3 mx-auto">
            <img
              src="https://loremflickr.com/g/320/240/art"
              className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transform transition duration-700"
              alt="something"
            />
            <div className="text-left poppins text-[#675237] flex flex-row justify-between items-end">
              <div className="flex flex-col flex-auto">
                <h1 className="text-bold text-3xl ">Art Name</h1>
                <div>
                  <label className="text-[#ebd7bb] px-3 py-1 rounded-full bg-[#a35831] w-auto text-sm">
                    Painter
                  </label>
                </div>
              </div>
              <div>
                <button className="btn border-[#57240f] rounded-xl text-[#57240f] bg-[#ebd7bb] hover:bg-[#57240f] hover:text-[#ebd7bb] hover:scale-110 transform transition duration-400">
                  Details
                </button>
              </div>
            </div>
          </div>
          {/* END: CURRENT COLLECTION CARD */}
        </div>
        {/* END: FEATURED COLECTION LIST */}
      </div>
    </div>
  );
}
