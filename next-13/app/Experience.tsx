"use client";

// import { OrbitControls } from "@react-three/drei";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import { extend, useFrame } from "@react-three/fiber";
import Link from "next/link";
import { Text } from "@react-three/drei";
import Song from "./song";
// extend({ OrbitControls: OrbitControls });
interface Item {
  track: {
    id: string;
    name: string;
  };
}
interface Song {
  id: string;
  name: string;
  connections?: string[];
}

export default function Experience({data}: {data: Song[]}) {
    
    return (
      <>
        {/* @ts-ignore */}
        {/* <Experience playlist={playlist} /> */}
        {/* <OrbitControls/> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {data.map((song: Song) => {
          // randomize position
          const pos = [
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
          ];
          return <Song key={song.id} song={song} pos={pos} />;
        })}
      </>
    );
}
