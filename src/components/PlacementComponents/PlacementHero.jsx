"use client";
import Image from "next/image";

export default function PlacementHero() {
  return (
    <div className="relative w-full h-auto ">
      <div className="relative w-full overflow-hidden">
        <Image
          src="/placement/plcementbannerfinal.webp"
          alt="Placement Banner"
          priority
          className="w-full h-auto "
          width={1600}
          height={700}
          unoptimized={true}
        />
      </div>
    </div>
  );
}
