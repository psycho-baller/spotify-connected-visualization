

// import Experience from "./Experience";

import { OrbitControls } from "@react-three/drei";
import { getPlaylist } from "../lib/spotify";
import Song from "../components/song";
import { useEffect, useState } from "react";
import Canvas from "../components/canvas";
import type { ItemType, SongType } from "../lib/types";
export default function Home({ playlistTracks }: { playlistTracks: ItemType[] }) {
  console.log(playlistTracks);
  
  const tracks = playlistTracks.map((item: any) => item.track.id);
  const names = playlistTracks.map((item: any) => item.track.name);
  const images = playlistTracks.map((item: any) => {
    if (item.track.album.images.length > 0) {
      return {url: item.track.album.images[0], height: item.track.album.images[0].height, width: item.track.album.images[0].width};
    }
      return { url: "", height: 0, width: 0 };
  }
  );
  const data = [] as SongType[];
  tracks.forEach((track: any, index: any) => {
    data.push({ id: track, name: names[index], image: images[index] });
  });
  let rand1: number;
  let rand2: number;
  let rand3: number;
  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />

      </mesh>
      <pointLight position={[10, 10, 10]}  />
      {data.map((song: SongType) => {
        // randomize position
          rand1 = Math.random();
          rand2 = Math.random();
          rand3 = Math.random();
        
        const pos = [
          rand1 * 10 - 5,
          rand2 * 10 - 5,
          rand3 * 10 - 5,
        ];
        return <Song key={song.id} song={song} pos={pos} />;
      })}
    </Canvas>
  );
}

export async function getStaticProps() {
  const playlist = (await getPlaylist()) as { items: ItemType[] };
  const playlistTracks = playlist.items as ItemType[];
  

  return {
    props: {
      playlistTracks,
    },
  };
}
