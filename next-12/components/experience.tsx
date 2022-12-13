import { ScrollControls, Scroll, Sparkles } from "@react-three/drei";
import { useFrame, useThree  } from "@react-three/fiber";
import Songs from "../components/songs";
import { SongType } from "../lib/types";
import { useRef } from "react";
import Particles from "./particles";

export default function Experience({ data }: { data: SongType[] }) { 


  return (
    <>
    
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* @ts-ignore */}
      {/* <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} /> */}
      <ScrollControls
        pages={data.length}
        // damping={}
      >
        <Scroll>
          <Songs data={data} />
          <Particles/>
        </Scroll>
      </ScrollControls>
    </>
  );
}
