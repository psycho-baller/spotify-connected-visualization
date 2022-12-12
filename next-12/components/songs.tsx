// import Experience from "./Experience";
import { useScroll } from "@react-three/drei";

import Song from "./song";
import type { ItemType, SongType } from "../lib/types";
// import { useWindowDimensions } from "../lib/hooks";
import { useFrame } from "@react-three/fiber";

export default function Songs({ data }: { data: SongType[] }) {
  let rand1: number;
  let rand2: number;
  let rand3: number;

  const scroll = useScroll();
  
  useFrame((state) => {
    // rotate camera about the y axis when we scroll
    // state.camera.lookAt(0, 0, 0);
    // state.camera.position.x = Math.cos(scroll.offset * 50) * 10;
    // state.camera.position.z = Math.sin(scroll.offset * 50) * 10;
  });

  return (
    <>

      {/* <pointLight position={[10, 10, 10]} /> */}
      {data.map((song: SongType, index: number) => {
        // randomize position
        rand1 = Math.random() * 10 - 5;
        rand2 = -index * scroll.el.clientHeight / 100;

        // rand3 = Math.random();

        const pos = [0, rand2, 0];
        return <Song key={song.id} song={song} pos={pos} />;
      })}
    </>
  );
}
