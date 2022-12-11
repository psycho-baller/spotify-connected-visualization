import { OrbitControls, PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { ItemType, SongType } from "../lib/types";
import { getPlaylist } from "../lib/spotify";
import { useRef } from "react";
import Experience from "../components/experience";

export default function Home( { data}: { data: SongType[] }) {

  return (
    <Canvas id="canvas">
        <Experience data={data}  />
    </Canvas>
  );
}

export async function getStaticProps() {
  const playlist = (await getPlaylist()) as { items: ItemType[] };
  const playlistTracks = playlist.items as ItemType[];

  const tracks = playlistTracks.map((item: any) => item.track.id);
  const names = playlistTracks.map((item: any) => item.track.name);
  const images = playlistTracks.map((item: any) => {
    if (item.track.album.images.length > 0) {
      return {
        url: item.track.album.images[0],
        height: item.track.album.images[0].height,
        width: item.track.album.images[0].width,
      };
    }
    return { url: "", height: 0, width: 0 };
  });
  const data = [] as SongType[];
  tracks.forEach((track: any, index: any) => {
    data.push({ id: track, name: names[index], image: images[index] });
  });

  return {
    props: {
      data,
    },
  };
}

