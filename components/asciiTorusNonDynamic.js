// Threejs example: threejs.org/examples/?q=asc#webgl_effects_ascii

import { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useCursor, Text as FibreText } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'
import { Box, Button } from '@chakra-ui/layout'

import Link from 'next/link'
import Head from 'next/head'
import { color } from '@chakra-ui/styled-system'


export default function AsciiTorus() {
  return (
    <Box bgColor={'black'} minHeight={'100vh'}>
      {/* <button type="button" >   
        <strong>Codex</strong> 
      </button> */}

      <Link href="/tech/about-this" passHref>
        <a style={{ 
          fontFamily: 'Space Mono',
          padding: 10,
          color:'white'
        }
          
        }>Info</a>
      </Link>{" "}
      
    <Box>
      <Head>
        <title>Try Scrolling... | Afropocene StudioLab</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>

      </Head>
      
      <Canvas position="relative">
        <color attach="background" args={['black']} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Torusknot />
        <OrbitControls />
        <FibreText />
        <AsciiRenderer invert />
      </Canvas>
    </Box>
    </Box>


  )
}



function Torusknot(props) {
  const ref = useRef()
  const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))

  // var shapeMixer = Math.floor(Math.random(1) * 3)
  // console.log("SHAPE MIXER:"+ shapeMixer.toString())
  return (
    <mesh
      {...props}
      ref={ref}
      scale={0.02} //GOOD
      // scale={0.025}

      // scale={clicked ? 1.5 : 1.25}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
              {/* <torusKnotGeometry args={[3, 0.5, 128, 32]} /> */}

      {/* <torusKnotGeometry args={[3, 0.5, 256, 32, 3, 5]} /> */}
      <torusKnotGeometry args={[3, 0.45, 256, 32, 3, 4]} />

      {/* <torusKnotGeometry args={[shapeMixer, 0.25, 128, 32]} /> */}

      <meshStandardMaterial color="orange" />
    </mesh>
  )
}
//' .:-+*=%@#'
//' afropocene STUDIO LAB'
//' .:-+*= afropocene STUDIO LAB'
//' 01 &|~'
//' BEGIN END.:-+*='
//' ouroboros.:-+*='
//' LIFE DEATH.:-+*='

// var timedInput = ' BEGIN END*:-+*=' 


// function changeTimedInput() {
//   let op1 = ' .:-+*=%@#'
//   let op2 = ' afropocene STUDIO LAB'
// }

function AsciiRenderer({ renderIndex = 1, characters = ' 01 &|', ...options }) {
  // Reactive state
  const { size, gl, scene, camera } = useThree()

  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, options)
    effect.domElement.style.position = 'absolute'
    effect.domElement.style.top = '0px'
    effect.domElement.style.left = '0px'
    effect.domElement.style.color = 'white'
    effect.domElement.style.backgroundColor = 'black'
    effect.domElement.style.pointerEvents = 'none'
    return effect
  }, [characters, options.invert])

  // Append on mount, remove on unmount
  useEffect(() => {
    gl.domElement.parentNode.appendChild(effect.domElement)
    return () => gl.domElement.parentNode.removeChild(effect.domElement)
  }, [effect])

  // Set size
  useEffect(() => {
    effect.setSize(window.innerWidth, window.innerHeight)
  }, [effect, size])

  // Take over render-loop (that is what the index is for)
  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex)

  // This component returns nothing, it has no view, it is a purely logical
}
