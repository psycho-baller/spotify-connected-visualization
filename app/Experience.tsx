
import Link from "next/link";
import { Text } from "@react-three/drei";
interface Item {
    track: {
        id: string;
        name: string;
    };
}

export default function Experience(playlist: any) {
    
    return (
      <>
        {playlist.items.map((item: any) => (
        //   <Link href={`https://open.spotify.com/track/${item.track.id}`}>
            <mesh key={item.track.id}></mesh>
        //   </Link>
        ))}
      </>
    );
}
