'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Stars } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { Button } from "@/components/ui/button"

function HeroContent() {
  // This will hold the animated properties
  const starRef = useRef();

  // Animate the stars or any other element
  useFrame(({ clock }) => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.001; // Rotate stars slowly
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <Stars 
        ref={starRef} // Reference for animation
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
    </Float>
  )
}

export function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50" />
        <Canvas className="absolute inset-0">
          <Suspense fallback={null}>
            <HeroContent />
            <Environment preset="night" />
            <directionalLight position={[0, 0, 5]} intensity={0.5} />
            <ambientLight intensity={0.2} />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Welcome to E-Governance
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Create and sign petitions on the blockchain
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Create Petition
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="gradient-border"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

