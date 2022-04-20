import Navbar from "../components/navbar";

export default function StepByStepAR() {
  return (
    <>
      <div className="flex flex-col pt-10 min-h-screen">
        <Navbar />
        <div className="h-full w-[80%] mx-auto justify-center flex flex-col mt-10">
          <h1 className="font-bosque text-6xl font-bold">MAHAKARYA AR</h1>
          <h2 className="font-bosque text-2xl">
            Bring the painting into reality
          </h2>
          <div className="w-full flex flex-col">
            <div className="flex flex-row">
              <div>
                <img />
              </div>
              <div></div>
            </div>
            <div className="flex flex-row-reverse">
              <div>
                <img />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
