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
    // state.camera.rotation.x = scroll.offset * 50;
    // state.camera.rotation.z = scroll.offset * 50;
    state.camera.rotation.y = scroll.offset * 50;
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* <pointLight position={[10, 10, 10]} /> */}
      {data.map((song: SongType, index: number) => {
        // randomize position
        rand1 = Math.random();
        rand2 = -index * 8;
        // console.log(rand2, height);

        // rand3 = Math.random();

        const pos = [rand1 * 10 - 5, rand2, 0];
        return <Song key={song.id} song={song} pos={pos} />;
      })}
    </>
  );
}
