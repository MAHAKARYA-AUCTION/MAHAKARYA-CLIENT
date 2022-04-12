require("aframe");

export default function VirtualAuctionHall() {
  return (
    <>
      <a-scene>
        <a-assets>
          <a-asset-item id="scene" src="assets/scene.gltf"></a-asset-item>
          <a-asset-item id="door" src="assets/door/scene.gltf"></a-asset-item>
        </a-assets>

        {/* floor */}
        {/* height = y */}
        {/* floor = 0.5 */}
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="25"
          height="24"
          color="#7BC8A4"
        ></a-plane>

        {/* roof */}
        {/* <a-box
          position="0 5 -4"
          rotation="-90 0 0"
          width="12"
          height="24"
          color="beige"
        ></a-box> */}

        {/* back lobby wall */}
        <a-box
          position="0 2.5 7.75"
          depth="0.5"
          height="5"
          width="12"
          color="green"
        ></a-box>
        {/* left-side elevator wall */}
        <a-box
          position="-2.75 2.5 4.5"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="7"
          color="pink"
        ></a-box>
        {/* right-side elevator wall */}
        <a-box
          position="2.75 2.5 4.5"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="7"
          color="blue"
        ></a-box>
        {/* bottom-left diamond wall */}
        <a-box
          id="bottom-left diamond wall "
          position="-7.62 2.5 -3.75"
          rotation="0 135 0"
          depth="0.5"
          height="5"
          width="14"
          color="aqua"
        ></a-box>
        {/* bottom-right diamond wall */}
        <a-box
          id="bottom-right diamond wall "
          position="7.62 2.5 -3.75"
          rotation="0 45 0"
          depth="0.5"
          height="5"
          width="14"
          color="black"
        ></a-box>

        {/* top-left diamond wall */}
        <a-box
          id="top-left diamond wall"
          position="-9 2.5 -11.85"
          rotation="0 45 0"
          depth="0.5"
          height="5"
          width="10"
          color="orange"
        ></a-box>
        {/* top-right diamond wall */}
        <a-box
          id="top-right diamond wall"
          position="9 2.5 -11.85"
          rotation="0 135 0"
          depth="0.5"
          height="5"
          width="10"
          color="red"
        ></a-box>

        {/* top diamond wall */}
        <a-box
          id="top_diamond_wall"
          position="0.18 2.5 -15.45"
          depth="0.5"
          height="5"
          width="11.5"
          color="tomato"
        ></a-box>

        {/* elevator */}
        <a-entity
          scale="0.014 0.014 0.014"
          position="0 3 5"
          rotation="0 180 0"
          gltf-model="url(/assets/elevator/scene.gltf)"
        ></a-entity>

        <a-light type="ambient" color="white" intensity="0.5"></a-light>

        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </>
  );
}
