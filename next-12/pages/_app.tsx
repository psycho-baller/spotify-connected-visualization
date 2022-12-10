import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Canvas } from '@react-three/fiber'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} >
    <Canvas>
      
    </Canvas>
  </Component>
}
