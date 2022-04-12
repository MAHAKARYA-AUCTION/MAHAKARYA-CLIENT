import { useNavigate } from "react-router-dom";

require("aframe");

export default function DiamondGallery() {
  const navigate = useNavigate();
  const floorTransporter = () => {
    navigate("../hall", { replace: true });
  };

  return (
    <>
      <a-scene>
        <a-camera
          position="0 2 0"
          wasd-controls-enabled="true"
          fov="60"
          near="0.1"
          far="100"
        >
          <a-cursor></a-cursor>
        </a-camera>
        <a-assets>
          <a-asset-item id="scene" src="assets/scene.gltf" />
          <a-asset-item id="door" src="assets/door/scene.gltf" />
          <a-asset-item id="door" src="assets/carpets" />
        </a-assets>

        {/* floor */}
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="25"
          height="24"
          src="url(/assets/marble/black_2.jpg)"
          repeat="5 5"
        ></a-plane>

        {/* roof */}
        {/* <a-box
          position="0 6 -4"
          rotation="-90 0 0"
          width="60"
          height="60"
          color="beige"
        ></a-box> */}

        {/* back lobby wall */}
        <a-box
          position="0 2.5 7.75"
          depth="0.5"
          height="5"
          width="12"
          src="url(/assets/wall/cream_1.jpg)"
        ></a-box>
        {/* left-side elevator wall */}
        <a-box
          position="-2.75 2.5 4.5"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="7"
          src="url(/assets/wall/cream_1.jpg)"
        ></a-box>
        {/* right-side elevator wall */}
        <a-box
          position="2.75 2.5 4.5"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="7"
          src="url(/assets/wall/cream_1.jpg)"
        ></a-box>
        {/* bottom-left diamond wall */}
        <a-box
          id="bottom-left diamond wall "
          position="-7.62 2.5 -3.75"
          rotation="0 135 0"
          depth="0.5"
          height="5"
          width="14"
          src="url(/assets/wall/cream_1.jpg)"
        ></a-box>
        {/* bottom-right diamond wall */}
        <a-box
          id="bottom-right diamond wall "
          position="7.62 2.5 -3.75"
          rotation="0 45 0"
          depth="0.5"
          height="5"
          width="14"
          src="url(/assets/wall/cream_1.jpg)"
        ></a-box>

        {/* top-left diamond wall */}
        <a-box
          id="top-left diamond wall"
          position="-9 2.5 -11.85"
          rotation="0 45 0"
          depth="0.5"
          height="5"
          width="10"
          src="url(/assets/wall/cream_1.jpg)"
        ></a-box>
        {/* top-left diamond painting */}
        <a-box
          id="top-left diamond painting"
          position="-8.75 2.5 -11.85"
          rotation="0 45 0"
          depth="0.2"
          height="1.287"
          width="2.278"
          src="url(\assets\paintings\1.jpg)"
        ></a-box>
        {/* top-left diamond light */}
        <a-light
          id="top-left diamond light"
          type="spot"
          angle="50"
          color="white"
          intensity="0.6"
          distance="25"
          rotation="-45 45 0"
          position="-6.8 4.8 -10.4"
          penumbra="0.4"
        ></a-light>

        {/* top-right diamond wall */}
        <a-box
          id="top-right diamond wall"
          position="9 2.5 -11.85"
          rotation="0 135 0"
          depth="0.5"
          height="5"
          width="10"
          src="url(/assets/wall/cream_1.jpg)"
        ></a-box>

        {/* top diamond wall */}
        <a-box
          id="top_diamond_wall"
          position="0.18 2.5 -15.45"
          depth="0.5"
          height="5"
          width="11.5"
          src="url(/assets/wall/cream_1.jpg)"
        ></a-box>
        {/* top diamond painting */}
        <a-box
          id="top_diamond_painting"
          position="0 2.25 -15.25"
          depth="0.2"
          height="2.08"
          width="4.1"
          src="url(\assets\paintings\2.jpg)"
        ></a-box>

        {/* elevator */}
        <a-entity
          onClick={floorTransporter}
          scale="0.014 0.014 0.014"
          position="0 3 5"
          rotation="0 180 0"
          gltf-model="url(/assets/elevator/scene.gltf)"
        ></a-entity>

        {/* omni light */}
        <a-light
          id="omni_light"
          position="0 2 0"
          angle="360"
          type="ambient"
          color="white"
          intensity="0.8"
        ></a-light>

        {/* light for top wall painting */}
        <a-light
          id="top_diamond_light"
          type="spot"
          angle="20"
          color="white"
          intensity="0.6"
          distance="40"
          rotation="-45 0 0"
          position="0 6.8 -11"
          penumbra="0.4"
        ></a-light>
        {/* barrier */}
        <a-entity
          id="barrier"
          scale="1 1 1"
          position="0 0 -14.5"
          rotation="0 180 0"
          gltf-model="url(/assets/barrier/scene.gltf)"
        ></a-entity>

        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </>
  );
}
