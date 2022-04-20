import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
require("aframe");

export default function Lobby() {
  const navigate = useNavigate();
  // const BASE_URL = "http://localhost:3000/";
  const BASE_URL = "http://api.mahakarya-auction.com/";
  let [floor, setFloor] = useState("46");
  const floorTransporter = () => {
    if (floor == "46") {
      navigate("../goliath-gallery", { replace: true });
    } else {
      navigate("../david-gallery", { replace: true });
    }
  };
  const back = () => {
    navigate("../", { replace: true });
    var html = document.querySelector("html");
    html.removeAttribute("class");
  };
  const [collectionsData, setCollectionsData] = useState(null);
  useEffect(() => {
    fetch(BASE_URL + "collections")
      .then((response) => response.json())
      .then((x) => setCollectionsData(x));
  }, []);

  const pressUp = () => {
    if (floor == "46") {
      setFloor("87");
    } else {
      setFloor("46");
    }
  };

  return (
    <>
      <a-scene>
        <a-camera
          position="0 2 7"
          wasd-controls-enabled="true"
          wasd-controls="acceleration:15"
          look-controls="pointerLockEnabled:true"
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
        <a-scene loading-screen="dotsColor: red; backgroundColor: black"></a-scene>
        {/* floor */}
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="12"
          height="24"
          repeat="8 8"
          src={"url(/assets/marble/black_2.jpg)"}
          color="gray"
        ></a-plane>
        {/* left_door */}
        <a-entity
          id="left_door"
          onClick={back}
          scale="1.4 1.4 1.4"
          position="0.8 0 7.5"
          rotation="0 180 0"
          gltf-model="url(/assets/door/scene.gltf)"
        ></a-entity>
        {/* right_door */}
        <a-entity
          id="right_door"
          onClick={back}
          scale="1.4 1.4 1.4"
          position="-0.8 0 7.5"
          rotation="0 0 0"
          gltf-model="url(/assets/door/scene.gltf)"
        ></a-entity>
        {/* omni light */}
        <a-light
          id="omni_light"
          position="0 2 0"
          angle="360"
          type="point"
          color="white"
          intensity="0.8"
        ></a-light>
        {/* roof */}
        <a-box
          position="0 5 -4"
          rotation="-90 0 0"
          width="12"
          height="24"
          src="url(/assets/wood_parquet/seamless_texture_rovere_wood_parquet_DIFFUSE.jpg)"
          color="gray"
        ></a-box>
        <a-box
          id="right_side_elevator_wall"
          position="0 2.5 7.75"
          depth="0.5"
          height="5"
          width="12"
          repeat="1 1"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        <a-box
          id="board"
          position="3.35 2.5 -5.75"
          depth="0.1"
          height="2"
          width="3"
          src={"url(/assets/marble/black_1.jpg)"}
        ></a-box>
        {/* left-side lobby wall */}
        <a-box
          position="-5.75 2.5 1"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="14"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* right-side lobby wall */}
        <a-box
          position="5.75 2.5 1"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="14"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* left-side elevator wall */}
        <a-box
          id="left_side_elevator_wall"
          position="-3.5 2.5 -6"
          depth="0.5"
          height="5"
          width="5"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* right_side_elevator_wall */}
        <a-box
          id="right_side_elevator_wall"
          position="3.5 2.5 -6"
          depth="0.5"
          height="5"
          width="5"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* above_elevator_wall */}
        <a-box
          id="above_elevator_wall"
          position="0 4 -6"
          depth="0.5"
          height="2"
          width="5"
          src={"url(/assets/marble/black_2.jpg)"}
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
          // onClick={floorTransporter}
          scale="0.014 0.014 0.014"
          position="0 3 -5"
          gltf-model="url(/assets/elevator/scene.gltf)"
        ></a-entity>
        <a-triangle
          id="elevator_up_button"
          onClick={pressUp}
          position="0.9 1.7285 -4.970"
          color="red"
          side="double"
          scale="0.1 0.1 0.1"
          material=""
          geometry=""
        ></a-triangle>
        <a-circle
          id="elevator_lift_button"
          onClick={floorTransporter}
          color="red"
          side="double"
          position="0.9 1.7285 -5.267"
          scale="0.1 0.1 0.1"
        ></a-circle>
        <a-text
          id="elevator_text"
          value={floor}
          position="0 3.37 -4.875"
          color="black"
          scale=".5 .5 .5"
        ></a-text>
        <a-light type="ambient" color="white" intensity="0.5"></a-light>
        <a-text
          id="Floor 46: \nGoliath gallery"
          value="Floor 46: \nGoliath gallery"
          geometry="primitive:plane"
          position="2.5 2.7 -5.5"
          color="white"
          scale=".5 .5 .5"
        ></a-text>
        <a-text
          value="Floor 87: \nDavid gallery"
          geometry="primitive:plane"
          position="2.5 2 -5.5"
          color="white"
          scale=".5 .5 .5"
        ></a-text>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </>
  );
}
