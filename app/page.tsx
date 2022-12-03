import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { getPlaylist } from "../lib/spotify";

export default async function Home(){
    const playlist = await getPlaylist();
    
    return (
        <main>
            <h1>My Playlist</h1>
            <ul>
                {JSON.stringify(playlist.items[0].track)}
                {playlist.items.map((track: any) => (
                    <li key={track.id}>
                        
                    </li>
                ))}
                {/* {playlist.tracks.items.map((item: { track: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }; }) => (
                    <li key={item.track.id}>
                        {item.track.name}
                    </li>
                ))} */}
            </ul>
        </main>
    )
}
