import Song from "./song";
import type { SongType } from "../lib/types";

export default function Songs({ data }: { data: SongType[] }) {

  return (
    <> 
      {/* <pointLight position={[10, 10, 10]} /> */}
      {data.map((song: SongType, index: number) => {
        return <Song  key={song.id} song={song} index={index} />;
      })}
    </>
  );
}
