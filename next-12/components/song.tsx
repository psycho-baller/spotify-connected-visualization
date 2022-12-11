
import { useState , useRef} from "react";
import type { SongType } from "../lib/types";
import { Scroll, useTexture } from "@react-three/drei";

export default function Song({ song, pos }: { song: SongType, pos: number[] }) {
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const [position, setPosition] = useState([0, 0, 0]);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [scale, setScale] = useState([1, 1, 1]);
    const [color, setColor] = useState("hotpink");
    const [opacity, setOpacity] = useState(1);
    const [visible, setVisible] = useState(true);
    const [castShadow, setCastShadow] = useState(true);
    const [receiveShadow, setReceiveShadow] = useState(true);
    const [material, setMaterial] = useState("meshStandardMaterial");
    const [geometry, setGeometry] = useState("boxGeometry");
    const [args, setArgs] = useState([1, 1, 1]);
    const ref = useRef();

    // const texture = song.image?.url ? useTexture(song.image?.url) : useTexture("https://i.imgur.com/1Q2wG4B.png");
    return (
      <mesh
        ref={ref}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        onPointerDown={(e) => setActive(!active)}
        onPointerUp={(e) => {
          // link to song
          const url = `https://open.spotify.com/track/${song.id}`;
          window.open(url, "_blank");
        }}
        // style={{top: page * 100 + "vh"}}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        position={pos}
        //castShadow
        //receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        {/* <meshStandardMaterial map={texture} /> */}
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        <mesh />
      </mesh>
    );
}


