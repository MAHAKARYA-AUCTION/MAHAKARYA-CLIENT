import { useNavigate } from "react-router-dom";
require("aframe");

export default function VirtualAuctionHall() {
  const navigate = useNavigate();
  const floorTransporter = () => {
    navigate("../diamond_gallery", { replace: true });
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
          <a-asset-item id="scene" src="assets/scene.gltf"></a-asset-item>
          <a-asset-item id="door" src="assets/door/scene.gltf"></a-asset-item>
        </a-assets>

        {/* floor */}
        {/* height = y */}
        {/* floor = 0.5 */}
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="12"
          height="24"
          color="#7BC8A4"
        ></a-plane>

        {/* roof */}
        <a-box
          position="0 5 -4"
          rotation="-90 0 0"
          width="12"
          height="24"
          color="beige"
        ></a-box>

        {/* back lobby wall */}
        <a-box
          position="0 2.5 7.75"
          depth="0.5"
          height="5"
          width="12"
          color="green"
        ></a-box>

        {/* left-side lobby wall */}
        <a-box
          position="-5.75 2.5 1"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="14"
          color="pink"
        ></a-box>
        {/* right-side lobby wall */}
        <a-box
          position="5.75 2.5 1"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="14"
          color="blue"
        ></a-box>

        {/* left-side elevator wall */}
        <a-box
          position="-3.5 2.5 -6"
          depth="0.5"
          height="5"
          width="5"
          color="aqua"
        ></a-box>

        {/* left-side elevator wall */}
        <a-box
          id="right_side_elevator_wall"
          position="3.5 2.5 -6"
          depth="0.5"
          height="5"
          width="5"
          color="tomato"
        ></a-box>
        <a-box
          id="right_side_elevator_wall"
          position="0 4.1 -6"
          depth="0.5"
          height="1"
          width="5"
          color="red"
        ></a-box>

        {/* left front plant */}
        <a-entity
          scale="0.2 0.2 0.2"
          position="-5 0 -5"
          gltf-model="url(/assets/scene.gltf)"
        ></a-entity>
        {/* right front plant */}
        <a-entity
          scale="0.2 0.2 0.2"
          position="5 0 -5"
          gltf-model="url(scene.gltf)"
        ></a-entity>

        {/* elevator */}
        <a-entity
          onClick={floorTransporter}
          scale="0.014 0.014 0.014"
          position="0 3 -5"
          gltf-model="url(/assets/elevator/scene.gltf)"
        ></a-entity>

        <a-light type="ambient" color="white" intensity="0.5"></a-light>

        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </>
  );
}

// <a-entity
//   scale="2 2 2"
//   position="-5.5 0 -3.35"
//   rotation="0 90 0"
//   gltf-model="url(/assets/door/scene.gltf)"
// ></a-entity>

// <a-entity
//   scale="2 2 2"
//   position="-5.5 0 -5.65"
//   rotation="0 -90 0"
//   gltf-model="url(/assets/door/scene.gltf)"
// ></a-entity>

{
  /* left-side front lobby wall */
}
//    <a-box
//    position="-5.75 2.5 -11"
//    rotation="0 90 0"
//    depth="0.5"
//    height="5"
//    width="8"
//    color="tomato"
//  ></a-box>
{
  /* right-side front lobby wall */
}
// <a-box
//   position="5.75 2.5 -11"
//   rotation="0 90 0"
//   depth="0.5"
//   height="5"
//   width="8"
//   color="beige"
// ></a-box>
