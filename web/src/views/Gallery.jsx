import "aframe";
import anime from "animejs/lib/anime.es.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Gallery() {
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:3000/lots";

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(BASE_URL).then((response) => response.json().then((x) => setData(x)));
  }, []);
  console.log(data, 666);

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
      position: ["0 1.5 -8", "-0.5 1.5 -8"],
    });
    anime({
      targets: "#right_cone",
      position: ["0 1.5 -8", "0.5 1.5 -8"],
    });
  }

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
        {/* __________________________________ assets */}
        <>
          <a-assets>
            <img id="number_box" src="assets/marble/black_23.jpg" />
            <a-asset-item id="scene" src="assets/scene.gltf" />
            <a-asset-item id="door" src="assets/door/scene.gltf" />
            <a-asset-item id="door" src="assets/carpets" />
            <a-mixin
              id="up_and_down"
              animation__bounceUp="property: position; from: 0 0 0 ; to: 0 1 0; dur:500; "
              animation__bounceDown="property: position; from: 0 1 0 ; to: 0 0 0; dur:500; start-events: animationcomplete__bounceup"
            ></a-mixin>
          </a-assets>
        </>
        {/* __________________________________floor */}
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="25"
          height="30"
          color="white"
          src="url(/assets/wood_parquet/seamless_texture_rovere_wood_parquet_DIFFUSE.jpg)"
          repeat="5 5"
        ></a-plane>
        {/* __________________________________roof */}
        <a-box
          position="0 7 -4"
          rotation="-90 0 0"
          width="60"
          height="60"
          src="url(/assets/marble/black_2.jpg)"
          repeat="4 4"
        ></a-box>
        {/* __________________________________back elevator wall */}
        <a-box
          position="0 3.5 7.75"
          depth="0.5"
          height="7"
          width="12"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________left-side elevator wall */}
        <a-box
          position="-2.75 3.5 4.5"
          rotation="0 90 0"
          depth="0.5"
          height="7"
          width="7"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________right-side elevator wall */}
        <a-box
          position="2.75 3.5 4.5"
          rotation="0 90 0"
          depth="0.5"
          height="7"
          width="7"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________ first */}
        <>
          {/* __________________________________ first_wall */}
          <a-box
            id="first_wall "
            position="-6 3.5 1.25"
            rotation="0 0 0"
            depth="0.5"
            height="7"
            width="6"
            src={"url(/assets/marble/black_2.jpg)"}
          ></a-box>
          {/* __________________________________ first_number */}
          <a-text
            position="-6 4 0.95"
            rotation="0 180 0"
            width="15"
            color="white"
            value="1"
            geometry="primitive:plane, src='#number_box'"
            side="double"
            align="center"
            fontImage="url(/assets/marble/black_2.jpg)"
            src="#number_box"
          ></a-text>
          {/* __________________________________ first_painting */}
          {data && (
            <a-box
              id="bottom-left horizontal painting"
              onClick={() => {
                Swal.fire({
                  title: data[0].name,
                  text: `Created by: ${data[0].artistName}`,
                  imageUrl: data[0].primaryImage,
                  imageWidth: data[0].width,
                  imageHeight: data[0].height,
                });
              }}
              position={`${position.first[0]} ${position.first[1]} ${position.first[2]}`}
              rotation="0 0 0"
              depth="0.2"
              // ------------------------------------ //
              src={data[0].primaryImage}
              height={data[0].height / 100}
              width={data[0].width / 100}
            ></a-box>
          )}
          {/* __________________________________ first_description */}
          {/* <a-box
            id="first_description"
            position={`${position.first[0]} ${position.first[1]} ${position.first[2]}`}
            rotation="0 0 0"
            depth="0.2"
            // ------------------------------------ //
            src="url(\assets\paintings\p2.jpg)"
            height="0.6"
            width="2"
          ></a-box> */}
        </>
        {/* __________________________________bottom-right horizontal wall */}
        <a-box
          id="bottom-right horizontal wall "
          position="6 3.5 1.25"
          rotation="0 0 0"
          depth="0.5"
          height="7"
          width="6"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________bottom_right_horizontal_number */}
        <a-text
          id="bottom_right_horizontal_number"
          position="6 3.5 0.95"
          rotation="0 180 0"
          width="15"
          color="white"
          value="10"
          geometry="primitive:plane, src='#number_box'"
          side="double"
          align="center"
          fontImage="url(/assets/marble/black_1.jpg)"
          src="#number_box"
        ></a-text>
        {/* __________________________________bottom_right_horizontal_painting */}
        {data && (
          <a-box
            id="bottom_right_horizontal_painting "
            position="6 2 1.05"
            rotation="0 0 0"
            depth="0.2"
            // ------------------------------------ //
            src={data[1].primaryImage}
            height={data[1].height / 100}
            width={data[1].width / 100}
          ></a-box>
        )}

        {/* __________________________________second */}
        <>
          {/* __________________________________second_wall */}
          <a-box
            id="second_wall "
            position="-8.75 3.5 -2"
            rotation="0 90 0"
            depth="0.5"
            height="7"
            width="6"
            src="url(/assets/marble/black_2.jpg)"
          ></a-box>
          {/* __________________________________ second_number_box */}
          <a-text
            id="second_number_box"
            position="-8.5 4 -2"
            rotation="0 90 0"
            width="15"
            color="white"
            value="2"
            geometry="primitive:plane, src='#number_box'"
            side="double"
            align="center"
            fontImage="url(/assets/marble/black_1.jpg)"
            src="#number_box"
          ></a-text>
          {/* __________________________________ second_painting */}
          {data && (
            <a-box
              id="second_painting "
              onClick={() => {
                Swal.fire({
                  title: data[1].name,
                  text: `Created by: ${data[1].artistName}`,
                  imageUrl: data[1].primaryImage,
                  imageWidth: data[1].width,
                  imageHeight: data[1].height,
                });
              }}
              position="-8.55 2 -2"
              rotation="0 90 0"
              depth="0.2"
              // ------------------------------------ //
              src={data[1].primaryImage}
              height={data[1].height / 100}
              width={data[1].width / 100}
            ></a-box>
          )}
        </>

        {/* __________________________________ third */}
        <>
          {/* __________________________________ third_wall */}
          <a-box
            id="left-1 vertical wall "
            position="-8.75 3.5 -8"
            rotation="0 90 0"
            depth="0.5"
            height="7"
            width="6"
            src="url(/assets/marble/black_2.jpg)"
          ></a-box>
          {/* __________________________________ third_number_box */}
          <a-text
            id="left_1_number_box"
            position="-8.5 3.5 -8"
            rotation="0 90 0"
            width="15"
            color="white"
            value="3"
            geometry="primitive:plane, src='#number_box'"
            side="double"
            align="center"
            fontImage="url(/assets/marble/black_1.jpg)"
            src="#number_box"
          ></a-text>
          {/* __________________________________ third_painting */}
          {data && (
            <a-box
              id="left_1_vertical_painting"
              position="-8.55 2 -8"
              rotation="0 90 0"
              depth="0.2"
              // ------------------------------------ //
              src={data[2].primaryImage}
              height={data[2].height / 100}
              width={data[2].width / 100}
            ></a-box>
          )}
        </>

        {/* __________________________________ fourth_vertical_wall */}
        <a-box
          id="left-2 vertical wall"
          position="-8.75 3.5 -14"
          rotation="0 90 0"
          depth="0.5"
          height="7"
          width="6"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________ fourth_number_box */}
        <a-text
          id="left_2_number_box"
          position="-8.5 3.5 -14"
          rotation="0 90 0"
          width="15"
          color="white"
          value="4"
          geometry="primitive:plane, src='#number_box'"
          side="double"
          align="center"
          fontImage="url(/assets/marble/black_1.jpg)"
          src="#number_box"
        ></a-text>
        {/* __________________________________ fourth_painting */}
        {data && (
          <a-box
            id="left_2_vertical_painting"
            position="-8.55 2 -14"
            rotation="0 90 0"
            depth="0.2"
            // ------------------------------------ //
            src={data[3].primaryImage}
            height={data[3].height / 100}
            width={data[3].width / 100}
          ></a-box>
        )}

        {/* __________________________________ fifth */}
        <>
          {/* __________________________________ fifth_wall */}
          <a-box
            id="top-0 horizontal wall "
            position="-6 3.5 -17"
            rotation="0 0 0"
            depth="0.5"
            height="7"
            width="6"
            src="url(/assets/marble/black_2.jpg)"
          ></a-box>
          {/* __________________________________ fifth_number */}
          <a-text
            id="top_0_number_box"
            position="-6 3.5 -16.7"
            rotation="0 0 0"
            width="15"
            color="white"
            value="5"
            geometry="primitive:plane, src='#number_box'"
            side="double"
            align="center"
            fontImage="url(/assets/marble/black_2.jpg)"
            src="#number_box"
          ></a-text>
          {/* __________________________________ fifth_painting */}
          {data && (
            <a-box
              id="top_0_horizontal_painting "
              position="-6 2 -16.8"
              rotation="0 0 0"
              depth="0.2"
              // ------------------------------------ //
              src={data[4].primaryImage}
              height={data[4].height / 100}
              width={data[4].width / 100}
            ></a-box>
          )}
        </>

        {/* __________________________________ seventh */}
        <>
          {/* __________________________________seventh_wall */}
          <a-box
            id="seventh_wall "
            position="8.75 3.5 -14"
            rotation="0 90 0"
            depth="0.5"
            height="7"
            width="6"
            src="url(/assets/marble/black_2.jpg)"
          ></a-box>
          {/* __________________________________ seventh_number_box */}
          <a-text
            id="seventh_number_box"
            position="8.5 3.5 -14"
            rotation="0 -90 0"
            width="15"
            color="white"
            value="7"
            geometry="primitive:plane, src='#number_box'"
            side="double"
            align="center"
            fontImage="url(/assets/marble/black_1.jpg)"
            src="#number_box"
          ></a-text>
          {/* __________________________________ seventh_painting */}
          {data && (
            <a-box
              id="seventh_painting "
              position="8.55 2 -14"
              rotation="0 90 0"
              depth="0.2"
              // ------------------------------------ //
              src={data[6].primaryImage}
              height={data[6].height / 100}
              width={data[6].width / 100}
            ></a-box>
          )}
        </>

        {/* __________________________________ eighth */}
        <>
          {/* __________________________________ eighth_wall */}
          <a-box
            id="right-1 vertical wall "
            position="8.75 3.5 -8"
            rotation="0 90 0"
            depth="0.5"
            height="7"
            width="6"
            src="url(/assets/marble/black_2.jpg)"
          ></a-box>
          {/* __________________________________ eighth_number_box */}
          <a-text
            id="eighth_number_box"
            position="8.5 3.5 -8"
            rotation="0 -90 0"
            width="15"
            color="white"
            value="8"
            geometry="primitive:plane, src='#number_box'"
            side="double"
            align="center"
            fontImage="url(/assets/marble/black_1.jpg)"
            src="#number_box"
          ></a-text>
          {/* __________________________________ eighth_painting */}
          {data && (
            <a-box
              id="right_1_vertical_painting "
              position="8.55 2 -8"
              rotation="0 90 0"
              depth="0.2"
              // ------------------------------------ //
              src={data[7].primaryImage}
              height={data[7].height / 100}
              width={data[7].width / 100}
            ></a-box>
          )}
        </>

        {/* __________________________________ ninth */}
        <>
          {/* __________________________________ ninth_wall */}
          <a-box
            id="right-0 vertical wall "
            position="8.75 3.5 -2"
            rotation="0 90 0"
            depth="0.5"
            height="7"
            width="6"
            src="url(/assets/marble/black_2.jpg)"
          ></a-box>
          {/* __________________________________ ninth_number_box */}
          <a-text
            id="eighth_number_box"
            position="8.5 3.5 -2"
            rotation="0 -90 0"
            width="15"
            color="white"
            value="9"
            geometry="primitive:plane, src='#number_box'"
            side="double"
            align="center"
            fontImage="url(/assets/marble/black_1.jpg)"
            src="#number_box"
          ></a-text>
          {/* __________________________________ ninth_painting */}
          {data && (
            <a-box
              id="right_0_vertical_painting "
              position="8.55 2 -2"
              rotation="0 90 0"
              depth="0.2"
              // ------------------------------------ //
              src={data[8].primaryImage}
              height={data[8].height / 100}
              width={data[8].width / 100}
            ></a-box>
          )}
        </>

        {/* __________________________________ top_1_horizontal_wall */}
        <a-box
          id="top-1 horizontal wall "
          position="0 3.5 -17"
          rotation="0 0 0"
          depth="0.5"
          height="7"
          width="6"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________ sixth_number */}
        <a-text
          id="top_1_number_box"
          position="6 3.5 -16.7"
          rotation="0 0 0"
          width="15"
          color="white"
          value="6"
          geometry="primitive:plane, src='#number_box'"
          side="double"
          align="center"
          fontImage="url(/assets/marble/black_2.jpg)"
          src="#number_box"
        ></a-text>
        {/* __________________________________top-2 horizontal wall */}
        <a-box
          id="top-2 horizontal wall "
          position="6 3.5 -17"
          rotation="0 0 0"
          depth="0.5"
          height="7"
          width="6"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________top-0 horizontal painting */}
        <a-box
          id="top_0_horizontal_painting "
          position="6 2 -16.8"
          rotation="0 0 0"
          depth="0.2"
          // ------------------------------------ //
          src="url(\assets\paintings\p2.jpg)"
          height="2.08"
          width="4.1"
        ></a-box>
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
        {/* __________________________________top-right diamond light */}
        <a-light
          id="top_right_diamond_light"
          type="spot"
          angle="50"
          color="white"
          intensity="0.6"
          distance="25"
          rotation="-45 -45 0"
          position="6.8 4.8 -10.2"
          penumbra="0.4"
        ></a-light>
        {/* light for top wall painting */}
        <a-light
          id="top_diamond_light"
          type="spot"
          angle="50"
          color="white"
          intensity="0.6"
          distance="25"
          rotation="-45 0 0"
          position="0 4.8 -11"
          penumbra="0.4"
        ></a-light>
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
        {/* omni light */}
        <a-light
          id="omni_light"
          position="0 2 0"
          angle="360"
          type="ambient"
          color="white"
          intensity="0.8"
        ></a-light>
        {/* barrier */}
        {/* <a-entity
          id="barrier"
          scale="1 1 1"
          position="0 0 -14.5"
          rotation="0 180 0"
          gltf-model="url(/assets/barrier/scene.gltf)"
        ></a-entity> */}
        {/* sofa */}
        <a-entity
          id="sofa"
          scale="1 1 1"
          position="0 0 -5"
          rotation="0 0 0"
          gltf-model="url(/assets/mini_sofa/scene.gltf)"
        ></a-entity>
        <a-sphere
          id="sphere"
          onClick={() => {
            emerge();
          }}
          radius="0.2"
          position="0 1.5 -8"
          rotation="0 0 0"
          src="url(/assets/marble/black_2.jpg)"
          // mixin="up_and_down"
        ></a-sphere>
        <a-cone
          id="left_cone"
          color="tomato"
          height="0.2"
          radius-bottom="0.1"
          radius-top="0.001"
          rotation="0 0 90"
          position="0 1.5 -8"
          // position="-0.8 1.5 -8"
        ></a-cone>
        <a-cone
          id="right_cone"
          color="tomato"
          height="0.2"
          radius-bottom="0.1"
          radius-top="0.001"
          rotation="0 0 -90"
          position="0 1.5 -8"
          // position="-0.8 1.5 -8"
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
