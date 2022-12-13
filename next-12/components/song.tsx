import { useState, useRef } from "react";
import type { SongType } from "../lib/types";
import { Text, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Connection from "./connection";
export default function Song({ song, pos }: { song: SongType; pos: number[] }) {
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
  // @ts-ignore
  const posText = [pos[0], pos[1] + 1, pos[2]];

  const textRef = useRef();
  let numOfConnections: number = 0;

  useFrame((state) => {
    // keep the text looking at the camera
    // @ts-ignore
    // textRef.current.lookAt(state.camera.position);

  });


  // const texture = song.image?.url ? useTexture(song.image?.url) : useTexture("https://i.imgur.com/1Q2wG4B.png");
  return (
    <group
    // renderOrder={2}
    >
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
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        position={pos}
        //castShadow
        //receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        {/* <meshStandardMaterial map={texture} /> */}
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      {/* @ts-ignore */}
      <Float
        rotationIntensity={1}
        floatIntensity={4}
        position={posText}
        floatingRange={[-0.05, 0.05]}
      >
        {/* @ts-ignore */}
        <Text
          font={"bangers-v20-latin-regular.woff"}
          fontSize={0.4}
          ref={textRef}
        >
          <meshNormalMaterial />
          {song.name}
        </Text>
      </Float>
      {song.connections.instagram.map((connection, index) => {
        // show all around the song like a circle
        numOfConnections = song.connections.instagram.length;

        return (
          <Connection
            pos={pos}
            connection={connection}
            len={numOfConnections}
            index={index}
            key={index}
          />
        );
      })}
    </group>
  );
}
