require("aframe");

export default function VirtualAuctionHall() {
  return (
    <>
      <a-scene>
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="12"
          height="24"
          color="#7BC8A4"
        ></a-plane>
        {/* floor */}
        {/* height = y */}
        {/* floor = 0.5 */}

        {/* back lobby wall */}
        <a-box
          position="0 2.5 7.75"
          depth="0.5"
          height="5"
          width="12"
          color="green"
        ></a-box>

        {/* left-side back lobby wall */}
        <a-box
          position="-5.75 2.5 3"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="10"
          color="pink"
        ></a-box>
        {/* right-side back lobby wall */}
        <a-box
          position="5.75 2.5 3"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="10"
          color="blue"
        ></a-box>

        {/* left-side front lobby wall */}
        <a-box
          position="-5.75 2.5 -11"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="8"
          color="tomato"
        ></a-box>
         {/* front lobby wall */}
         <a-box
          position="0 2.5 -14.75"
          depth="0.5"
          height="5"
          width="12"
          color="aqua"
        ></a-box>
        {/* right-side front lobby wall */}
        <a-box
          position="5.75 2.5 -11"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="8"
          color="beige"
        ></a-box>

        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </>
  );
}
