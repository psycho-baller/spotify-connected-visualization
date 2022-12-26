import { ScrollControls, Scroll, Sparkles, Html } from "@react-three/drei";
import { useFrame, useThree  } from "@react-three/fiber";
import Songs from "../components/songs";
import { SongType } from "../lib/types";
import Particles from "./particles";

export default function Experience({ data }: { data: SongType[] }) { 

  const { viewport }  = useThree();
  const { width } = viewport;
  console.log(width);
  

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
        {/* <Scroll html>
          <p
            style={{
              minHeight: 200,
              padding: "12px",
              border: "1px solid red",
              margin: "100px 40px",
            }}
          >
            <MatchText id="match-2">
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </MatchText>
          </p>
        </Scroll> */}
      </ScrollControls>
    </>
  );
}
