// import Experience from "./Experience";
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
    <>
      {/* @ts-ignore */}
      {/* <Experience playlist={playlist} /> */}
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {data.map((song: Song) => (
          <Song key={song.id} song={song} />
        ))}
      </Canvas>
    </>
  );
}
