// import Experience from "./Experience";
import { useScroll } from "@react-three/drei";

import Song from "./song";
import type { SongType } from "../lib/types";
// import { useWindowDimensions } from "../lib/hooks";
import { useFrame } from "@react-three/fiber";

export default function Songs({ data }: { data: SongType[] }) {

  return (
    <>

      {/* <pointLight position={[10, 10, 10]} /> */}
      {data.map((song: SongType, index: number) => {
        return <Song key={song.id} song={song} index={index} />;
      })}
    </>
  );
}
