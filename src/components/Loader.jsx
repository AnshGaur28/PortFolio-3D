import {Html , useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress();
  return (

    <Html>
      <span className='canvas-Load'></span>
      <p style={{
        fontSize:30,
        color : "#f1f1f1",
        fontWeight : 800,
        marginTop : 70,
      }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader