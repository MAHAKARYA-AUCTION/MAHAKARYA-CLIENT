import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function LandingVirtualGallery() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-10 h-[74vh] ">
        <div className="w-[70%] mx-auto justify-center flex flex-col">
          <h1 className="font-bosque text-6xl font-bold">MAHAKARYA VIRTUAL GALLERY</h1>
          <h2 className="font-bosque text-2xl mt-2">Experience the novel way of viewing artworks with our Virtual Gallery</h2>
          <div class="carousel w-full mt-5">
            <div id="slide1" class="carousel-item relative w-full">
              <img src={require("../resources/img/VG1.jpg")} class="w-[70%] mx-auto" alt="VG1" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle border-[#a35831]  bg-[#a35831] hover:bg-[#57240f]">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle border-[#a35831]  bg-[#a35831] hover:bg-[#57240f]">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img src={require("../resources/img/VG2.jpg")} class="w-[70%] mx-auto" alt="VG2" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle border-[#a35831]  bg-[#a35831] hover:bg-[#57240f]">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle border-[#a35831]  bg-[#a35831] hover:bg-[#57240f]">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img src={require("../resources/img/VG3.jpg")} class="w-[70%] mx-auto" alt="VG3" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle border-[#a35831]  bg-[#a35831] hover:bg-[#57240f]">
                  ❮
                </a>
                <a href="#slide1" class="btn btn-circle border-[#a35831]  bg-[#a35831] hover:bg-[#57240f]">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <Link to="/lobby" className="btn rounded-xl w-[20%] mx-auto mt-5 bg-[#a35831] text-white border-0 hover:text-white hover:border-0 hover:bg-[#57240f] hover:scale-110 transform transition duration-600 z-50">
            <i className="fa-solid fa-house-chimney fa-2xl mr-2"></i>Visit Virtual Gallery
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
