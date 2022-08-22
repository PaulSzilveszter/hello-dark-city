import React from 'react'
import { Sparkles } from '@react-three/drei'



const Particle = () => {  
    return (
        <Sparkles
        position={[0, -0.2, 1.5]}
        speed={0.05}
        size={0.5} 
        scale={[3,0.3,1]} 
        color="white" 
        count={200} />
    )
}

export default Particle