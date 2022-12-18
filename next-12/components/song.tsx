import { useState, useRef } from "react";
import type { SongType } from "../lib/types";
import { Text, Float, useTexture, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Connection from "./connection";
import { textChangeRangeIsUnchanged } from "typescript";
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
  const ref = useRef() as React.MutableRefObject<any>;
  const floatRef = useRef();
  const textPosRef = useRef();
  const textRef = useRef();

  let MyWidth = 13.844849711505825;
  let textRange = 0.025;
  let boxSize = 2;
  let fontSize = 0.6;
  let textYOffset = 1.6;
  const initialVals = [textRange, boxSize, fontSize, textYOffset];
  let width: number;
  let height: number;

  // @ts-ignore
  const posText = [pos[0], pos[1] + textYOffset, pos[2]];

  let numOfConnections: number = 0;

  useFrame((state) => {
    // get the orientation of the device
    width = state.viewport.width;
    fontSize = (width / MyWidth) * initialVals[2];
    textRange = (width / MyWidth) * initialVals[0];
    boxSize = (width / MyWidth) * initialVals[1];
    textYOffset = (width / MyWidth) * initialVals[3];

    if (hovered) {
      // @ts-ignore
      ref.current.rotation.y += 0.01;
    }
    // @ts-ignore
    ref.current.size
    // @ts-ignore
    textRef.current.fontSize = fontSize;
    // floatRef.current.scale.set(fontSize, fontSize, fontSize);
    // @ts-ignore
    textPosRef.current.position.y = ref.current.position.y + textYOffset;
    // @ts-ignore
    floatRef.current.floatingRange = [-textRange, textRange];

    pos = [
      // @ts-ignore
      ref.current.position.x,
      // @ts-ignore
      ref.current.position.y,
      // @ts-ignore
      ref.current.position.z,
    ];
    
    

  });

  const textureUrl = song.image?.url
    ? song.image?.url
    : "https://i.imgur.com/1Q2wG4B.png";
  const texture = useTexture(textureUrl);
  return (
    <group
    // renderOrder={2}
    >
      <mesh
        ref={ref}
        onPointerOver={(e) => {
          setHover(true);
          // rotate about the y axis
        }}
        onPointerOut={(e) => setHover(false)}
        onPointerDown={(e) => setActive(!active)}
        onPointerUp={(e) => {
          // link to song
          const url = `https://open.spotify.com/track/${song.id}`;
          window.open(url, "_blank");
        }}
        // scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        position={pos}
        //castShadow
        //receiveShadow
      >
        <boxGeometry />
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
      ref={textPosRef} position={posText}>
        {/* @ts-ignore */}
        <Float
          ref={floatRef}
          rotationIntensity={1}
          floatIntensity={4}
          // position={posText}
          floatingRange={[-textRange, textRange]}
        >
          {/* @ts-ignore */}
          <Text
            font={"bangers-v20-latin-regular.woff"}
            fontSize={fontSize}
            ref={textRef}
            // position={posText}
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
              boxRef={ref}
              connection={connection}
              len={numOfConnections}
              index={index}
              key={index}
            />
          );
        })}
      </mesh>
    </group>
  );
}
