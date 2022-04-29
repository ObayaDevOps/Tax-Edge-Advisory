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
  { loading: () => {
    <Box minHeight="100vh" bgColor="red.100">
                  <Text as="p" fontSize="md" marginTop="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
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
