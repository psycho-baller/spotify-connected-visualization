import { ScrollControls, Scroll } from "@react-three/drei";
import { useFrame, useThree  } from "@react-three/fiber";
import Songs from "../components/songs";
import { SongType } from "../lib/types";
import Particles from "./particles";


export default function Experience({ data }: { data: SongType[] }) { 

  const MyWidth = 13.844849711505825;
  const { viewport }  = useThree();
  const { width } = viewport;
  console.log(width);
  
  useFrame((state) => {
    // ref.current.position.y = state.viewport.height / 2;
  });
  return (
    <>
      <ambientLight />
      {/* <pointLight position={[10, 10, 10]} intensity={0.1} /> */}
      {/* @ts-ignore */}
      {/* <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} /> */}

      <ScrollControls
        // @ts-ignore
        // @ts-ignore
        pages={data.length * 0.15 * width}
        // damping={4}
        // distance={1}
        // infinite={false} // Can also scroll infinitely (default: false)
        enabled={true}
      >
        <Scroll >
          <Songs
            data={data}
            // scrollRef={scrollRef}
          />
          <Particles />
        </Scroll>
        <Scroll html>
            {data.map((song: SongType, index: number) => {
              const top = 50 + (index*(110.5 * (width / MyWidth)))
              return (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    top: `${top}vh`,
                  }}
                  className={`${song} ${song.connections.instagram.map((connection, index) => connection)}`}
                >
                  {song.name}
                  {song.connections.instagram.map((connection, index) => {
                    return (
                      <div key={index}>
                        {connection}
                      </div>
                    );
                  })
                  }
                </div>
              );
            })
            }
        </Scroll>
      </ScrollControls>
    </>
  );
}
