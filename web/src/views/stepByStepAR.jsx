import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function StepByStepAR() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-10 h-[74vh] ">
        <div className="w-[70%] mx-auto justify-center flex flex-col">
          <h1 className="font-bosque text-6xl font-bold">MAHAKARYA AR</h1>
          <h2 className="font-bosque text-2xl">
            Bring the painting into reality
          </h2>
          <div className="w-full flex flex-col text-2xl font-poppins space-y-20 mt-10 tracking-wide leading-loose">
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="bg-black justify-start items-start rounded-xl w-60 h-60">
                Placeholder
              </div>
              <p className="text-right w-[40%]">
                Want to view the painting in real life? Yes you can! With
                MAHAKARYA-AR you can have a look at the painting that you wish
                for as if it's in your room right now.
              </p>
            </div>
            <div className="flex flex-row space-x-10 leading-relaxed text-left marker:text-[#675237]">
              <div className="bg-black justify-start items-start w-60 h-60 rounded-xl">
                Placeholder
              </div>
              <div>
                <label className="font-semibold text-[#1F2937]">
                  Follow these steps :
                </label>
                <ul className="list-disc text-left ml-6">
                  <li>
                    Download our{" "}
                    <a
                      href="https://mahakarya-auction.s3.ap-southeast-1.amazonaws.com/painting/Mahakarya.apk"
                      className="text-[#57240f] font-semibold hover:underline decoration-[#451D0C]"
                    >
                      MAHAKARYA-AR
                    </a>{" "}
                    app and{" "}
                    <a
                      className="text-[#57240f] font-semibold hover:underline decoration-[#451D0C]"
                      href="https://res.cloudinary.com/mahakarya/image/upload/v1650449039/MAHAKARYA_AUCTION_QR_gaqfad.jpg
"
                    >
                      Marker
                    </a>{" "}
                    code with the following links
                  </li>
                  <li>
                    Place the marker in the position where you want the painting
                    to be.
                  </li>
                  <li>
                    Open MAHAKARYA-AR app and choose the picture you want to
                    view.
                  </li>
                  <li>Direct your phone camera to the marker.</li>
                  <li>Voila! The picture is now in your room!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
