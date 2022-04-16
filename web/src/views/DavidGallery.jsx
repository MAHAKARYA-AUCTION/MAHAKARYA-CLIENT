import "aframe";
import "aframe-extras";
import "aframe-fps-look-controls-component";
import anime from "animejs/lib/anime.es.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function DavidGallery() {
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:3000/lots";

  const [wholeData, setWholeData] = useState(null);
  const [data, setData] = useState(null);
  const [sliceIndex, setSliceIndex] = useState([0, 10]);

  useEffect(() => {
    fetch(BASE_URL).then((response) =>
      response.json().then((x) => {
        x.map((y, index) => (y.number = index + 1));
        setWholeData(x);
        setData(x.slice(sliceIndex[0], sliceIndex[1]));
      })
    );
  }, []);
  console.log(wholeData, 666);
  console.log(data);

  const floorTransporter = () => {
    navigate("../lobby", { replace: true });
  };

  const position = {
    first: [-6, 2, 1.05],
    second: [0, 0, 0],
    third: [0, 0, 0],
    fourth: [0, 0, 0],
    fifth: [0, 0, 0],
    sixth: [0, 0, 0],
    seventh: [0, 0, 0],
    eighth: [0, 0, 0],
    ninth: [0, 0, 0],
  };

  anime({
    targets: "#sphere",
    rotation: "0 2 0",
    loop: true,
    autoplay: true,
  });

  function emerge() {
    anime({
      targets: "#left_cone",
      position: ["1.5 1.5 -9.5", "1 1.5 -9.5"],
    });
    anime({
      targets: "#right_cone",
      position: ["1.5 1.5 -9.5", "2 1.5 -9.5"],
    });
  }

  const toNextBatch = () => {
    if (wholeData[sliceIndex[0] + 10]) {
      setSliceIndex([sliceIndex[0] + 10, sliceIndex[1] + 10]);
    } else {
      setSliceIndex([0, 10]);
    }
    setData(wholeData.slice(sliceIndex[0], sliceIndex[1]));
  };
  const toPreviousBatch = () => {
    if (sliceIndex[0] - 10 > 0) {
      setSliceIndex([sliceIndex[0] - 10, sliceIndex[1] - 10]);
    } else {
      setSliceIndex([0, 10]);
    }
    setData(wholeData.slice(sliceIndex[0], sliceIndex[1]));
  };

  return (
    <>
      <a-scene>
        <a-camera
          position="0 2 0"
          wasd-controls-enabled="true"
          wasd-controls="acceleration:25"
          look-controls="
          // pointerLockEnabled: true;
          "
          fov="60"
          near="0.1"
          far="100"
        >
          <a-cursor></a-cursor>
        </a-camera>

        {/* left_wall */}
        <a-box
          id="left_wall"
          position="-5 2.5 1.25"
          rotation="0 0 0"
          depth="0.5"
          height="5"
          width="4"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* intx_bot pillar */}
        <a-box
          id="left_wall"
          position="-7 2.5 1.25"
          rotation="0 0 0"
          depth="1.5"
          height="5"
          width="1.5"
          color="red"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* first_wall */}
        <a-box
          id="first_wall"
          position="-7d 2.5 -1.25"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="4"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* __________________________________ first_painting */}
        {data[0] && (
          <a-box
            id="first_painting "
            onClick={() => {
              Swal.fire({
                title: data[0].name,
                text: `Created by: ${data[0].artistName}`,
                imageUrl: data[0].primaryImage,
                imageWidth: data[0].width,
                imageHeight: data[0].height,
              });
            }}
            position="-8.55 2 -2"
            rotation="0 90 0"
            depth="0.2"
            // ------------------------------------ //
            src={data[0].primaryImage}
            height={data[0].height / 100}
            width={data[0].width / 100}
          ></a-box>
        )}
        {/* second_wall */}
        <a-box
          id="second_wall"
          position="-7 2.5 -5.25"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="4"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* third_wall */}
        <a-box
          id="third_wall"
          position="-7d 2.5 -9.25"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="4"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* intx_bot pillar */}
        <a-box
          id="left_wall"
          position="-7 2.5 -11.25"
          rotation="0 0 0"
          depth="1.5"
          height="5"
          width="1.5"
          color="red"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* left_top_wall */}
        <a-box
          id="left_top_wall"
          position="-5 2.5 -11.25"
          rotation="0 0 0"
          depth="0.5"
          height="5"
          width="4"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* left_statue_wall */}
        <a-box
          id="left_statue_wall"
          position="-3 2.5 -13"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="4"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* back_statue_wall */}
        <a-box
          id="back_statue_wall"
          position="-1.25 2.5 -14.75"
          rotation="0 0 0"
          depth="0.5"
          height="5"
          width="4"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* right_statue_wall */}
        <a-box
          id="right_statue_wall"
          position="0.5 2.5 -13"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="4"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>
        {/* left_mini_wall */}
        <a-box
          id="left_mini_wall"
          position="1.75 2.5 -11.25"
          rotation="0 0 0"
          depth="0.5"
          height="5"
          width="2"
          src={"url(/assets/marble/black_2.jpg)"}
        ></a-box>

        {/* __________________________________ floor */}
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="25"
          height="30"
          color="white"
          src="url(/assets/wood_parquet/seamless_texture_rovere_wood_parquet_DIFFUSE.jpg)"
          repeat="5 5"
        ></a-plane>

        {/* __________________________________ roof */}
        {/* <a-box
          position="0 7 -4"
          rotation="-90 0 0"
          width="60"
          height="60"
          src="url(/assets/marble/black_2.jpg)"
          repeat="4 4"
        ></a-box> */}

        {/* elevator and elevator walls */}
        <>
          {/* elevator */}
          <a-entity
            onClick={floorTransporter}
            scale="0.014 0.014 0.014"
            position="0 3 4.84506"
            rotation="0 180 0"
            gltf-model="/assets/elevator/scene.gltf"
          ></a-entity>
          <a-triangle
            id="elevator_up_button"
            onPress={floorTransporter}
            position="-0.9086 1.70955 4.81707"
            color="red"
            side="double"
            scale="0.1 0.1 0.1"
            material=""
            geometry=""
          ></a-triangle>
          {/* elevator_wall */}
          <>
            {/* __________________________________ back_elevator_wall */}
            <a-box
              position="0 2.5 7.75"
              depth="0.5"
              height="5"
              width="12"
              src="url(/assets/marble/black_2.jpg)"
            ></a-box>
            {/* __________________________________ left_elevator_wall */}
            <a-box
              position="-2.75 2.5 4.5"
              rotation="0 90 0"
              depth="0.5"
              height="5"
              width="7"
              src="url(/assets/marble/black_2.jpg)"
            ></a-box>
            {/* __________________________________ right_elevator_wall */}
            <a-box
              position="2.75 2.5 -1.75"
              rotation="0 90 0"
              depth="0.5"
              height="5"
              width="19.5"
              src="url(/assets/marble/black_2.jpg)"
            ></a-box>
          </>
        </>

        {/* elevator */}
        {/* <a-entity
          onClick={floorTransporter}
          scale="0.014 0.014 0.014"
          position="0 3 4.84506"
          rotation="0 180 0"
          gltf-model="/assets/elevator/scene.gltf"
        ></a-entity>
        <a-triangle
          id="elevator_up_button"
          onPress={floorTransporter}
          position="-0.9086 1.70955 4.81707"
          color="red"
          side="double"
          scale="0.1 0.1 0.1"
          material=""
          geometry=""
        ></a-triangle> */}

        {/* omni light */}
        <a-light
          id="omni_light"
          position="0 2 0"
          angle="360"
          type="ambient"
          color="white"
          intensity="0.8"
        ></a-light>

        <a-sphere
          id="sphere"
          onClick={() => {
            emerge();
          }}
          radius="0.2"
          position="1.5 1.5 -9.5"
          rotation="0 0 0"
          src="url(/assets/marble/black_2.jpg)"
          // mixin="up_and_down"
        ></a-sphere>
        <a-cone
          id="left_cone"
          onClick={() => {
            toPreviousBatch();
          }}
          color="tomato"
          height="0.2"
          radius-bottom="0.1"
          radius-top="0.001"
          position="1.5 1.5 -9.5"
          rotation="0 0 90"
          // position="-0.8 1.5 -8"
        ></a-cone>
        <a-cone
          id="right_cone"
          onClick={() => {
            toNextBatch();
          }}
          color="tomato"
          height="0.2"
          radius-bottom="0.1"
          radius-top="0.001"
          rotation="0 0 -90"
          position="1.5 1.5 -9.5"
        ></a-cone>
        {/* <a-box
          position="-1 1.6 -5"
          animation="property: position; to: [1 8 -10, -1 1.6 -5]; dur: 2000; easing: linear; loop: true"
          color="tomato"
        ></a-box> */}
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </>
  );
}
