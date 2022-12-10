

import Experience from "./Experience";
import { getPlaylist } from "../lib/spotify";
import Canvas from "./canvas";
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
      <Experience data={data} />
      {/* <OrbitControls/> */}
    
    </Canvas>
  );
}
