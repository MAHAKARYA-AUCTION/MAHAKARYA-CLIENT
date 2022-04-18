import "aframe";
import "aframe-extras";
import "aframe-fps-look-controls-component";
import anime from "animejs/lib/anime.es.js";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function DavidGallery() {
  const location = useLocation();
  const navigate = useNavigate();
  // const BASE_URL = "http://localhost:3000/lots";
  const BASE_URL = "https://api.mahakarya-auction.com/";

  const [wholeData, setWholeData] = useState(null);
  const [data, setData] = useState(null);
  const [sliceIndex, setSliceIndex] = useState([0, 5]);

  const [test, setTest] = useState(null);

  useEffect(() => {
    fetch(BASE_URL + "collections").then((response) =>
      response.json().then((x) => {
        x = x.filter((e) => e.galleryName == location.pathname.slice(1));
        setWholeData(x[0].Lots);
        setData(x[0].Lots.slice(sliceIndex[0], sliceIndex[1]));
      })
    );
  }, []);

  console.log(data);

  const floorTransporter = () => {
    navigate("../lobby", { replace: true });
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
      position: ["-2.75 1.5 -5.25", "-2.75 1.5 -4.75"],
    });
    anime({
      targets: "#right_cone",
      position: ["-2.75 1.5 -5.25", "-2.75 1.5 -5.75"],
    });
  }

  const toNextBatch = () => {
    if (wholeData[sliceIndex[0] + 5]) {
      setSliceIndex([sliceIndex[0] + 5, sliceIndex[1] + 5]);
    } else {
      setSliceIndex([0, 5]);
    }
    setData(wholeData.slice(sliceIndex[0], sliceIndex[1]));
  };
  const toPreviousBatch = () => {
    if (sliceIndex[0] - 5 > 0) {
      setSliceIndex([sliceIndex[0] - 5, sliceIndex[1] - 5]);
    } else {
      setSliceIndex([0, 5]);
    }
    setData(wholeData.slice(sliceIndex[0], sliceIndex[1]));
  };

  return (
    <>
      <a-scene>
        <a-entity environment="preset: forest; dressingAmount: 500"></a-entity>
        <a-entity
          id="tete"
          environment="preset: forest; groundColor: #f0f0f0; groundTexture: none; horizonColor: silver; skyColor: skyblue; dressingColor: #fcfcfc; shadow: true"
        ></a-entity>
        <a-entity enviropack="preset: tankfarm"></a-entity>a
        <a-camera
          position="0 2 7"
          wasd-controls-enabled="true"
          wasd-controls="acceleration:25"
          look-controls="
          pointerLockEnabled: true;
          "
          fov="60"
          near="0.1"
          far="100"
        >
          <a-cursor></a-cursor>
        </a-camera>
        {/* __________________________________ intersection pillars */}
        <>
          {/* __________________________________ intx_bot_pillar */}
          <a-box
            id="left_wall"
            position="-7 2.5 1.25"
            rotation="0 0 0"
            depth="1.5"
            height="5"
            width="1.5"
            color="#cdbba6"
            src={"url(/assets/wall/white_stucco_paint.jpg)"}
          ></a-box>
          {/* __________________________________ intx_bot pillar */}
          <a-box
            id="left_wall"
            position="-7 2.5 -11.25"
            rotation="0 0 0"
            depth="1.5"
            height="5"
            width="1.5"
            color="#cdbba6"
            src={"url(/assets/wall/white_stucco_paint.jpg)"}
          ></a-box>
        </>
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
              color="bisque"
              src={"url(/assets/wall/white_stucco_paint.jpg)"}
            ></a-box>
            {/* __________________________________ left_elevator_wall */}
            <a-box
              position="-2.75 2.5 4.5"
              rotation="0 90 0"
              depth="0.5"
              height="5"
              width="7"
              color="bisque"
              src={"url(/assets/wall/white_stucco_paint.jpg)"}
            ></a-box>
            {/* __________________________________ right_elevator_wall */}
            <a-box
              position="2.75 2.5 -1.75"
              rotation="0 90 0"
              depth="0.5"
              height="5"
              width="19.5"
              repeat="2 2"
              color="bisque"
              src={"url(/assets/wall/white_stucco_paint.jpg)"}
            ></a-box>
          </>
        </>
        {/* __________________________________ paintings */}
        <>
          {data && (
            <>
              {/* first */}
              <>
                {/* __________________________________ first_wall */}
                <a-box
                  id="first_wall"
                  position="-5 2.5 1.25"
                  rotation="0 0 0"
                  depth="0.5"
                  height="5"
                  width="4"
                  color="bisque"
                  src={"url(/assets/wall/white_stucco_paint.jpg)"}
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
                  position="-5 4.25 -1"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ first_number_box */}
                {data[0] && (
                  <a-text
                    id="first_number_box"
                    position="-4.5 4 0.95"
                    rotation="0 180 0"
                    width="15"
                    color="#57240f"
                    value={data[0].lotNumber}
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
                    position="-4.5 2 1"
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
                    position="-4.5 2 1.02"
                    rotation="0 0 0"
                    depth="0.2"
                    scale="1.1 1.1 1.1"
                    // ------------------------------------ //
                    color="LightSalmon"
                    height={data[0].height / 100}
                    width={data[0].width / 100}
                  ></a-box>
                )}
              </>
              {/* second */}
              <>
                {/* __________________________________ second_wall */}
                <a-box
                  id="second_wall"
                  position="-7 2.5 -1.25"
                  rotation="0 90 0"
                  depth="0.5"
                  height="5"
                  width="4"
                  color="bisque"
                  src={"url(/assets/wall/white_stucco_paint.jpg)"}
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
                  position="-4.5 4.25 -1.25"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ second_number_box */}
                {data[1] && (
                  <a-text
                    id="second_number_box"
                    position="-6.75 4 -1.25"
                    rotation="0 90 0"
                    width="15"
                    color="#57240f"
                    value={data[1].lotNumber}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_2.jpg)"
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
                        imageHeight: data[1].height,
                      });
                    }}
                    position="-6.8 2 -1.25"
                    rotation="0 90 0"
                    depth="0.2"
                    // ------------------------------------ //
                    src={data[1].primaryImage}
                    height={data[1].height / 100}
                    width={data[1].width / 100}
                  ></a-box>
                )}
                {/* __________________________________ second_frame */}
                {data[1] && (
                  <a-box
                    id="second_frame "
                    position="-6.811 2 -1.25"
                    rotation="0 90 0"
                    depth="0.2"
                    scale="1.1 1.1 1.1"
                    // ------------------------------------ //
                    color="LightSalmon"
                    height={data[1].height / 100}
                    width={data[1].width / 100}
                  ></a-box>
                )}
              </>
              {/* third */}
              <>
                {/* __________________________________ third_wall */}
                <a-box
                  id="third_wall"
                  position="-7 2.5 -5.25"
                  rotation="0 90 0"
                  depth="0.5"
                  height="5"
                  width="4"
                  color="bisque"
                  src={"url(/assets/wall/white_stucco_paint.jpg)"}
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
                  position="-4.5 4.25 -5.25"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ third_number_box */}
                {data[2] && (
                  <a-text
                    id="third_number_box"
                    position="-6.75 4 -5.25"
                    rotation="0 90 0"
                    width="15"
                    color="#57240f"
                    value={data[2].lotNumber}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_2.jpg)"
                    src="#number_box"
                  ></a-text>
                )}
                {/* __________________________________ third_painting */}
                {data[2] && (
                  <a-box
                    id="third_painting "
                    onClick={() => {
                      Swal.fire({
                        title: data[2].name,
                        text: `Created by: ${data[2].artistName}`,
                        imageUrl: data[2].primaryImage,
                        imageWidth: data[2].width,
                        imageHeight: data[2].height,
                      });
                    }}
                    position="-6.8 2 -5.25"
                    rotation="0 90 0"
                    depth="0.2"
                    // ------------------------------------ //
                    src={data[2].primaryImage}
                    height={data[2].height / 100}
                    width={data[2].width / 100}
                  ></a-box>
                )}
                {/* __________________________________ third_frame */}
                {data[2] && (
                  <a-box
                    id="third_frame "
                    position="-6.811 2 -5.25"
                    rotation="0 90 0"
                    depth="0.2"
                    scale="1.1 1.1 1.1"
                    // ------------------------------------ //
                    color="brown"
                    height={data[2].height / 100}
                    width={data[2].width / 100}
                  ></a-box>
                )}
              </>
              {/* fourth */}
              <>
                {/* fourth_wall */}
                <a-box
                  id="fourth_wall"
                  position="-7 2.5 -9.25"
                  rotation="0 90 0"
                  depth="0.5"
                  height="5"
                  width="4"
                  color="bisque"
                  src={"url(/assets/wall/white_stucco_paint.jpg)"}
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
                  position="-4.5 4.25 -9.25"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ fourth_number_box */}
                {data[3] && (
                  <a-text
                    id="third_number_box"
                    position="-6.75 4 -9.25"
                    rotation="0 90 0"
                    width="15"
                    color="#57240f"
                    value={data[3].lotNumber}
                    geometry="primitive:plane, src='#number_box'"
                    side="double"
                    align="center"
                    fontImage="url(/assets/marble/black_2.jpg)"
                    src="#number_box"
                  ></a-text>
                )}
                {/* __________________________________ fourth_painting */}
                {data[3] && (
                  <a-box
                    id="fourth_painting "
                    onClick={() => {
                      Swal.fire({
                        title: data[3].name,
                        text: `Created by: ${data[3].artistName}`,
                        imageUrl: data[3].primaryImage,
                        imageWidth: data[3].width,
                        imageHeight: data[3].height,
                      });
                    }}
                    position="-6.8 2 -9.25"
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
                    id="fourth_frame "
                    position="-6.811 2 -9.25"
                    rotation="0 90 0"
                    depth="0.2"
                    scale="1.05 1.05 1.05"
                    // ------------------------------------ //
                    color="brown"
                    height={data[3].height / 100}
                    width={data[3].width / 100}
                  ></a-box>
                )}
              </>
              {/* fifth */}
              <>
                {/* __________________________________ fifth_wall */}
                <a-box
                  id="left_top_wall"
                  position="-5 2.5 -11.25"
                  rotation="0 0 0"
                  depth="0.5"
                  height="5"
                  width="4"
                  color="bisque"
                  src={"url(/assets/wall/white_stucco_paint.jpg)"}
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
                  position="-4.5 4.25 -9.5"
                  penumbra="0.4"
                ></a-light>
                {/* __________________________________ fifth_number_box */}
                {data[4] && (
                  <a-text
                    id="fifth_number_box"
                    position="-4.5 4 -11"
                    rotation="0 0 0"
                    width="15"
                    color="#57240f"
                    value={data[4].lotNumber}
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
                        imageHeight: data[4].height,
                      });
                    }}
                    position="-4.5 2 -11"
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
                    position="-4.5 2 -11.015"
                    rotation="0 0 0"
                    depth="0.2"
                    scale="1.1 1.1 1.1"
                    // ------------------------------------ //
                    color="tomato"
                    height={data[4].height / 100}
                    width={data[4].width / 100}
                  ></a-box>
                )}
              </>
            </>
          )}
        </>
        {/* left_statue_wall */}
        <a-box
          id="left_statue_wall"
          position="-3 2.5 -13"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="4"
          color="bisque"
          src={"url(/assets/wall/white_stucco_paint.jpg)"}
        ></a-box>
        {/* back_statue_wall */}
        <a-box
          id="back_statue_wall"
          position="-1.25 2.5 -14.75"
          rotation="0 0 0"
          depth="0.5"
          height="5"
          width="4"
          color="bisque"
          src={"url(/assets/wall/white_stucco_paint.jpg)"}
        ></a-box>
        {/* right_statue_wall */}
        <a-box
          id="right_statue_wall"
          position="0.5 2.5 -13"
          rotation="0 90 0"
          depth="0.5"
          height="5"
          width="4"
          color="bisque"
          src={"url(/assets/wall/white_stucco_paint.jpg)"}
        ></a-box>
        {/* left_mini_wall */}
        <a-box
          id="left_mini_wall"
          position="1.75 2.5 -11.25"
          rotation="0 0 0"
          depth="0.5"
          height="5"
          width="2"
          color="bisque"
          src={"url(/assets/wall/white_stucco_paint.jpg)"}
        ></a-box>
        {/* __________________________________ floor */}
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="25"
          height="30"
          color="white"
          src="url(/assets/carpets/Seamless_Orange_Carpet.jpg)"
          repeat="20 20"
        ></a-plane>
        {/* __________________________________ roof */}
        <a-box
          id="roof"
          position="0 5 -4"
          rotation="-90 0 0"
          width="60"
          height="60"
          src="url(/assets/marble/black_2.jpg)"
          color="gray"
          repeat="4 4"
        ></a-box>
        {/* omni light */}
        <a-light
          id="omni_light"
          position="0 2 0"
          angle="360"
          type="ambient"
          color="white"
          intensity="0.9"
        ></a-light>
        {/* pagination_sphere */}
        <>
          <a-sphere
            id="pagination_sphere"
            onClick={() => {
              emerge();
            }}
            radius="0.2"
            position="-2.75 1.5 -5.25"
            rotation="0 0 0"
            color="#ebd7bb"
            animation="property: object3D.position.y; to: 1.55; dir: alternate; dur: 2000; loop: true"
            src="url(/assets/sphere/Kraft_Dirty_Paper_Texture.jpg)"
            // mixin="up_and_down"
          ></a-sphere>
          <a-cone
            id="left_cone"
            onClick={() => {
              toPreviousBatch();
            }}
            color="#675237"
            height="0.2"
            radius-bottom="0.1"
            radius-top="0.001"
            position="-2.75 1.5 -5.25"
            rotation="90 0 0"
            // position="-0.8 1.5 -8"
          ></a-cone>
          <a-cone
            id="right_cone"
            onClick={() => {
              toNextBatch();
            }}
            color="#675237"
            height="0.2"
            radius-bottom="0.1"
            radius-top="0.001"
            rotation="-90 0 0"
            position="-2.75 1.5 -5.25"
          ></a-cone>
        </>
        {/* sofa */}
        <a-entity
          id="sofa"
          scale="1.4 1.4 1.4"
          position="1.98 0 -4.6"
          rotation="0 -90 0"
          gltf-model="/assets/beige_sofa/Sofa_01_4k.gltf"
          // gltf-model="/assets/david_with_goliath_s_head/scene.gltf"
        ></a-entity>
        {/* statue */}
        <a-entity
          id="statue"
          scale="1 1 1"
          position="0.15 1.5 -4.6"
          rotation="0 -90 0"
          gltf-model="/assets/david/scene.gltf"
        ></a-entity>
        {/* chandelier */}
        <a-entity
          id="chandelier"
          scale="1.4 1.4 1.4"
          position="0.5 4.75 -3.5"
          rotation="0 -90 0"
          gltf-model="/assets/Chandelier_01_4k/Chandelier_01_4k.gltf"
        ></a-entity>
      </a-scene>
    </>
  );
}
