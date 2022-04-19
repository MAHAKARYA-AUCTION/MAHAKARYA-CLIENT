import "aframe";
import "aframe-extras";
import "aframe-fps-look-controls-component";
import anime from "animejs/lib/anime.es.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function Gallery() {
  const navigate = useNavigate();
  const location = useLocation();

  // const BASE_URL = "http://localhost:3000/lots";
  const BASE_URL = "http://api.mahakarya-auction.com/collections";

  const [wholeData, setWholeData] = useState(null);
  const [data, setData] = useState(null);
  const [sliceIndex, setSliceIndex] = useState([0, 10]);

  useEffect(() => {
    fetch(BASE_URL).then((response) =>
      response.json().then((x) => {
        x = x.filter((e) => e.galleryName == location.pathname.slice(1));
        // console.log(x);
        x[0].Lots.map((y, index) => (y.number = index + 1));
        setWholeData(x[0].Lots);
        setData(x[0].Lots.slice(sliceIndex[0], sliceIndex[1]));
      })
    );
  }, []);
  // console.log(wholeData, 666);
  // console.log(data);

  const floorTransporter = () => {
    navigate("../david-gallery", { replace: true });
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
    ninth: [0, 0, 0]
  };

  anime({
    targets: "#sphere",
    rotation: "0 2 0",
    loop: true,
    autoplay: true
  });

  function emerge() {
    anime({
      targets: "#left_cone",
      position: ["0 1.5 -8", "-0.5 1.5 -8"]
    });
    anime({
      targets: "#right_cone",
      position: ["0 1.5 -8", "0.5 1.5 -8"]
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
          position="0 2 7"
          wasd-controls-enabled="true"
          wasd-controls="acceleration:25"
          // look-controls="
          // // pointerLockEnabled: true;
          // "
          fov="60"
          near="0.1"
          far="100"
        >
          <a-cursor></a-cursor>
        </a-camera>

        {/* __________________________________ assets
        <>
          <a-assets>
            <img
              id="advertisement"
              src="https://mahakarya-auction.s3.ap-southeast-1.amazonaws.com/painting/collection-1.jpg"
            />
          </a-assets>
        </>

        <a-box src="#advertisement"></a-box> */}

        {/* __________________________________ floor */}
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="25"
          height="30"
          // color="brown"
          src="url(/assets/wood_parquet/wood_parquet_2.jpg)"
          // src="url(/assets/square_floor_4k/textures/square_floor_diff_4k.jpg)"
          repeat="10 10"
        ></a-plane>

        {/* __________________________________ roof */}
        <a-box
          position="0 7 -4"
          rotation="-90 0 0"
          width="60"
          height="60"
          color="saddlebrown"
          src="url(/assets/marble/black_2.jpg)"
          repeat="4 4"
        ></a-box>

        {/* elevator and elevator walls */}
        <>
          {/* elevator */}
          <a-entity
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
          <a-circle
            id="elevator_lift_button"
            onClick={floorTransporter}
            color="red"
            side="double"
            position="0.882 1.7285 5.080"
            scale="0.1 0.1 0.1"
          ></a-circle>
          {/* elevator_wall */}
          <>
            {/* __________________________________back elevator wall */}
            <a-box
              position="0 3.5 7.75"
              depth="0.5"
              height="7"
              width="12"
              color="firebrick"
              src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
            ></a-box>
            {/* __________________________________left-side elevator wall */}
            <a-box
              position="-2.75 3.5 4.5"
              rotation="0 90 0"
              depth="0.5"
              height="7"
              width="7"
              color="firebrick"
              src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
            ></a-box>
            {/* __________________________________right-side elevator wall */}
            <a-box
              position="2.75 3.5 4.5"
              rotation="0 90 0"
              depth="0.5"
              height="7"
              width="7"
              color="firebrick"
              src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
            ></a-box>
          </>
        </>

        {/* paintings */}
        <>
          {data && (
            <>
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
                  color="firebrick"
                  src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
                ></a-box>
                {/* __________________________________ first_light */}
                <a-light
                  id="first_light"
                  type="spot"
                  angle="50"
                  color="white"
                  intensity="0.6"
                  distance="25"
                  rotation="-45 180 0"
                  position="-6 5 -1"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ first_number_box */}
                {data[0] && (
                  <a-text
                    id="first_number_box"
                    position="-6 4.5 0.95"
                    rotation="0 180 0"
                    width="15"
                    color="white"
                    value={data[0].number}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_2.jpg)"
                    src="#number_box"
                  ></a-text>
                )}
                {/* __________________________________ first_painting */}
                {data[0] && (
                  <a-box
                    id="first_painting"
                    onClick={() => {
                      Swal.fire({
                        title: data[0].name,
                        text: `Created by: ${data[0].artistName}`,
                        imageUrl: data[0].primaryImage,
                        imageWidth: data[0].width,
                        imageHeight: data[0].height
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
                {/* __________________________________ first_frame */}
                {data[0] && (
                  <a-box
                    id="first_frame"
                    position="-6 2 1.075"
                    rotation="0 0 0"
                    depth="0.2"
                    scale="1.05 1.05 1.05"
                    // ------------------------------------ //
                    src="url(/assets/textures/wooden_frame.jpg)"
                    height={data[0].height / 100}
                    width={data[0].width / 100}
                  ></a-box>
                )}
              </>
              {/* __________________________________ second */}
              <>
                {/* __________________________________second_wall */}
                <a-box
                  id="second_wall "
                  position="-8.75 3.5 -2"
                  rotation="0 90 0"
                  depth="0.5"
                  height="7"
                  width="6"
                  color="firebrick"
                  src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
                ></a-box>
                {/* __________________________________ second_light */}
                <a-light
                  id="second_light"
                  type="spot"
                  angle="50"
                  color="white"
                  intensity="0.6"
                  distance="25"
                  rotation="-45 90 0"
                  position="-6.5 5 -2"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ second_number_box */}
                {data[1] && (
                  <a-text
                    id="second_number_box"
                    position="-8.5 4.5 -2"
                    rotation="0 90 0"
                    width="15"
                    color="white"
                    value={data[1].number}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_1.jpg)"
                    src="#number_box"
                  ></a-text>
                )}
                {/* __________________________________ second_painting */}
                {data[1] && (
                  <a-box
                    id="second_painting "
                    onClick={() => {
                      Swal.fire({
                        title: data[1].name,
                        text: `Created by: ${data[1].artistName}`,
                        imageUrl: data[1].primaryImage,
                        imageWidth: data[1].width,
                        imageHeight: data[1].height
                      });
                    }}
                    position="-8.55 2 -1.995"
                    rotation="0 90 0"
                    depth="0.2"
                    // ------------------------------------ //
                    src={data[1]?.primaryImage}
                    height={data[1].height / 100}
                    width={data[1].width / 100}
                  ></a-box>
                )}
                {/* __________________________________ second_frame */}
                {data[1] && (
                  <a-box
                    id="second_frame "
                    position="-8.56 2 -2"
                    rotation="0 90 0"
                    depth="0.2"
                    scale="1.07 1.07 1.07"
                    // ------------------------------------ //
                    src="url(/assets/textures/wooden_frame.jpg)"
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
                  color="firebrick"
                  src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
                ></a-box>
                {/* __________________________________ third_light */}
                <a-light
                  id="third_light"
                  type="spot"
                  angle="50"
                  color="white"
                  intensity="0.6"
                  distance="25"
                  rotation="-45 90 0"
                  position="-6.5 5 -8"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ third_number_box */}
                {data[2] && (
                  <a-text
                    id="third_number_box"
                    position="-8.5 4.5 -8"
                    rotation="0 90 0"
                    width="15"
                    color="white"
                    value={data[2].number}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_1.jpg)"
                    src="#number_box"
                  ></a-text>
                )}
                {/* __________________________________ third_painting */}
                {data[2] && (
                  <a-box
                    id="left_1_vertical_painting"
                    onClick={() => {
                      Swal.fire({
                        title: data[2].name,
                        text: `Created by: ${data[2].artistName}`,
                        imageUrl: data[2].primaryImage,
                        imageWidth: data[2].width,
                        imageHeight: data[2].height
                      });
                    }}
                    position="-8.55 2 -8"
                    rotation="0 90 0"
                    depth="0.2"
                    // ------------------------------------ //
                    src={data[2].primaryImage}
                    height={data[2].height / 100}
                    width={data[2].width / 100}
                  ></a-box>
                )}
                {/* __________________________________ third_frame */}
                {data[1] && (
                  <a-box
                    id="third_frame "
                    position="-8.58 2 -8"
                    rotation="0 90 90"
                    depth="0.2"
                    scale="1.07 1.07 1.07"
                    // ------------------------------------ //
                    src="url(/assets/textures/wooden_frame.jpg)"
                    height={data[1].height / 100}
                    width={data[1].width / 100}
                  ></a-box>
                )}
              </>
              {/* __________________________________ fourth */}
              <>
                {/* __________________________________ fourth_vertical_wall */}
                <a-box
                  id="left-2 vertical wall"
                  position="-8.75 3.5 -14"
                  rotation="0 90 0"
                  depth="0.5"
                  height="7"
                  width="6"
                  color="firebrick"
                  src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
                ></a-box>
                {/* __________________________________ fourth_light */}
                <a-light
                  id="fourth_light"
                  type="spot"
                  angle="50"
                  color="white"
                  intensity="0.6"
                  distance="25"
                  rotation="-45 90 0"
                  position="-6.5 5 -14"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ fourth_number_box */}
                {data[3] && (
                  <a-text
                    id="fourth_number_box"
                    position="-8.5 4.5 -14"
                    rotation="0 90 0"
                    width="15"
                    color="white"
                    value={data[3].number}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_1.jpg)"
                    src="#number_box"
                  ></a-text>
                )}
                {/* __________________________________ fourth_painting */}
                {data[3] && (
                  <a-box
                    id="left_2_vertical_painting"
                    onClick={() => {
                      Swal.fire({
                        title: data[3].name,
                        text: `Created by: ${data[3].artistName}`,
                        imageUrl: data[3].primaryImage,
                        imageWidth: data[3].width,
                        imageHeight: data[3].height
                      });
                    }}
                    position="-8.55 2 -14"
                    rotation="0 90 0"
                    depth="0.2"
                    // ------------------------------------ //
                    src={data[3].primaryImage}
                    height={data[3].height / 100}
                    width={data[3].width / 100}
                  ></a-box>
                )}
                {/* __________________________________ fourth_frame */}
                {data[3] && (
                  <a-box
                    id="fourth_frame"
                    onClick={() => {
                      Swal.fire({
                        title: data[3].name,
                        text: `Created by: ${data[3].artistName}`,
                        imageUrl: data[3].primaryImage,
                        imageWidth: data[3].width,
                        imageHeight: data[3].height,
                      });
                    }}
                    position="-8.58 2 -14"
                    rotation="0 90 0"
                    scale="1.1 1.1 1.1"
                    depth="0.2"
                    // ------------------------------------ //
                    src="url(/assets/textures/wooden_frame.jpg)"
                    ws
                    height={data[3].height / 100}
                    width={data[3].width / 100}
                  ></a-box>
                )}
              </>
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
                  color="firebrick"
                  src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
                ></a-box>
                {/* __________________________________ fifth_light */}
                <a-light
                  id="fifth_light"
                  type="spot"
                  angle="50"
                  color="white"
                  intensity="0.6"
                  distance="25"
                  rotation="-45 0 0"
                  position="-6 5 -14"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ fifth_number_box */}
                {data[4] && (
                  <a-text
                    id="fifth_number_box"
                    position="-6 4.5 -16.7"
                    rotation="0 0 0"
                    width="15"
                    color="white"
                    value={data[4].number}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_2.jpg)"
                    src="#number_box"
                  ></a-text>
                )}
                {/* __________________________________ fifth_painting */}
                {data[4] && (
                  <a-box
                    id="fifth_painting"
                    onClick={() => {
                      Swal.fire({
                        title: data[4].name,
                        text: `Created by: ${data[4].artistName}`,
                        imageUrl: data[4].primaryImage,
                        imageWidth: data[4].width,
                        imageHeight: data[4].height
                      });
                    }}
                    position="-6 2 -16.8"
                    rotation="0 0 0"
                    depth="0.2"
                    // ------------------------------------ //
                    src={data[4].primaryImage}
                    height={data[4].height / 100}
                    width={data[4].width / 100}
                  ></a-box>
                )}
                {/* __________________________________ fifth_frame */}
                {data[4] && (
                  <a-box
                    id="fifth_frame"
                    onClick={() => {
                      Swal.fire({
                        title: data[4].name,
                        text: `Created by: ${data[4].artistName}`,
                        imageUrl: data[4].primaryImage,
                        imageWidth: data[4].width,
                        imageHeight: data[4].height,
                      });
                    }}
                    position="-6 2 -16.85s"
                    rotation="0 0 0"
                    scale="1.05 1.05 1.05"
                    depth="0.2"
                    // ------------------------------------ //
                    src="url(/assets/textures/wooden_frame.jpg)"
                    height={data[4].height / 100}
                    width={data[4].width / 100}
                  ></a-box>
                )}
              </>
              {/* __________________________________ sixth */}
              <>
                {/* __________________________________ sixth_wall */}
                <a-box
                  id="sixth_wall"
                  position="6 3.5 -17"
                  rotation="0 0 0"
                  depth="0.5"
                  height="7"
                  width="6"
                  color="firebrick"
                  src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
                ></a-box>
                {/* __________________________________ sixth_light */}
                <a-light
                  id="sixth_light"
                  type="spot"
                  angle="50"
                  color="white"
                  intensity="0.6"
                  distance="25"
                  rotation="-45 0 0"
                  position="6 5 -14"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ sixth_number_box */}
                {data[5] && (
                  <a-text
                    id="sixth_number_box"
                    position="6 4.5 -16.7"
                    rotation="0 0 0"
                    width="15"
                    color="white"
                    value={data[5].number}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_2.jpg)"
                    src="#number_box"
                  ></a-text>
                )}
                {/* __________________________________ sixth_painting */}
                {data[5] && (
                  <a-box
                    id="sixth_painting"
                    onClick={() => {
                      Swal.fire({
                        title: data[5].name,
                        text: `Created by: ${data[5].artistName}`,
                        imageUrl: data[5].primaryImage,
                        imageWidth: data[5].width,
                        imageHeight: data[5].height
                      });
                    }}
                    position="6 2 -16.8"
                    rotation="0 0 0"
                    depth="0.2"
                    // ------------------------------------ //
                    src={data[5].primaryImage}
                    height={data[5].height / 100}
                    width={data[5].width / 100}
                  ></a-box>
                )}
                {/* __________________________________ sixth_frame */}
                {data[5] && (
                  <a-box
                    id="sixth_frame"
                    onClick={() => {
                      Swal.fire({
                        title: data[5].name,
                        text: `Created by: ${data[5].artistName}`,
                        imageUrl: data[5].primaryImage,
                        imageWidth: data[5].width,
                        imageHeight: data[5].height,
                      });
                    }}
                    position="6 2 -16.83"
                    rotation="0 0 0"
                    scale="1.1 1.1 1.1"
                    depth="0.2"
                    // ------------------------------------ //
                    src="url(/assets/textures/wooden_frame.jpg)"
                    height={data[5].height / 100}
                    width={data[5].width / 100}
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
                  color="firebrick"
                  src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
                ></a-box>
                {/* __________________________________ seventh_light */}
                <a-light
                  id="seventh_light"
                  type="spot"
                  angle="50"
                  color="white"
                  intensity="0.6"
                  distance="25"
                  rotation="-45 -90 0"
                  position="6.5 5 -14"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ seventh_number_box */}
                {data[6] && (
                  <a-text
                    id="seventh_number_box"
                    position="8.5 4.5 -14"
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
                )}
                {/* __________________________________ seventh_painting */}
                {data[6] && (
                  <a-box
                    id="seventh_painting"
                    onClick={() => {
                      Swal.fire({
                        title: data[6].name,
                        text: `Created by: ${data[6].artistName}`,
                        imageUrl: data[6].primaryImage,
                        imageWidth: data[6].width,
                        imageHeight: data[6].height
                      });
                    }}
                    position="8.55 2 -14"
                    rotation="0 90 0"
                    depth="0.2"
                    // ------------------------------------ //
                    src={data[6].primaryImage}
                    height={data[6].height / 100}
                    width={data[6].width / 100}
                  ></a-box>
                )}

                {/* __________________________________ seventh_frame */}
                {data[6] && (
                  <a-box
                    id="seventh_frame"
                    onClick={() => {
                      Swal.fire({
                        title: data[6].name,
                        text: `Created by: ${data[6].artistName}`,
                        imageUrl: data[6].primaryImage,
                        imageWidth: data[6].width,
                        imageHeight: data[6].height,
                      });
                    }}
                    position="8.563 2 -14"
                    rotation="0 90 0"
                    scale="1.1 1.1 1.1"
                    depth="0.2"
                    // ------------------------------------ //
                    src="url(/assets/textures/wooden_frame.jpg)"
                    height={data[6].height / 100}
                    width={data[6].width / 100}
                  ></a-box>
                )}
              </>
              {/* __________________________________ eighth */}
              <>
                {/* __________________________________ eighth_wall */}
                <a-box
                  id="eighth_wall"
                  position="8.75 3.5 -8"
                  rotation="0 90 0"
                  depth="0.5"
                  height="7"
                  width="6"
                  color="firebrick"
                  src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
                ></a-box>
                {/* __________________________________ eighth_number_box */}
                {data[7] && (
                  <a-text
                    id="eighth_number_box"
                    position="8.5 4.5 -8"
                    rotation="0 -90 0"
                    width="15"
                    color="white"
                    value={data[7].number}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_1.jpg)"
                    src="#number_box"
                  ></a-text>
                )}
                {/* __________________________________ eighth_light */}
                <a-light
                  id="eighth_light"
                  type="spot"
                  angle="50"
                  color="white"
                  intensity="0.6"
                  distance="25"
                  rotation="-45 -90 0"
                  position="6.5 5 -8"
                  penumbra="0.4"
                ></a-light>

                {/* __________________________________ eighth_frame */}
                {data[7] && (
                  <a-box
                    id="eighth_frame "
                    onClick={() => {
                      Swal.fire({
                        title: data[7].name,
                        text: `Created by: ${data[7].artistName}`,
                        imageUrl: data[7].primaryImage,
                        imageWidth: data[7].width,
                        imageHeight: data[7].height,
                      });
                    }}
                    position="8.57 2 -8"
                    rotation="0 90 0"
                    scale="1.1 1.1 1.1"
                    depth="0.2"
                    // ------------------------------------ //
                    src="url(/assets/textures/wooden_frame.jpg)"
                    height={data[7].height / 100}
                    width={data[7].width / 100}
                  ></a-box>
                )}
                {/* __________________________________ eighth_painting */}
                {data[7] && (
                  <a-box
                    id="right_1_vertical_painting "
                    onClick={() => {
                      Swal.fire({
                        title: data[7].name,
                        text: `Created by: ${data[7].artistName}`,
                        imageUrl: data[7].primaryImage,
                        imageWidth: data[7].width,
                        imageHeight: data[7].height
                      });
                    }}
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
                  color="firebrick"
                  src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
                ></a-box>
                {/* __________________________________ ninth_light */}
                <a-light
                  id="ninth_light"
                  type="spot"
                  angle="50"
                  color="white"
                  intensity="0.6"
                  distance="25"
                  rotation="-45 -90 0"
                  position="6.5 5 -2"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ ninth_number_box */}
                {data[8] && (
                  <a-text
                    id="eighth_number_box"
                    position="8.5 4.5 -2"
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
                )}
                {/* __________________________________ ninth_painting */}
                {data[8] && (
                  <a-box
                    id="right_0_vertical_painting "
                    onClick={() => {
                      Swal.fire({
                        title: data[8].name,
                        text: `Created by: ${data[8].artistName}`,
                        imageUrl: data[8].primaryImage,
                        imageWidth: data[8].width,
                        imageHeight: data[8].height
                      });
                    }}
                    position="8.55 2 -2"
                    rotation="0 90 0"
                    depth="0.2"
                    // ------------------------------------ //
                    src={data[8].primaryImage}
                    height={data[8].height / 100}
                    width={data[8].width / 100}
                  ></a-box>
                )}

                {/* __________________________________ ninth_painting */}
                {data[8] && (
                  <a-box
                    id="right_0_vertical_painting "
                    onClick={() => {
                      Swal.fire({
                        title: data[8].name,
                        text: `Created by: ${data[8].artistName}`,
                        imageUrl: data[8].primaryImage,
                        imageWidth: data[8].width,
                        imageHeight: data[8].height,
                      });
                    }}
                    position="8.60 2 -2"
                    rotation="0 90 0"
                    scale="1.1 1.1 1.1"
                    depth="0.2"
                    // ------------------------------------ //
                    src="url(/assets/textures/wooden_frame.jpg)"
                    height={data[8].height / 100}
                    width={data[8].width / 100}
                  ></a-box>
                )}
              </>
              {/* __________________________________ tenth */}
              <>
                {/* __________________________________ tenth_wall */}
                <a-box
                  id="bottom-right horizontal wall "
                  position="6 3.5 1.25"
                  rotation="0 0 0"
                  depth="0.5"
                  height="7"
                  width="6"
                  color="firebrick"
                  src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
                ></a-box>
                {/* __________________________________ tenth_light */}
                <a-light
                  id="tenth_light"
                  type="spot"
                  angle="50"
                  color="white"
                  intensity="0.6"
                  distance="25"
                  rotation="-45 180 0"
                  position="6 5 -1"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ tenth_number_box */}
                {data[9] && (
                  <a-text
                    id="bottom_right_horizontal_number"
                    position="6 4.5 0.95"
                    rotation="0 180 0"
                    width="15"
                    color="white"
                    value={data[9].number}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_1.jpg)"
                    src="#number_box"
                  ></a-text>
                )}
                {/* __________________________________ tenth_painting */}
                {data[9] && (
                  <a-box
                    id="bottom_right_horizontal_painting "
                    onClick={() => {
                      Swal.fire({
                        title: data[9].name,
                        text: `Created by: ${data[9].artistName}`,
                        imageUrl: data[9].primaryImage,
                        imageWidth: data[9].width,
                        imageHeight: data[9].height
                      });
                    }}
                    position="6 2 1.05"
                    rotation="0 0 0"
                    depth="0.2"
                    // ------------------------------------ //
                    src={data[9].primaryImage}
                    height={data[9].height / 100}
                    width={data[9].width / 100}
                  ></a-box>
                )}
                {/* __________________________________ tenth_frame */}
                {data[9] && (
                  <a-box
                    id="tenth_frame "
                    position="6 2 1.10"
                    rotation="0 0 0"
                    scale="1.1 1.1 1.1"
                    depth="0.2"
                    // ------------------------------------ //
                    src="url(/assets/textures/wooden_frame.jpg)"
                    height={data[9].height / 100}
                    width={data[9].width / 100}
                  ></a-box>
                )}
              </>
            </>
          )}
        </>

        {/* __________________________________ empty_wall */}
        <a-box
          id="top-1 horizontal wall "
          position="0 3.5 -17"
          rotation="0 0 0"
          depth="0.5"
          height="7"
          width="6"
          color="firebrick"
          src="url(/assets/wall/Kanawa Studio Wood Stripe.jpg)"
        ></a-box>

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

        {/* window */}
        <a-entity
          id="window"
          scale="1.5 1.5 1"
          position="0 2.8 -15.18"
          rotation="0 0 0"
          gltf-model="/assets/gothic_window/scene.gltf"
        ></a-entity>

        {/* chandelier */}
        <a-entity
          id="chandelier"
          scale=".04 .04 .04"
          position="0 5 -7.75"
          rotation="0 0 0"
          gltf-model="/assets/chandelier/scene.gltf"
        ></a-entity>

        {/* omni_light */}
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
        {/* pagination_sphere */}
        <>
          s
          <a-sphere
            id="sphere"
            onClick={() => {
              emerge();
            }}
            radius="0.2"
            position="0 1.5 -8"
            rotation="0 0 0"
            src="url(/assets/textures/Bumpy-Red-Plastic-Texture.png)"
            // mixin="up_and_down"
          ></a-sphere>
          <a-cone
            id="left_cone"
            onClick={() => {
              toPreviousBatch();
            }}
            src="url(/assets/textures/Bumpy-Red-Plastic-Texture.png)"
            height="0.2"
            radius-bottom="0.1"
            radius-top="0.001"
            rotation="0 0 90"
            position="0 1.5 -8"
            // position="-0.8 1.5 -8"
          ></a-cone>
          <a-cone
            id="right_cone"
            onClick={() => {
              toNextBatch();
            }}
            src="url(/assets/textures/Bumpy-Red-Plastic-Texture.png)"
            height="0.2"
            radius-bottom="0.1"
            radius-top="0.001"
            rotation="0 0 -90"
            position="0 1.5 -8"
          ></a-cone>
        </>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </>
  );
}
