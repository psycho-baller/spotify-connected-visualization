
import { Canvas } from "@react-three/fiber";

export default function Three({ children }: { children: React.ReactNode }) {
    return (
        <Canvas id="canvas">
            {children}
        </Canvas>
    )
}