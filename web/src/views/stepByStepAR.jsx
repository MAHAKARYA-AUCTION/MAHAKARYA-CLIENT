import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function StepByStepAR() {
  return (
    <>
      <br />
      <br />
      <Navbar />
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          marginTop: 30
        }}
      >
        <h1 className="font-bosque text-6xl font-bold">MAHAKARYA AR</h1>
        <h2 className="font-bosque text-2xl">
          Bring the painting into reality
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100",
            justifyContent: "space-evenly",
            marginTop: 70
          }}
        >
          <div
            style={{
              display: "flex",
              // backgroundColor: "lightblue",
              width: "50%",
              justifyContent: "center"
            }}
          >
            <img src={require("../resources/img/ar-mobile.png")} width="250" />
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              width: "50%"
            }}
            className="text-2xl font-poppins"
          >
            <div
              style={{
                backgroundColor: "whitesmoke",
                paddingLeft: 100,
                paddingRight: 100,
                paddingTop: 70,
                paddingBottom: 70,
                borderRadius: 10
              }}
            >
              <p style={{ width: 450 }} className="text-left">
                Want to view the painting in real life? Yes you can! With
                MAHAKARYA-AR you can have a look at the painting that you wish
                for as if it's in your room right now.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100",
            justifyContent: "space-evenly",
            marginTop: 70,
            marginBottom: 70
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              width: "50%"
              // backgroundColor: "tomato"
            }}
            className="text-2xl font-poppins"
          >
            <div
              style={{
                backgroundColor: "whitesmoke",
                paddingLeft: 100,
                paddingRight: 100,
                paddingTop: 70,
                paddingBottom: 70,
                borderRadius: 10
              }}
            >
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
                      href="https://res.cloudinary.com/mahakarya/image/upload/v1650449039/MAHAKARYA_AUCTION_QR_gaqfad.jpg"
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
          <div
            style={{
              display: "flex",
              // backgroundColor: "lightblue",
              width: "50%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={require("../resources/img/qr.jpg")}
              style={{ width: 400, height: 400 }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
