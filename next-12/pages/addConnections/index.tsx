import type { ItemType, SongType } from "../../lib/types";
import { useRouter } from "next/router";

export default function Songs() {
    const router = useRouter();
    // console.log(router.query);
    
    const stringData = router.query.data as string;
    const data = JSON.parse(stringData) as SongType[];    
    
  return (
    <ul>
      {data.map((song: SongType, index: number) => {
        return (
          <li key={index}>
            <p>{song.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
