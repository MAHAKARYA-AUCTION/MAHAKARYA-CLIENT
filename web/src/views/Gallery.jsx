import "aframe";
import { useNavigate } from "react-router-dom";

export default function DiamondGallery() {
  const navigate = useNavigate();
  const floorTransporter = () => {
    navigate("../lobby", { replace: true });
  };
  // const dummyGallery = ["Onyx", "Diamond", "Garnet"];

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
          <img id="number_box" src="assets/marble/black_23.jpg" />
          <a-asset-item id="scene" src="assets/scene.gltf" />
          <a-asset-item id="door" src="assets/door/scene.gltf" />
          <a-asset-item id="door" src="assets/carpets" />
        </a-assets>

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

        {/* __________________________________bottom-left horizontal wall */}
        <a-box
          id="bottom-left horizontal wall "
          position="-6 3.5 1.25"
          rotation="0 0 0"
          depth="0.5"
          height="7"
          width="6"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________bottom-left horizontal number */}
        <a-text
          position="-6 3.5 0.95"
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
        {/* __________________________________bottom-left horizontal painting */}
        <a-box
          id="bottom-left horizontal painting "
          position="-6 2 1.05"
          rotation="0 0 0"
          depth="0.2"
          // ------------------------------------ //
          src="url(\assets\paintings\p2.jpg)"
          height="2.08"
          width="4.1"
        ></a-box>

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
        <a-box
          id="bottom_right_horizontal_painting "
          position="6 2 1.05"
          rotation="0 0 0"
          depth="0.2"
          // ------------------------------------ //
          src="url(\assets\paintings\p2.jpg)"
          height="2.08"
          width="4.1"
        ></a-box>

        {/* __________________________________left-0 vertical wall */}
        <a-box
          id="left-0 vertical wall "
          position="-8.75 3.5 -2"
          rotation="0 90 0"
          depth="0.5"
          height="7"
          width="6"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________ left_0_number_box */}
        <a-text
          id="left_0_number_box"
          position="-8.5 3.5 -2"
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
        {/* __________________________________left-0 vertical painting */}
        <a-box
          id="left_0_vertical_painting "
          position="-8.55 2 -2"
          rotation="0 90 0"
          depth="0.2"
          // ------------------------------------ //
          src="url(\assets\paintings\p2.jpg)"
          height="2.08"
          width="4.1"
        ></a-box>

        {/* __________________________________left-1 vertical wall */}
        <a-box
          id="left-1 vertical wall "
          position="-8.75 3.5 -8"
          rotation="0 90 0"
          depth="0.5"
          height="7"
          width="6"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________ left_1_number_box */}
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
        {/* __________________________________left_1_vertical_painting */}
        <a-box
          id="left_1_vertical_painting"
          position="-8.55 2 -8"
          rotation="0 90 0"
          depth="0.2"
          // ------------------------------------ //
          src="url(\assets\paintings\p2.jpg)"
          height="2.08"
          width="4.1"
        ></a-box>

        {/* __________________________________left-2 vertical wall */}
        <a-box
          id="left-2 vertical wall"
          position="-8.75 3.5 -14"
          rotation="0 90 0"
          depth="0.5"
          height="7"
          width="6"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________ left_2_number_box */}
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
        {/* __________________________________ left_2_vertical_painting */}
        <a-box
          id="left_2_vertical_painting"
          position="-8.55 2 -14"
          rotation="0 90 0"
          depth="0.2"
          // ------------------------------------ //
          src="url(\assets\paintings\p2.jpg)"
          height="2.08"
          width="4.1"
        ></a-box>

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
        <a-box
          id="seventh_painting "
          position="8.55 2 -14"
          rotation="0 90 0"
          depth="0.2"
          // ------------------------------------ //
          src="url(\assets\paintings\p2.jpg)"
          height="2.08"
          width="4.1"
        ></a-box>

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
        <a-box
          id="right_0_vertical_painting "
          position="8.55 2 -2"
          rotation="0 90 0"
          depth="0.2"
          // ------------------------------------ //
          src="url(\assets\paintings\p2.jpg)"
          height="2.08"
          width="4.1"
        ></a-box>

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
        <a-box
          id="right_1_vertical_painting "
          position="8.55 2 -8"
          rotation="0 90 0"
          depth="0.2"
          // ------------------------------------ //
          src="url(\assets\paintings\p2.jpg)"
          height="2.08"
          width="4.1"
        ></a-box>

        {/* __________________________________top-0 horizontal wall */}
        <a-box
          id="top-0 horizontal wall "
          position="-6 3.5 -17"
          rotation="0 0 0"
          depth="0.5"
          height="7"
          width="6"
          src="url(/assets/marble/black_2.jpg)"
        ></a-box>
        {/* __________________________________ top_0_number_box */}
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
        {/* __________________________________top-0 horizontal painting */}
        <a-box
          id="top_0_horizontal_painting "
          position="-6 2 -16.8"
          rotation="0 0 0"
          depth="0.2"
          // ------------------------------------ //
          src="url(\assets\paintings\p2.jpg)"
          height="2.08"
          width="4.1"
        ></a-box>

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
        {/* __________________________________ top_1_number_box */}
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

        <a-sphere position="0 2 0" color="yellow" radius="0.3"></a-sphere>

        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </>
  );
}
