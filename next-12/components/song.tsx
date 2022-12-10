
import { useState , useRef} from "react";

interface Song {
  id: string;
  name: string;
  connections?: string[];
}

export default function Song({ song, pos }: { song: Song, pos: number[] }) {
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
    return (
        <mesh
            ref={ref}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
            onPointerDown={(e) => setActive(!active)}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            position={pos}
            //castShadow
            //receiveShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
    );
}


