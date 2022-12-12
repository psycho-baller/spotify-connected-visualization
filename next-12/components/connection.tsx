import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Connections({
  connection,
  pos,
  len,
  index,
}: {
  connection: string;
  pos: number[];
  len: number;
  index: number;
}) {
  let connectionPos: number[] = [...pos];
  const connectionRef = useRef(null) as React.MutableRefObject<any>;
  let rotateX = 0;
  let rotateY = 0;
  const scroll = useScroll();

  useFrame((state) => {
    // rotate the connection about the z axis when we scroll
    rotateX = - scroll.offset * 100;
    rotateY = - scroll.offset * 100;
    connectionPos = [
      //                fraction of the circle    * radius of the circle
      (connectionRef.current.position.x =
        pos[0] + Math.cos((index / len) * 2 * Math.PI + rotateX) * 3),
      (connectionRef.current.position.y =
        pos[1] + Math.sin((index / len) * 2 * Math.PI + rotateY) * 3),
      0,
    ];
  });

  return (
    <mesh
      ref={connectionRef}
      // onPointerOver={(e) => setHover(true)}
      // onPointerOut={(e) => setHover(false)}
      // onPointerDown={(e) => setActive(!active)}
      onPointerUp={(e) => {
        // link to song
        const url = `https://www.instagram.com/${connection}`;
        window.open(url, "_blank");
      }}
      // style={{top: page * 100 + "vh"}}
      // scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      position={connectionPos}
      //castShadow
      //receiveShadow
    >
      <sphereGeometry args={[0.5, 16, 16]} />
      {/* <meshStandardMaterial map={texture} /> */}
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}
