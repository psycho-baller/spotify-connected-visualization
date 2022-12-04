import Link from "next/link";
import { getPlaylist } from "../lib/spotify";

export default async function Home(){
    const playlist = await getPlaylist();
    
    return (
        <main>
            <h1>My Playlist</h1>
            <ol>
                {playlist.items.map((item: any) => (
                    <li key={item.track.id}>
                        <Link href={`https://open.spotify.com/track/${item.track.id}`}>
                            {item.track.name}
                        </Link>
                    </li>
                ))}
                {/* {playlist.tracks.items.map((item: { track: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }; }) => (
                    <li key={item.track.id}>
                        {item.track.name}
                    </li>
                ))} */}
            </ol>
        </main>
    )
}
