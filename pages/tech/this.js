// Threejs example: threejs.org/examples/?q=asc#webgl_effects_ascii

import { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useCursor, Text as FibreText } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'
import { Box, Text } from '@chakra-ui/layout'

import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicAsciiTorusComponentWithCustomLoading = dynamic(
  () => import('../../components/asciiTorusNonDynamic'),
  // { loading: () => <Box> </Box> }
  { loading: () => {
      <Box minHeight="60vh"  minWidth ="100vw" bgColor="red" position="fixed">
    </Box>
  } }
)

export default function AsciiTorus() {
  return (
    <Box>
      <Head>
        <title>Ascii Torus: Interactive</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
      </Head>
    
      {/* <Box minHeight="60vh"  minWidth ="100vw" bgColor="black" position="fixed">
    </Box> */}


      < DynamicAsciiTorusComponentWithCustomLoading />
      {/* <Canvas position="relative" zIndex='1'>
        <color attach="background" args={['black']} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Torusknot />
        <OrbitControls />
        <AsciiRenderer invert />
      </Canvas> */}
    </Box>


  )
}
