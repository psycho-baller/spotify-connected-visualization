

// import Experience from "./Experience";

import { OrbitControls } from "@react-three/drei";
import { getPlaylist } from "../lib/spotify";
import Song from "../components/song";
import { useEffect, useState } from "react";
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

export default function Home({ playlistTracks }: { playlistTracks: Item[] }) {
  console.log(playlistTracks);
  
  const tracks = playlistTracks.map((item: any) => item.track.id);
  const names = playlistTracks.map((item: any) => item.track.name);
  const data = [] as Song[];
  tracks.forEach((track: any, index: any) => {
    data.push({ id: track, name: names[index] });
  });
  const [rand1, setRand1] = useState(0);
  const [rand2, setRand2] = useState(0);
  const [rand3, setRand3] = useState(0);
  useEffect(() => {
    setRand1(Math.random());
    setRand2(Math.random());
    setRand3(Math.random());
  }, [])
  return (
    <>
      {/* @ts-ignore */}
      {/* <Experience playlist={playlist} /> */}
      <OrbitControls/>
      <ambientLight />
      <pointLight position={[10, 10, 10]}  />
      {data.map((song: Song) => {
        // randomize position
        const pos = [
          rand1 * 10 - 5,
          rand2 * 10 - 5,
          rand3 * 10 - 5,
        ];
        return <Song key={song.id} song={song} pos={pos} />;
      })}
    </>
  );
}

export async function getStaticProps() {
  const playlist = (await getPlaylist()) as { items: Item[] };
  console.log(playlist);
  const playlistTracks = playlist.items as Item[];
  

  return {
    props: {
      playlistTracks,
    },
  };
}
