"use client";

import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/lanyard"), { ssr: false });

export function HeroLanyard() {
  return (
    <Lanyard
      position={[0.2, -1.15, 12.4]}
      fov={18}
      gravity={[0, -40, 0]}
      frontImage="/card-front.png"
      backImage="/card-back.png"
      imageFit="cover"
    />
  );
}
