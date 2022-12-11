import { ScrollControls, Scroll, PerspectiveCamera, useScroll, Sparkles } from "@react-three/drei";
import { useFrame  } from "@react-three/fiber";
import { useRef } from "react";
import Songs from "../components/songs";
import { SongType } from "../lib/types";

export default function Experience({ data }: { data: SongType[] }) {
  const cameraRef = useRef(null) as React.MutableRefObject<any>;

  useFrame((state) => {
    // console.log(state);
    // window.addEventListener("scroll", () => {
    //     console.log("scrolling");
    // });
    // const offset = 1- ;
    // console.log(scroll.offset);
    
    //   cameraRef.current.rotation.y += 0.01;

  });

    const colorArray = [
      "#FF0000",
      "#FF7F00",
      "#FFFF00",
      "#00FF00",
      "#0000FF",
      "#4B0082",
      "#8B00FF",
    ];

    const count = 500;
    // float 32 array for the random colors
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      // positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }
  return (
    <>
    {/* @ts-ignore */}
      <Sparkles
        /** Number of particles (default: 100) */
        count={count}
        /** Speed of particles (default: 1) */
        speed={0.2}
        /** Opacity of particles (default: 1) */
        // opacity?: number | Float32Array
        /** Color of particles (default: 100) */
        // random color
        color={colors}
        /** Size of particles (default: randomized between 0 and 1) */
        size={2}
        /** The space the particles occupy (default: 1) */
        scale={5.5}
        /** Movement factor (default: 1) */
        // noise?: number | [number, number, number] | THREE.Vector3 | Float32Array
        // position={[0, 0, 0]}
      />
      <ambientLight />
      {/* @ts-ignore */}
      {/* <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} /> */}
      <ScrollControls
        pages={49}
        // damping={}
      >
        <Scroll>
          <Songs data={data} />
        </Scroll>
      </ScrollControls>
    </>
  );
}
