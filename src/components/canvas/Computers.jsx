import { useState , useEffect , Suspense } from "react";
import {Canvas} from '@react-three/fiber';
 import {OrbitControls , useGLTF , Preload} from '@react-three/drei';
 import CanvasLoader from '../Loader';
 import { extend } from '@react-three/fiber';


const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={.15} groundColor='black' />
      <pointLight intensity={1}/>
      <spotLight 
        position={-20,50,10} 
        angle={0.12} 
        penumbra={1} 
        intensity={1} 
        castShadow
        shadow-mapSize={1024}
       />
      <primitive 
        object={computer.scene}
        scale={ isMobile? 0.5 : .70}
        position={isMobile ? [0,-3,-2.2]:[0 , -3.25 , -1.5]}
        rotation={[-0.03 , -0.5 , -0.1]}
      />
    </mesh>
  )
}
const ComputerCanvas = ()=>{
  const [isMobile ,setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width : 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change' , handleMediaQueryChange );
  })
  return(
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20,3,5] , fov:25}}
      gl= {{preserveDrawingBuffer:true}}
    >

    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI}
      minPolarAngle={Math.PI/2}
    />
    <Computers isMobile={isMobile}/>
    </Suspense>
    <Preload all/>

      
    </Canvas>
  )
}

export default ComputerCanvas