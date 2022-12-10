// import Experience from "./Experience";

//import { OrbitControls } from "@react-three/drei";
import { getPlaylist } from "../lib/spotify";
import Canvas from "./canvas";
import Song from "./song";
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

export default async function Home() {
  const playlist = (await getPlaylist()) as { items: Item[] };
  
  const tracks = playlist.items.map((item: any) => item.track.id);
  const names = playlist.items.map((item: any) => item.track.name);
  const data = [] as Song[];
  tracks.forEach((track: any, index: any) => {
    data.push({ id: track, name: names[index] });
  });

  return (
    <Canvas>
      {/* @ts-ignore */}
      {/* <Experience playlist={playlist} /> */}
      {/* <OrbitControls/> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]}  />
      {data.map((song: Song) => {
        // randomize position
        const pos = [
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
        ];
        return <Song key={song.id} song={song} pos={pos} />;
      })}
    </Canvas>
  );
}
