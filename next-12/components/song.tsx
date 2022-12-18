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
  const ref = useRef();
    
  let textRange = 0.05;
  let boxSize = 2;
  let fontSize = 0.6;
  let textYOffset = 1.6

  // @ts-ignore
  const posText = [pos[0], pos[1] + textYOffset, pos[2]];

  const textRef = useRef();
  let numOfConnections: number = 0;

  useFrame((state) => {
    // get the orientation of the device
    console.log(state.viewport.width);
    
    if(hovered){
      // @ts-ignore
      ref.current.rotation.y += 0.01;
    }
  });

  


  const textureUrl = song.image?.url ? (song.image?.url) : ("https://i.imgur.com/1Q2wG4B.png");
  const texture = useTexture(textureUrl);
  return (
    <group
    // renderOrder={2}
    >
      <mesh
        ref={ref}
        onPointerOver={(e) =>{
          setHover(true)
          // rotate about the y axis
        } }
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
        <boxGeometry args={[boxSize, boxSize, boxSize]} />
        {/* <meshStandardMaterial map={texture} /> */}
        <meshStandardMaterial map={texture} />
      </mesh>
      {/* @ts-ignore */}
      <Float
        rotationIntensity={1}
        floatIntensity={4}
        position={posText}
        floatingRange={[-textRange, textRange]}
      >
        {/* @ts-ignore */}
        <Text
          font={"bangers-v20-latin-regular.woff"}
          fontSize={fontSize}
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
